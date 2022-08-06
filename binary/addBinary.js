/**
 * 67. Add Binary
 * 
 * @param {string} a
 * @param {string} b
 * @return {string}
 * 
 * Exp: Can convert to decimal and use Math plus algorithmn and convert back. 
 * But it will take long time to write convert function.
 * And having issue with high number => overflow. trying to use convert way. pass only 194/294 test case.
 */
var addBinary = function (a, b) {
  const aConverted = convertBinaryToDecimal(a);
  const bConverted = convertBinaryToDecimal(b);

  return convertDecimalToBinary(aConverted + bConverted);
};

// Exp: js exponent: a**b
const convertBinaryToDecimal = (string) => {
  let output = 0;
  for (let index = 0; index < string.length; index++) {
    output += Number(string[index]) * 2 ** (string.length - index - 1);
  }

  return output;
};

const convertDecimalToBinary = (num) => {
console.log("🚀 ~ file: addBinary.js ~ line 24 ~ convertDecimalToBinary ~ num", num)
  if (num === 0) return '0';
  let output = '';
  while (num !== 0) {
    output = String(num % 2) + output;
    num = Math.floor(num / 2);
  }

  return output.toString();
};

console.log(addBinary('11', '1'));
console.log(addBinary('1010', '1011'));
console.log(
  addBinary(
    '10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101',
    '110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011'
  )
);
