import { alphabets, encrypt } from "@/utils/encryptionFunctions";

export default function Home() {
  const key = 5; // can be dynamically generated for each student
  const plaintext = "thisistheslug"; // can be dynamically generated for each student
  const ciphertext = encrypt(plaintext, key);
  const { alphabet, alphabetShifted } = alphabets(key);
  return (
    <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column", textAlign: "center", width: "90vw", justifyContent: "center" }}>
        <h1>CAB WAD ticket challenge!</h1>
        <h3>Be the first in your course discipline to complete the coding challenge and you&apos;ll win a free ticket to the We Are Developers conference in Berlin</h3>
          <p>
            The <a target="_blank" href="https://www.seobility.net/en/wiki/URL_Slug">url slug</a> for the next step has been encrypted! The letters have 
            been shifted by a key value, you&apos;ll have to use code to decrypt them! The encryption follows the pattern of 
            the <a href="https://en.wikipedia.org/wiki/Caesar_cipher" target="_blank">Caesar Cipher</a> - one of the earliest known cryptographic systems. 
          </p>
          <p>
            Your key is <b>{key}</b>, so your Cipher will look like:
          </p>
          <div className="table-container">
            <table>
              <tbody>
                <tr>
                  { alphabet.split("").map((letter) => {
                    return (
                      <td key={letter}>
                        <div>{ letter }</div>
                      </td>
                    )
                  }) }
                </tr>
                <tr>
                  { alphabetShifted.split("").map((letter) => {
                    return (
                      <td key={letter + "+"}>
                        <div>{ letter }</div>
                      </td>
                    )
                  }) }
                </tr>
              </tbody>
            </table>
          </div>
          <p>The URL slug you&apos;re trying to decrypt is: <b>{ciphertext}</b></p>
          <p>Once you&apos;ve got your decrypted slug, paste it up top in the URL (www.baseurl.com/<b>{ciphertext}</b>) to go to the next step!</p>
    </main>
  );
}
