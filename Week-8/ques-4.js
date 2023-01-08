// Parenthesis

const matching = {
  ")": "(",
  "}": "{",
  "]": "[",
};

const matchParenthesis = (str = "") => {
  const stack = [];
  let left = 0;
  const right = str.length;
  const keys = Object.keys(matching);
  const values = Object.values(matching);
  while (left < right) {
    if (values.includes(str[left])) {
      stack.push(str[left]);
    } else {
      if (stack.length === 0) return false;
      if (matching[str[left]] !== stack[stack.length - 1]) {
        return false;
      }
      stack.pop();
    }
    left++;
  }

  return stack.length === 0;
};

console.log(matchParenthesis("{([))}"));
