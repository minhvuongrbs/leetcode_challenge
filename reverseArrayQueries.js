const performOperations = (arr, operations) => {
  for (var i = 0; i < operations.length; i++) {
    {
      reverse(arr, operations[i][0], operations[i][1]);
    }
  }
  return arr;
};

function reverse(nums, start, end) {
  var temp;
  while (start < end) {
    {
      temp = nums[start];
      nums[start] = nums[end];
      nums[end] = temp;
      start++;
      end--;
    }
  }
}


console.log(
  performOperations(
    [1, 2, 3],
    [
      [0, 2],
      [1, 2],
      [0, 2],
    ]
  )
);
