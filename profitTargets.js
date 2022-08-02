function stockPairs(stocksProfit, target) {
  const choseStockIndexs = [];
  let sum = 0;

  for (let index = 0; index < stocksProfit.length; index++) {
    const pairIndex = stocksProfit.findIndex(
      (stock, findIndex) =>
        stock === target - stocksProfit[index] && findIndex !== index
    );

    if (
      pairIndex !== -1 &&
      !choseStockIndexs.includes(index) &&
      !choseStockIndexs.includes(pairIndex)
    ) {
      choseStockIndexs.push(index, pairIndex);
      sum++;
    }
  }
  return sum;
}

console.log(stockPairs([1, 3, 46, 1, 3, 9], 47));
console.log(stockPairs([6, 6, 3, 9, 3, 5, 1], 12));
console.log(stockPairs([5,7,9,13,11,6,6,3,3], 12));

