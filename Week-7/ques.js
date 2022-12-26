// Here I have to find a+b+c ~ N
// I did this -> a+b ~ N - c;
const threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);
  let closestNum = null;
  for (i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (closestNum === null) {
        closestNum = sum;
      } else {
        if (Math.abs(sum - target) < Math.abs(closestNum - target)) {
          closestNum = sum;
        }
      }
      if (sum < target) {
        left++;
      } else if (sum > target) {
        right--;
      } else {
        return target;
      }
    }
  }
  return closestNum;
};
