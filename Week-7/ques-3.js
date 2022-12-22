const sortArray = (arr = []) => {
  const map = new Map();
  map.set(0, 0);
  map.set(1, 0);
  map.set(2, 0);
  for (let i = 0; i < arr.length; i++) {
    let count = map.get(arr[i]) + 1;
    map.set(arr[i], count);
  }
  const result = [];
  for (let value of map) {
    for (let i = 0; i < value[1]; i++) {
      result.push(value[0]);
    }
  }
  return result;
};
console.log(sortArray([0, 2, 1, 2, 0]));
