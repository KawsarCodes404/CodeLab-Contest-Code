function isAlmostPalindrome(s) {
    // Write your code here
    function isP (s, l, r) {
        while(l < r) if(s[l++] !== s[r--]) return false;
        return true;
    }

    let l = 0;
    let r = s.length - 1;
    while (l < r) {
        if (s[l] !== s[r]) {
            if (s[l + 1] == s[r]) return isP(s, l + 1, r);
            else if (s[l] == s[r - 1]) return isP(s, l , r - 1);
            else return false;
        }

        l++;
        r--;
    }

    return true;
}