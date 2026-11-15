function repeatedDigitSum(n) {
  // TODO: Implement this function
  let str = "";

  while (n >= 10) {
    str = String(n);
    let sum = 0;

    for (const char of str) {
      sum += Number(char);
    }

    n = sum;
  }

  return n;
}
