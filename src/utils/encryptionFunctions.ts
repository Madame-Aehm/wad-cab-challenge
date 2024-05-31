export function encrypt(plaintextValue: string, keyValue: number) {
  const plaintext = plaintextValue.toLowerCase();
  let ciphertext = "";
  const { alphabet, alphabetShifted } = alphabets(keyValue);
  for (let i = 0; i < plaintext.length; i++) {
    if (plaintext[i] !== " ") {
      for (let j = 0; j < alphabetShifted.length; j++) {
        if (alphabet[j] === plaintext[i]) {
          ciphertext += alphabetShifted[j];
          break;
        }
      }
    } else {
      ciphertext += " ";
    }
  }
  return ciphertext;
}

export function alphabets(keyValue: number) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const toShift = alphabet.slice(26 - keyValue);
  return {
    alphabet, 
    alphabetShifted: toShift + alphabet.replace(toShift, "")
  }
}