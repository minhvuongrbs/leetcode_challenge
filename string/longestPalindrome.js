/**
 * @param {string} s
 * @return {number}
 *
 * Exp: Sometime, we don't need to do strict with the problem, just look at the data and find the smart way.
 */
var longestPalindrome = function (s) {
  const countMap = new Map();
  for (const iterator of s) {
    if (!countMap.has(iterator)) {
      countMap.set(iterator, 1);
    } else {
      countMap.set(iterator, countMap.get(iterator) + 1);
    }
  }

  let isHavingOddCount = false;
  let output = 0;
  countMap.forEach((value) => {
    if (value % 2 === 0) {
      output += value;
    } else {
      output += value - 1;
      isHavingOddCount = true;
    }
  });

  if (isHavingOddCount) output += 1;

  return output;
};
