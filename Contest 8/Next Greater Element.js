function nextGreaterElement(nums) {
    // Write your code here
    let st = [];
    let res = Array(nums.length).fill(-1);

    for (let i = 0; i < nums.length; i++) {

        while (st.length > 0 && nums[i] > nums[st[st.length - 1]]) {
            res[st.pop()] = nums[i];
        }

        st.push(i);
    }

    return res;
}

// Oh what a time killing logic !