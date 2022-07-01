const palindromicNumber = (number) => {
  let originalNumber = number;
  let reversedNumber = 0;
  while (originalNumber) {
    reversedNumber = reversedNumber * 10 + (originalNumber % 10);
    originalNumber = Math.floor(originalNumber / 10);
  }

  if (reversedNumber === number) return true;
  return false;
};

console.log(palindromicNumber(121));
console.log(palindromicNumber(20200202));
console.log(palindromicNumber(43));
console.log(palindromicNumber(121));
