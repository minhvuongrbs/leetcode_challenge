/**
 * find the index of zero value, sort in the order of increasing.
 * remove all zero value
 * push that zero value to the end of the array.
 *
 * Exp: Create array with the constructor will be faster than running the for function which iterate all of elements.
 * 
 * We can iterate array from end to start if want to modify current value without changing index.
 **/

const moveZeroes = (nums) => {
  let zeroValueCount = 0;
  for (let index = nums.length - 1; index >= 0; index--) {
    if (nums[index] === 0) {
      nums.splice(index, 1);
      zeroValueCount++;
    }
  }

  nums.push(...new Array(zeroValueCount).fill(0));

  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
