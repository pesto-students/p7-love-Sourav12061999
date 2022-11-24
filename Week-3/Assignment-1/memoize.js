const memoize = (func) => {
  const cache = {};
  return function (...args) {
    let stringified = args
      .sort((a, b) => {
        if (a > b) return 1;
        else return -1;
      })
      .toString();
    if (!cache[stringified]) cache[stringified] = func(...args);
    return cache[stringified];
  };
};

function add(a, b) {
  console.log("Function call happened");
  return a + b;
}

const memoizeAdd = memoize(add);

console.log(memoizeAdd(5, 6));
console.log(memoizeAdd(5, 6));
console.log(memoizeAdd(5, 6));
