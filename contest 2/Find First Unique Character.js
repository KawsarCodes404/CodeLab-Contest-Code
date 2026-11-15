function findFirstUniqueChar(s) {
  // TODO: Implement this function
  const freq = {};

  for (const c of s) {
    if (freq[c]) {
      freq[c]++;
    }
    else {
      freq[c] = 1;
    }
  }

  for (let c of s) {
    if (freq[c] === 1) {
      return c;
    }
  }

  return -1;
}
