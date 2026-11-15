function findMajorityElement(nums) {
    // TODO: Implement the findMajorityElement function
    let frq = {};
    for (let num of nums) frq[num] = (frq[num] || 0) + 1;

    for (let num in frq) if (frq[num] > nums.length / 2) return Number(num);

    return null;
}