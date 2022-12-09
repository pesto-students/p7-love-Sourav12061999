const hasDuplicate = (array = []) => new Set(array).size != array.length;

console.log(hasDuplicate([1, 1, 2])); // true
console.log(hasDuplicate([1, 3, 2])); // false
