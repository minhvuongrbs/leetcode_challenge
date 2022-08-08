/**
 * You are given n fractions, numbered from 0 to n-1.
 * Your task is to count the number of occurrences of the fraction that appears most often.
 *
 * X = [1,2,3,4,0] Y = [2,3,6,8,4] => 3: 1/2
 */

const solution = (X, Y) => {
  const map = new Map();
  const n = X.length;

  for (let index = 0; index < n; index++) {
    const fraction = X[index] / Y[index];
    if (!map.has(fraction)) {
      map.set(fraction, 1);
    } else {
      map.set(fraction, map.get(fraction) + 1);
    }
  }

  return Math.max(...map.values());
};

console.log(solution([1, 2, 3, 4, 0], [2, 3, 6, 8, 4]));
console.log(solution([3,3,4], [5.4,3]));
