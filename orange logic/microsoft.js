// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
/*
const solution = (a, p, b, e) => {
  if (b > e) {
    [b, e] = [e, b];
  }

  const c = a.map((e, i) => [e, p[i]]);

  const tempArray = [];

  for (let i = 0; i < c.length; i++) {
    tempArray.push([c[i][1] - c[i][0], c[i][1] + c[i][0]]);
  }

  tempArray.sort((a, b) => a[1] - b[1]);
  const mergedArray = [tempArray[0]];

  for (let i = 1; i < tempArray.length; i++) {
    if (mergedArray[mergedArray.length - 1][1] >= tempArray[i][0]) {
      mergedArray[mergedArray.length - 1][1] = Math.max(
        mergedArray[mergedArray.length - 1][1],
        tempArray[i][1]
      );
    } else {
      mergedArray.push(tempArray[i]);
    }
  }

  let flag = true;
  for (let i = 0; i < mergedArray.length; i++) {
    if (
      mergedArray[i][0] <= b <= mergedArray[i][1] &&
      mergedArray[i][1] <= e <= mergedArray[i][0]
    ) {
      flag = false;
      break;
    }
  }

  if (flag) {
    return false;
  }
  
  return true;

};
*/

function solution(a, p, b, e){
  if (b > e){
[b, e] = [e, b];
}
const c = a.map(function(e, i) {
return [e, p[i]];
});
const intervals = []
for(let i=0; i < c.length; i++){

  intervals.push([c[i][1] - c[i][0], c[i][1] + c[i][0]]);
}
intervals.sort((a , b) => a[1] - b[1])
const merged = [intervals[0]]

for (let i=1; i<intervals.length; i++){
  if (merged[merged.length - 1][1] >= intervals[i][0]){
    merged[merged.length - 1][1] = Math.max(merged[merged.length - 1][1],intervals[i][1])
  } else {
    merged.push(intervals[i])
  }
}
let flag = true;
let result = false
for (let i = 0; i < merged.length; i++){
  if(merged[i][0] <= b <=merged[i][1] && merged[i][1] <= e <=merged[i][0]){
    result = true
    flag = false
    break
  }
}
if (flag){
  result = false
}
return result
}

console.log(solution([2, 1], [5, 1], 2, 6));
console.log(solution([1, 4, 2], [10, 4, 7], 11, 1));
