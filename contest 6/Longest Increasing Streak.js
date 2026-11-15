function longestIncreasingStreak(nums) {
  // TODO: return the length of the longest contiguous strictly increasing streak
  if (!nums.length) return 0;

  let res = 1;
  let curr = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) curr++;
    else {
      curr = 1;
    }

    if (curr > res) res = curr;
  }

  return res;
}
