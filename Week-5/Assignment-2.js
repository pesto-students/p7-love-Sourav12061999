function isVowel(char = "") {
  const vowels = "aeiou";
  return vowels.includes(char);
} // Checking whether a character is vowel or not

function vowelCount(str = "") {
  const vowelMap = new Map();
  let lowerCase = str.toLowerCase();
  for (let i = 0; i < lowerCase.length; i++) {
    let char = lowerCase[i];
    if (isVowel(char) === false) continue;

    if (vowelMap.has(char)) {
      vowelMap.set(char, vowelMap.get(char) + 1);
    } else {
      vowelMap.set(char, 1);
    }
  }

  return vowelMap;
}
