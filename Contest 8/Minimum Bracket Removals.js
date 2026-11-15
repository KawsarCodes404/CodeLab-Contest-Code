function minRemovalsToBalance(s) {
    // TODO: Implement this function
    let open = 0;
    let res = 0;

    for (let char of s) {
        if (char === '(') open++;
        else {
            if (open) open--;
            else res++;
        }
    }

    return res + open;
}