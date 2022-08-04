/**
 * 169. Majority Element
 * @param {number[]} nums
 * @return {number}
 * 
 * Exp: Map is very useful to store and get data. Performance of quering with map is high(O(1)) in most cases.
 * It has memory equal O(n)
var majorityElement = function (nums) {
  const coutingMap = new Map();
  for (const currentValue of nums) {  
    if (!coutingMap.has(currentValue)) {
      coutingMap.set(currentValue, 1);
    } else {
      // value existed in map, plus one
      coutingMap.set(currentValue, coutingMap.get(currentValue) + 1);
    }

    if(coutingMap.get(currentValue) > nums.length/2) return currentValue;
  }
};
*/

// Bayer-Moore algorithmn
// Always use only two variable on global environment.
const majorityElement = (nums) => {
  let majorNumber;
  let count = 0;

  for (const currentElement of nums) {
    // If having no initial count
    if (count === 0) {
      majorNumber = currentElement;
    }

    count += currentElement === majorNumber ? 1 : -1;
  }

  return majorNumber;
};

console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([2, 2, 2, 2, 2, 1, 1, 1, 2]));
console.log(majorityElement([6, 5, 5]));
console.log(majorityElement([6, 6, 6, 7, 7]));
