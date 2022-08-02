function findMaxSubsegmentsCount(arr) {
  let count = 0;
  let currentMaxValue = 0;
  for (let i = 0; i < arr.length; i++) {
    currentMaxValue = Math.max(arr[i],currentMaxValue )
    if (arr[i] === currentMaxValue) {
      count++;
    }
  }
  return count;
}

console.log(findMaxSubsegmentsCount([2, 10, 5, 9]));
// console.log(findMaxSubsegmentsCount([2, 1, 3, 2, 4, 4, 5, 8, 7, 7]))
// console.log(findMaxSubsegmentsCount([4, 2, 10, 5, 9]));
