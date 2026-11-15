function countWordFrequencies(sentence) {
  // TODO: Implement this function
  let tmpArr = sentence.toLowerCase().split(/[^a-z0-9]+/).filter(word => word !== "");

  let ans = {};

  for (const word of tmpArr) {
    if (ans[word]) ans[word]++;
    else ans[word] = 1;
  }

  return ans;
}
