/**
 * @param {number[]} nums
 * @return {number}
 */

// var maxSubArray = function (nums) {
//   let max = nums[0];
//   let temporaryMax = nums[0];
//   if (nums.length === 1) return nums[0];

//   let left = 0,
//     right = nums.length - 1;

//   for (let index = 1; index < nums.length; index++) {
//     const element = nums[index];

//     if (element > 0) {
//       right++;
//       temporaryMax += element;
//     } else {
//       if (element + temporaryMax > 0) {
//         right++;
//         temporaryMax = element + temporaryMax;
//       } else {  
//         left = index;
//         right = index;
//         temporaryMax = element;
//       }

//       if (temporaryMax > max) max = temporaryMax;
//     }
//   }

//   console.log('left: ', left);
//   console.log('right: ', right);
//   console.log('temporaryMax: ', temporaryMax);

//   return max;
// };

/**
 * Brute force solution 1.
 * Complexity: O(n^3)
 * @param {*} nums
 * @returns
 */

// const maxSubArray = (nums) => {
//   let maxSum = nums[0];
//   for (let i = 0; i < nums.length; i++) { // O(n)
//     for (let j = i; j < nums.length; j++) { // O(n)
//       maxSum = Math.max(maxSum, sum(nums, i, j)); //O(n)
//     }
//   }

//   return maxSum;
// };

// const sum = (nums, i, j) => {
//   let output = 0;
//   for (let index = i; index <= j; index++) {
//     output += nums[index];
//   }

//   return output;
// };

/**
 * Brute force solution 2 with complexity is O(n^2)
 *
 */

// const maxSubArray = (nums) => {
//   let maxSum = nums[0];

//   for (let i = 0; i < nums.length; i++) {
//     let subSum = 0;
//     for (let j = i; j < nums.length; j++) {
//       subSum += nums[j];
//       maxSum = Math.max(maxSum, subSum);
//     }
//   }

//   return maxSum;
// };
/**
 * Linear programing. Kanade's algorithm
 * @param {*} nums
 * @returns
 */
const maxSubArray = (nums) => {
  let subMax = nums[0];
  let max = nums[0];
  if (nums.length === 1) return nums[0];

  for (let index = 1; index < nums.length; index++) {
    const currentNumber = nums[index];

    subMax = Math.max(currentNumber, subMax + currentNumber);
    max = Math.max(max, subMax);
  };

  return max;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
