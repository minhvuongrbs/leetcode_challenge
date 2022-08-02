// 121. Best Time to Buy and Sell Stock

/**
 * @param {number[]} prices
 * @return {number}
 */

// Brute force => O(n2)
// const maxProfit = function (prices) {
//   let maxProfit = 0;
//   for (let i = 0; i < prices.length - 1; i++) {
//     for (let j = i + 1; j < prices.length; j++) {
//       if (prices[j] - prices[i] > maxProfit) maxProfit = prices[j] - prices[i];
//     }
//   }

//   return maxProfit;
// };

const maxProfit = function (prices) {
  if (prices.length == 1) return 0;
  let maxProfit = 0,
    buyingDayIndex = 0,
    sellingDayIndex = 1;

  while (sellingDayIndex < prices.length) {
    if (prices[buyingDayIndex] < prices[sellingDayIndex])
      maxProfit = Math.max(maxProfit, prices[sellingDayIndex] - prices[buyingDayIndex]);
    else buyingDayIndex = sellingDayIndex;
    sellingDayIndex++;
  }

  return maxProfit;
};

// const maxProfit = (prices) => {
//   let result = 0;
//   for (let index = 1; index < prices.length; index++) {
//     result += Math.max(prices[index] - prices[index - 1], 0);
//   }

//   return result;
// };

const prices1 = [7, 1, 5, 3, 6, 4];
const prices3 = [7, 2, 8, 1, 6, 4];
const prices2 = [7, 6, 4, 3, 1];
console.log('input 1: ', maxProfit(prices1));
console.log('input 2: ', maxProfit(prices2));
console.log('input 3: ', maxProfit(prices3));
