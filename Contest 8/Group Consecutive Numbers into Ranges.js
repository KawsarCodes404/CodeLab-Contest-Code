function groupConsecutiveRanges(numbers) {
    // TODO
    if (numbers.length === 0) return [];
    let nums = numbers.sort((a, b) => a - b);
    let res = [];

    let s = nums[0];
    let e = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === e + 1) e++;
        else if (nums[i] === e) continue;
        else{
            res.push(s === e ? `${s}` : `${s}-${e}`);

            s = nums[i];
            e = nums[i];
        }
    }

    res.push(s === e ? `${s}` : `${s}-${e}`);

    return res;
}