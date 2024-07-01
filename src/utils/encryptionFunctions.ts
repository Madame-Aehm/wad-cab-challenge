export function encrypt(plaintextValue: string, keyValue: number) {
  const { alphabet, alphabetShifted } = alphabets(keyValue);
  return plaintextValue.split("").map((char) => {
    if (alphabet.includes(char.toLowerCase())) {
      const alphIndex = getCharIndex(char);
      return char.toUpperCase() === char ? alphabetShifted[alphIndex].toUpperCase() : alphabetShifted[alphIndex]; 
    }
    return char;
  }).join("")
}

function getCharIndex (char: string) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < alphabet.length; i++) {
    if (char.toLowerCase() === alphabet[i]) {
      return i
    }
  }
  return -1;
}

export function alphabets(keyValue: number) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const toShift = alphabet.slice(26 - keyValue);
  return {
    alphabet, 
    alphabetShifted: toShift + alphabet.replace(toShift, "")
  }
}

export function generateRandomKey () {
  const min = 3;
  const max = 8;
  return Math.floor(Math.random() * (max - min + 1) + min);
}