'use server'

import { cookies } from "next/headers";
import { ChallengerDataType } from "./components/JoinChallenge";
import ChallengerModal from "./model";
import dbConnect from "./utils/dbConnect";
import { encrypt, generateRandomKey } from "./utils/encryptionFunctions";
import { revalidatePath } from "next/cache";
import { getRandomQuote } from "./utils/randomQuote";
import { redirect } from "next/navigation";

export async function createChallenger(data: ChallengerDataType) {
  try {
    await dbConnect();
    const existingChallenger = await ChallengerModal.findOne({ name: data.name });
    if (existingChallenger) {
      return { error: "Meep - that alias is already being used!" }
    }
    const plainText = getRandomQuote();
    const key1 = generateRandomKey();
    let key2;
    do {
      key2 = generateRandomKey();
    } while (key2 === key1);
    await ChallengerModal.create({
      name: data.name,
      course: data.course,
      slugChallenge: { key: key1 },
      pageChallenge: {
        key: key2,
        plainTextCompare: plainText.media,
        cipherText: encrypt(plainText.quote, key2)
      }
    });
    cookies().set("challenger", data.name);
    return { error: null };
  } catch (error) {
    console.log(error);
    return { error: "Server Error :/" };
  }
} 

export async function refreshAfterCreation() {
  revalidatePath("/");
}

export async function deleteThisCookie() {
  cookies().delete("challenger");
  redirect("/");
}

export async function checkText(testText: string) {
  try {
    const cookie = cookies().get("challenger");
    if (!cookie) {
      return { error: "You shouldn't be here.." };
    }
    await dbConnect();
    const challenger = await ChallengerModal.findOne({ name: cookie.value });
    if (!challenger) {
      deleteThisCookie();
      return { error: "no challenger" }
    }
    for (let i = 0; i < challenger.pageChallenge.plainTextCompare.length; i++) {
      if (testText.toLowerCase().includes(challenger.pageChallenge.plainTextCompare[i])) {
        challenger.pageChallenge.solved = Date();
        challenger.pageChallenge.acceptedAnswer = testText;
        await challenger.save();
        return { error: null }
      }
    }
    return { error: "Not this time. Try again, you can do it!!!" }
  } catch (error) {
    
  }
}