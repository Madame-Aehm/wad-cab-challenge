import CheckText from '@/components/CheckText';
import PlaintextSample from '@/components/PlaintextSample';
import ChallengerModal, { ChallengerType } from '@/model';
import dbConnect from '@/utils/dbConnect';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import React from 'react'

const Thisistheslug = async() => {
  const challengerCookie = cookies().get("challenger");
  if (challengerCookie) {
    await dbConnect();
    const challenger = await ChallengerModal.findOne({ name: challengerCookie.value }) as ChallengerType;
    if (!challenger) {
      throw Error("no challenger");
    }
    
    return (
      <>
        <h1>You found it!</h1>
        <p>It looks like there&apos;s another text that needs to be decrypted using your decryption algorithm! But oh no! It&apos;s more complicated! This time 
          you&apos;ll have to consider capitalized letters and punctuation! And to make matters worse, your key has changed 😵‍💫</p>
        <p>Your new key is <b>{ challenger.pageChallenge.key }</b>, and your text-to-be-deciphered is:</p>
        <PlaintextSample cipherText={challenger.pageChallenge.cipherText} />
        <p>Once you&apos;ve deciphered your text, you might notice it&apos;s familiar.. If not, you&apos;ll have to utilize your best detective skills to determine
          the name of the movie the text comes from 🔎
        </p>
        { challenger.pageChallenge.solved ? 
          <>
            <h2>Challenge Complete!</h2>
            { challenger.pageChallenge.acceptedAnswer && <p>You submitted: { challenger.pageChallenge.acceptedAnswer }</p>}
          </> 
          : <CheckText /> }
        <a href='/'>Back to Main ...</a>
      </>
    )
  } else return redirect("/");
}

export default Thisistheslug