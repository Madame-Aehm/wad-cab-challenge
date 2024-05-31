import ChallengeSummary from "@/components/ChallengeSummary";
import JoinChallenge from "@/components/JoinChallenge";
import SlugChallenge from "@/components/SlugChallenge";
import ChallengerModal, { ChallengerType } from "@/model";
import { deleteThisCookie } from "@/serverActions";
import dbConnect from "@/utils/dbConnect";
import { encrypt } from "@/utils/encryptionFunctions";
import { cookies } from "next/headers";

export default async function Home() {
  const challengerCookie = cookies().get("challenger");
  console.log("this is the cookie", challengerCookie);
  if (challengerCookie) {
    await dbConnect();
    const challenger = await ChallengerModal.findOne({ name: challengerCookie.value }) as ChallengerType;
    if (!challenger) {
      // await deleteThisCookie();
      throw Error("no challenger");
    }
    const ciphertext = encrypt("thisistheslug", challenger.slugChallenge.key);
    return (
      <>
        <ChallengeSummary />
        <SlugChallenge keyValue={challenger.slugChallenge.key} ciphertext={ciphertext} />
      </>
    )
  }
  return (
    <>
      <ChallengeSummary />
      <JoinChallenge />
    </>
  );
}
