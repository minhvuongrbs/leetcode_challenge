/**
 * 977. Squares of a Sorted Array
 * 
 * @param {number[]} nums
 * @return {number[]}
 * 
 * Trivial solution
 * Complexity will be O(nlogn) because of the Complexity of merge sort.
 
var sortedSquares = function (nums) {
  const absSortedNums = nums.sort((a, b) => Math.abs(a) - Math.abs(b));

  return absSortedNums.map((num) => num * num);
};
*/

/**
 * We can sort the sorted array in some way with the complexity O(n)
 * In this solution, we use two pointers to check.
 * The condition to stop the loop: can use one more loop index to check the number of iteration or we can use condition left<=right.
 * With array, we can add value to the beginning or to the end of the array, or to the specific position of array.
 * **/
var sortedSquares = function (nums) {
  const output = [];
  let left = 0,
    right = nums.length - 1;
  const numsLength = nums.length;

  while (left <= right) {
    if (Math.abs(nums[right]) > Math.abs(nums[left])) {
      output.unshift(nums[right] * nums[right]);
      right -= 1;
    } else {
      output.unshift(nums[left] * nums[left]);
      left += 1;
    }
  }

  return output;
};

console.log(sortedSquares([-4, -1, 0, 3, 10]));
