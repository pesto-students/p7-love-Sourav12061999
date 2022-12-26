const pair = (arr = [], num = 0) => {
  arr.sort((a, b) => a - b);
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let diff = arr[right] - arr[left];
    if (diff > num) {
      right--;
    } else if (diff < num) {
      left++;
    } else {
      return 1;
    }
    return 0;
  }
};
console.log(pair([5, 10, 3, 2, 50, 80], 78));
