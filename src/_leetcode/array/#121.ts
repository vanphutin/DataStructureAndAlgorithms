function maxProfit(prices: number[]): number {
  let min_price = Infinity;
  let maxProfit = 0;
  for (let price of prices) {
    if (price < min_price) {
      min_price = price;
    } else if (price - min_price > maxProfit) {
      maxProfit = price - min_price;
    }
  }
  return maxProfit;
}
console.log(maxProfit([7, 5, 4]));
