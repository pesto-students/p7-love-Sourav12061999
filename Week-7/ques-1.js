const maxSum = (arr = []) => {
  let maxValue = -Infinity; // variable to store the max sum
  let prev = arr[0]; // storing the prev element to check whether contigous or not
  let sum = arr[0]; // calculating the sum
  for (i = 1; i < arr.length; i++) {
    if (arr[i] < prev) {
      // If not contigous store the sum in stack
      maxValue = Math.max(maxValue, sum);
      sum = arr[i];
    } else {
      sum += arr[i];
    }
    prev = arr[i];
  }
  return Math.max(maxValue, sum);
};

console.log(maxSum([1, 2, 3, 4, -10]));
