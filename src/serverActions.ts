'use server'

import { cookies } from "next/headers";
import { ChallengerDataType } from "./components/JoinChallenge";
import ChallengerModal, { ChallengerType } from "./model";
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
    const plainText = "lorem ipsum dolor sit amet commodo magnis ligula urna cursus nam magna ultrices cubilia per natoque lorem potenti eu nibh elementum scelerisque lacinia velit aliquam ullamcorper inceptos eleifend nec cras accumsan tincidunt enim mollis parturient dolor ornare vulputate integer quis luctus dictum tellus tempus pede sit tortor senectus placerat pellentesque curabitur odio platea fermentum ad id mi purus ipsum ex feugiat lacus consectetuer torquent et aliquet augue justo dui dictumst arcu suscipit at netus sagittis facilisi orci pharetra nostra proin maecenas convallis lobortis taciti adipiscing ac amet in felis mus conubia ultricies habitasse fames massa sed porttitor penatibus pulvinar";
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
        plainText,
        cipherText: encrypt(plainText, key2)
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
    if (challenger.pageChallenge.plainText === testText.trim()) {
      challenger.pageChallenge.solved = Date();
      await challenger.save();
      return { error: null }
    } 
    return { error: "Not this time. Try again, you can do it!!!" }
  } catch (error) {
    
  }
}