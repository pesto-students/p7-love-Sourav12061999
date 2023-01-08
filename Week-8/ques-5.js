// Next Greater Element

const nextGreater = (arr = []) => {
  const stack = [arr[arr.length - 1]];
  const ans = [-1];

  for (let i = arr.length - 2; i >= 0; i--) {
    while (stack.length) {
      if (arr[i] >= stack[stack.length - 1]) {
        stack.pop();
      } else {
        ans.push(stack[stack.length - 1]);
        break;
      }
    }
    if (stack.length === 0) {
      ans.push(-1);
    }
    stack.push(arr[i]);
  }
  return ans.reverse();
};
console.log(nextGreater([1, 3, 2, 4]));
