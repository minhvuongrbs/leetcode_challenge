/**
 * 41. First Missing Positive
 * 
 * This is a demo task.

Write a function:

function solution(A);

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000].

*/
/**
 * Exp: js sort function has complexity is O(nlogn)
 * 
 * Solution with sort method.
 

const firstMissingPositive = (nums) => {
  const sortedArray = [
    ...new Set(nums.filter((number) => number > 0).sort((a, b) => a - b)),
  ];

  if (sortedArray.length === 0 || sortedArray[0] > 1) return 1;

  let output;
  for (let index = 0; index < sortedArray.length - 1; index++) {
    if (sortedArray[index] + 1 !== sortedArray[index + 1])
      return sortedArray[index] + 1;
  }

  if (!output) return sortedArray[sortedArray.length - 1] + 1;
};

*/

/**
 * output will be from 1=> length+1
 * pushing data into set, because complexity of quering set is O(1)
 * 
 * Total complexity is O(n)
 * 
 * @param {*} nums 
 * @returns 
 */
const firstMissingPositive = (nums) => {
  const inputSet = new Set(nums);

  for (let index = 1; index < inputSet.size + 2; index++) {
    if(!inputSet.has(index)) return index;
  }
};

console.log(firstMissingPositive([1, 3, 6, 4, 1, 2]));
