// 509. Fibonacci Number

// easiest way to calculate fibonacci
const basicRecursionFibonacci = (n) => {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return basicRecursionFibonacci(n - 1) + basicRecursionFibonacci(n - 2);
};

// dynamic programing
/* 
const calculatedFibos = [1, 1];
const fibonacci = (n) => {
  // if already calculated => get from the dataset
  if (calculatedFibos.length > n) return calculatedFibos[n];

  // if not, calculate and store in the dataset
  calculatedFibos[n] = fibonacci(n - 1) + fibonacci(n - 2);

  // return value from dataset
  return calculatedFibos[n];
};
*/

/**
 * use caching
 * @param {*} n
 * @param {*} caching
 * @returns
 * Exp: If n is too high, stack is out
 * because it all store in stack. => Tràn call stack.
 * => recursion is slow.
 */

const memoizeFibonacci = (n, caching = [0, 1]) => {
  if (caching.length > n) {
    return caching[n];
  }

  return memoizeFibonacci(n, [
    ...caching,
    caching[caching.length - 2] + caching[caching.length - 1],
  ]);
};

// Iterative algorithm
const basicLoopFibonacci = (n) => {
  const sequences = [0, 1];
  for (let index = 2; index <= n; index++) {
    sequences[index] = sequences[index - 1] + sequences[index - 2];
  }

  return sequences[n];
};

/**
 * Changing array is slow.
 * @param {*} n 
 * @returns 
 */

const fastLoopFibonacci = (n) => {
  let first = 0,
    second = 1,
    index = 1;

  if (n === 0) return 0;
  if (n === 1) return 1;

  while (index < n) {
    index++;

    second = first + second;
    first = second - first;
  }

  return second;
};

const n = 100_000_000;

// console.time('basicRecursionFibonacci');
// console.log(basicRecursionFibonacci(n));
// console.timeEnd('basicRecursionFibonacci');

// console.time('memoizeFibonacci');
// console.log(memoizeFibonacci(n));
// console.timeEnd('memoizeFibonacci');

console.time('basicLoopFibonacci');
console.log(basicLoopFibonacci(n));
console.timeEnd('basicLoopFibonacci');

console.time('fastLoopFibonacci');
console.log(fastLoopFibonacci(n));
console.timeEnd('fastLoopFibonacci');
