function compressCharacters(str) {
  // TODO: Implement this function
  let ans = "";
  let cnt;

  for (let i = 0; i < str.length; i++) {
    cnt = 1;

    while (str[i] === str[i + 1]) {
      i++;
      cnt++;
    }

    ans += str[i] + (cnt > 1 ? cnt : "");
  }

  return ans;
}
