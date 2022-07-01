/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// brute force way
/* var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
};

 */

// Hashmap => faster
const twoSum = (nums, target) => {
  const hashmap = new Map();
  for (let index = 0; index < nums.length; index++) {
    const pairNumber =  target-nums[index];
    if(hashmap.has(pairNumber)) return [hashmap.get(pairNumber), index];
    hashmap.set(nums[index], index);
  }
}


console.log(twoSum([2, 1, 3, 7, 11, 15], 9));
