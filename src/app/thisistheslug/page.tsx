import CheckText from '@/components/CheckText';
import ChallengerModal, { ChallengerType } from '@/model';
import dbConnect from '@/utils/dbConnect';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import React from 'react'

type Props = {}

const Thisistheslug = async(props: Props) => {
  const challengerCookie = cookies().get("challenger");
  // console.log("this is the cookie", challengerCookie);
  if (challengerCookie) {
    await dbConnect();
    const challenger = await ChallengerModal.findOne({ name: challengerCookie.value }) as ChallengerType;
    if (!challenger) {
      throw Error("no challenger");
    }
    
    return (
      <>
        <h1>You found it!</h1>
        <p>Looks like there&apos;s another text that needs to be decrypted using your decryption algorithm! But oh no! Your key has changed!</p>
        <p>Your new key is <b>{ challenger.pageChallenge.key }</b>, and your text-to-be-deciphered is:</p>
        <p>{ challenger.pageChallenge.cipherText }</p>
        { challenger.pageChallenge.solved ? <h2>Challenge Complete!</h2> : <CheckText /> }
        <a href='/'>Back to Main ...</a>
        
      </>
    )
  } else return redirect("/");
}

export default Thisistheslug