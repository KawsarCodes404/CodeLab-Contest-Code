function removeDuplicateCharacters(str) {
    // TODO: Implement this function
    let seen = {};
    let res = "";

    for (let char of str) {
        if (!seen[char]) {
            res += char;
            seen[char] = true;
        }
    }

    return res;
}