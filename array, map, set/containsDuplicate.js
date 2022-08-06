/**
 * 217. Contains Duplicate
 * 
 * @param {number[]} nums
 * @return {boolean}
 * Exp: Map is useful at the case of needing a way to store some iterated data to compare.
 * And it's fast. And hashmap can use any key-value data type.
 * In this case, key is value, value is count.
 * But the downside is, memory is high, it's O(n).
 * 
 * Follow-up: Could you solve the problem in linear time and in O(1) space?
 */

var containsDuplicate = function (nums) {
  const cachedMap = new Map();
  for (const currentValue of nums) {
    if (!cachedMap.has(currentValue)) {
      cachedMap.set(currentValue, 1);
    } else {
      return true;
    }
  }

  return false;
};

/**
 *  if you need to map keys to values use hashmap; if you just need keys, use hashset.
 * hashmap store unique value
 * hashset store unique value with key.
**/

const containsDuplicate = nums => {
  const set = new Set();
  for (const currentValue of nums) {
    if(set.has(currentValue)) return true;
    set.add(currentValue);
  }
  
  return false;
}

console.log(containsDuplicate([1,2,3,1]))
console.log(containsDuplicate([1,2,3,4]))
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))