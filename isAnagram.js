/**
 * 242. Valid Anagram
 *
 *
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * 
 * Exp: map is so powerful. It also supports delete to remove element and size to check number of iteration.
 * 
 */
var isAnagram = function (s, t) {
  const inputStringMap = new Map();
  for (const currentCharacter of s) {
    if (!inputStringMap.has(currentCharacter)) {
      inputStringMap.set(currentCharacter, 1);
    } else {
      inputStringMap.set(
        currentCharacter,
        inputStringMap.get(currentCharacter) + 1
      );
    }
  }

  for (const currentCharacter of t) {
    if (inputStringMap.has(currentCharacter)) {
      inputStringMap.set(
        currentCharacter,
        inputStringMap.get(currentCharacter) - 1
      );
    } else {
      return false;
    }

    if (inputStringMap.get(currentCharacter) === 0) {
      inputStringMap.delete(currentCharacter);
    }
  }

  return inputStringMap.size === 0 ? true : false;
};

console.log(isAnagram('anagram', 'nagaram'));
