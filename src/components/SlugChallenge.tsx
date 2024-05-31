import React from 'react'
import CipherTable from './CipherTable'

type Props = {
  keyValue: number
  ciphertext: string
}

const SlugChallenge = ({ keyValue, ciphertext }: Props) => {
  return (
    <>
      <p>
        The <a target="_blank" href="https://www.seobility.net/en/wiki/URL_Slug">url slug</a> for the next step has been encrypted! The letters have 
        been shifted by a key value, you&apos;ll have to use code to decrypt them! The encryption follows the pattern of 
        the <a href="https://en.wikipedia.org/wiki/Caesar_cipher" target="_blank">Caesar Cipher</a> - one of the earliest known cryptographic systems. 
      </p>
      <p>
        Your key is <b>{keyValue}</b>, so your Cipher will look like:
      </p>
      <CipherTable keyValue={keyValue} />
      <p>The URL slug you&apos;re trying to decrypt is: <b>{ciphertext}</b></p>
      <p>Once you&apos;ve got your decrypted slug, paste it up top in the URL (https://wad-cab-challenge.vercel.app/<b>{ciphertext}</b>) to go to the next step!</p>
    </>
  )
}

export default SlugChallenge