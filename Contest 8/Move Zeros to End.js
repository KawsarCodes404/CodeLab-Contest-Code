function moveZeros(nums) {
    // Write your code here
    let res = nums.filter(num => num !== 0);

    res.push(...Array(nums.length - res.length).fill(0));
    return res;
}