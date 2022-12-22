// Non-Optimized (O[N^2]);
const buySellStock = (arr = []) => {
  let profit = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      profit = Math.max(profit, arr[j] - arr[i]);
    }
  }
  return profit;
};

// Optimized with (O[N])
const buySellStock2 = (arr = []) => {
  let profit = 0;
  let currSmallest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (currSmallest > arr[i]) {
      currSmallest = arr[i];
    } else {
      profit = Math.max(arr[i] - currSmallest, profit);
    }
  }
  return profit;
};
console.log(buySellStock2([7, 1, 5, 3, 6, 4]));
