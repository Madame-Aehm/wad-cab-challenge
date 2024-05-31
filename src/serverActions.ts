'use server'

import { cookies } from "next/headers";
import { ChallengerDataType } from "./components/JoinChallenge";
import ChallengerModal from "./model";
import dbConnect from "./utils/dbConnect";
import { encrypt, generateRandomKey } from "./utils/encryptionFunctions";
import { revalidatePath } from "next/cache";

export async function createChallenger(data: ChallengerDataType) {
  console.log("this is the data", data);
  try {
    await dbConnect();
    const existingChallenger = await ChallengerModal.findOne({ name: data.name });
    if (existingChallenger) {
      console.log("existingChallenger?", existingChallenger);
      return { error: "Meep - that alias is already being used!" }
    }
    const plainText = "testing testing testing";
    const key1 = generateRandomKey();
    let key2 = generateRandomKey();
    if (key1 === key2) {
      key2 = key2 === 8 ? key2 - 1 : key2  + 1;
    }
    const newChallenger = await ChallengerModal.create({
      name: data.name,
      slugChallenge: { key: key1 },
      pageChallenge: {
        key: key2,
        plainText,
        cipherText: encrypt(plainText, key2)
      }
    });
    console.log("new challenger created", newChallenger);
    cookies().set("challenger", data.name);
    return { error: null }
  } catch (error) {
    console.log(error);
    return { error: "Server Error :/" }
  }
} 

export async function refreshAfterCreation() {
  revalidatePath("/");
}

export async function deleteThisCookie() {
  cookies().delete("challenger");
}