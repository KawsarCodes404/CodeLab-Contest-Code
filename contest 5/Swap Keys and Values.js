function swapKeysAndValues(obj) {
  // Your code here
  let arr = Object.entries(obj);
  let ans = {};

  for (let [value, key] of arr) {
    ans[key] = value;
  }

  return ans;
}
