import ChallengeSummary from "@/components/ChallengeSummary";
import JoinChallenge from "@/components/JoinChallenge";
import Leaderboard from "@/components/Leaderboard";
import SlugChallenge from "@/components/SlugChallenge";
import ChallengerModal, { ChallengerType } from "@/model";
import dbConnect from "@/utils/dbConnect";
import { encrypt } from "@/utils/encryptionFunctions";
import { cookies } from "next/headers";

export default async function Home() {
  const challengerCookie = cookies().get("challenger");
  if (challengerCookie) {
    await dbConnect();
    const challenger = await ChallengerModal.findOne({ name: challengerCookie.value }) as ChallengerType;
    if (!challenger) {
      throw Error("no challenger");
    }
    const ciphertext = encrypt("thisistheslug", challenger.slugChallenge.key);
    return (
      <>
        <ChallengeSummary />
        <SlugChallenge keyValue={challenger.slugChallenge.key} ciphertext={ciphertext} />
        <Leaderboard />
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
