function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

console.log(sumRange(5));
console.log(sumRange(4));
console.log(sumRange(3));
