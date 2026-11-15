function findFreeTime(bookedIntervals, workingHours) {
  // TODO: Implement the function
  let [workS, workE] = workingHours;

  let clipped = bookedIntervals.filter(([start, end]) => end > workS || start > workE).map(([start, end]) => [start = Math.max(start, workS), end = Math.min(end, workE)]);

  // let sorted = 
  clipped.sort((a, b) => a[0] - b[0]);

  let merged = [];

  // for (let i = 0; i < sorted.length; i++) {
  // if (i === 0 || sorted[i][0] > sorted[i - 1][1]) {
  //   merged.push(sorted[i]);
  // }
  //   else merged[i - 1][1] = Math.max(merged[i][1], merged[i - 1][1]);
  // }

  for (let [start, end] of clipped) {
    if (!merged.length || start > merged[merged.length - 1][1]) {
      merged.push([start, end]);
    }
    else merged[merged.length - 1][1] = Math.max(end, merged[merged.length - 1][1]);
  }

  let curr = workS;
  let freeI = [];

  for (let [start, end] of merged) {
    if (start > curr) {
      freeI.push([curr, start]);
    }
    curr = end;
  }

  if (curr < workE) freeI.push([curr, workE]);

  return freeI;
}