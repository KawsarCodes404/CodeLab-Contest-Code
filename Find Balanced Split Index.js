function findBalancedSplit(nums) {
    // Write your code here
    const totS = nums.reduce((sum, num) => sum + num, 0);

    let lS = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        lS += nums[i];

        if (lS === (totS - lS)) return i;
    }

    return -1;
}