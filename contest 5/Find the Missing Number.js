function missingNumber(nums) {
  // TODO
  let sum = 0;

  for (let num of nums) {
    sum += num;
  }

  return ((nums.length * (nums.length + 1)) / 2) - sum;
}
