// easiest way to calculate fibonacci
// const fibonacci = (n) => {
//   if (n <= 1) return 1;
//   return fibonacci(n - 1) + fibonacci(n - 2);
// };

// dynamic programing
const calculatedFibos = [1, 1];
const fibonacci = (n) => {
  // if already calculated => get from the dataset
  if (calculatedFibos.length > n) return calculatedFibos[n];

  // if not, calculate and store in the dataset
  calculatedFibos[n] = fibonacci(n - 1) + fibonacci(n - 2);

  // return value from dataset
  return calculatedFibos[n];
};

for (let index = 0; index < 200; index++) {
  console.log(fibonacci(index));
}
