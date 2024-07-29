function solutionASCII (key: number, ciphertext: string) {
  const plaintext = ciphertext.split("").map((char, i) => {
    const code = ciphertext.charCodeAt(i);
    if ((code > 64) && (code < 91)) {
      // is upper case
      return String.fromCharCode((((code - 65) + key) % 26) + 65);
    } else if ((code > 96) && (code < 123)) {
      // is lower case
      return String.fromCharCode((((code - 97) + key) % 26) + 97);
    }
    // is non alphabetic character
    return char;
  }).join("");
  console.log("plaintext", plaintext);
}

function solutionIndex (key: number, ciphertext: string) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const to_shift = alphabet.slice(26 - key);
  const shifted_alphabet = to_shift + alphabet.replace(to_shift, "");
  const plaintext = ciphertext.split("").map((char) => {
    if (alphabet.includes(char.toLowerCase())) {
      if (char === char.toUpperCase()) {
        // is upper case
        return alphabet[shifted_alphabet.indexOf(char.toLowerCase())].toUpperCase();
      }
      // is lower case
      return alphabet[shifted_alphabet.indexOf(char)];
    }
    // is not alphabetic
    return char;
  }).join("");
  console.log("plaintext", plaintext);
}

type dictionaryType = {
  [key: string]: number
}

function solutionDictionary(key: number, ciphertext: string) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const dict: dictionaryType = alphabet.split("").reduce((acc, item, index) => {
    return { ...acc, [item]: ((index + key) % 26)};
  }, {});
  console.log(dict);
  const plaintext = ciphertext.split("").map((char) => {
    if (alphabet.includes(char.toLowerCase())) {
      if (char === char.toUpperCase()) {
        // is upper case
        return alphabet[dict[char.toLowerCase()]].toUpperCase();
      }
      // is lower case
      return alphabet[dict[char]];
    }
    // is not alphabetic
    return char;
  }).join("");
  console.log(plaintext);
}

const string1 = "lnixkvtebyktzbeblmbvxqibtebwhvbhnl";
const key1 = 7;
const string2 = "Sbov tbii, tebob al F ybdfk? Jv cxqebo txp x obibkqibppiv pbic-fjmolsfkd ylrixkdbofb ltkbo colj Ybidfrj tfqe ilt doxab kxozlibmpv xka x mbkzexkq clo yrddbov. Jv jlqebo txp x cfcqbbk vbxo lia Cobkze molpqfqrqb kxjba Zeilb tfqe tbyyba cbbq. Jv cxqebo tlria tljxkfwb, eb tlria aofkh, eb tlria jxhb lrqoxdblrp zixfjp ifhb eb fksbkqba qeb nrbpqflk jxoh. Pljbqfjbp eb tlria xzzrpb zebpqkrqp lc ybfkd ixwv, qeb ploq lc dbkboxi jxixfpb qexq lkiv qeb dbkfrp mlppbpp xka qeb fkpxkb ixjbkq. Jv zefiaella txp qvmfzxi, prjjbop fk Oxkdllk, irdb ibpplkp. Fk qeb pmofkd tb'a jxhb jbxq ebijbqp. Tebk F txp fkplibkq F txp mixzba fk x yroixm yxd xka ybxqbk tfqe obbap, mobqqv pqxkaxoa obxiiv. Xq qeb xdb lc qtbisb F obzbfsba jv cfopq pzofyb. Xq qeb xdb lc clroqbbk, x Wlolxpqofxk kxjba Sfijx ofqrxifpqfzxiiv pexsba jv qbpqfzibp. Qebob obxiiv fp klqefkd ifhb x pelok pzolqrj, fq'p yobxqeqxhfkd, F prddbpq vlr qov fq.";
const key2 = 3;

// solutionASCII(key2, string2);
// solutionIndex(key2, string2);
// dictionary(key2, string2);