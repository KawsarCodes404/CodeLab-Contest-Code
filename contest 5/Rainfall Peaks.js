function findRainfallPeaks(rainfall) {
  // TODO: implement

  let ans = [];

  for (let i = 1; i < rainfall.length - 1; i++) {
    if (rainfall[i] > rainfall[i - 1] && rainfall[i] > rainfall[i + 1]) ans.push(i + 1);
  }

  return ans;
}
