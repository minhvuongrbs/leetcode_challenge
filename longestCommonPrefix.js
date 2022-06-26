// Solution with two for loop
/*
const longestCommonPrefix = (strs) => {
  let longestPrefix = '';
  if(strs.length === 0) return '';
  const firstString = strs[0];

  for(let indexOfFirstString = 0; indexOfFirstString < strs[0].length; indexOfFirstString++) {
    let isCommonPrefix = true;
    
    for(let index = 1; index < strs.length; index++) {
      console.log(`checking character ${firstString.charAt(indexOfFirstString)} of ${strs[index]}`);
      const currentString = strs[index];
      if(currentString.charAt(indexOfFirstString) !== firstString.charAt(indexOfFirstString)) {
        isCommonPrefix = false;
        break;
      }
    }

    if(isCommonPrefix) {
      console.log('common character found', firstString.charAt(indexOfFirstString));
      longestPrefix += firstString.charAt(indexOfFirstString);
    }
    else break;
  }
  if(longestPrefix.length === 0) return '';
  return longestPrefix;
}

*/

// Solution with indexOf
const longestCommonPrefix = (strs) => {
  let longestPrefix = strs[0];

  for(index = 0; index <strs.length; index ++) {
    while(strs[index].indexOf(longestPrefix) !== 0) {
      longestPrefix = longestPrefix.substring(0, longestPrefix.length - 1);
    }
  }

  return longestPrefix;
}

const test1 = ['flower', 'flow', 'flight'];
const test2 = ["dog","racecar","car"];

console.log('Test 1: ',longestCommonPrefix(test1));
console.log('Test 2: ',longestCommonPrefix(test2));
