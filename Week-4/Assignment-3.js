const Fib = {
  n: 5,
  [Symbol.iterator]: function () {
    let i = 1;
    let oldEl = 0;
    let newEl = 0;
    return {
      next: () => {
        if (i++ < this.n) {
          [oldEl, newEl] = [newEl, oldEl + newEl || 1];
          return { value: oldEl, done: false };
        } else {
          return {
            done: true,
            value: null,
          };
        }
      },
    };
  },
};

console.log([...Fib]);

for (let num of Fib) {
  console.log(num);
}
