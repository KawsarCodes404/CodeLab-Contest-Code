function maxTasks(tasks) {
  // TODO: Return the maximum number of non-overlapping tasks
  let sorted = tasks.sort((a, b) => a[1] - b[1]);
  let cnt = 0;
  let lastF = -Infinity;

  for (let [start, end] of sorted) {
    if (start >= lastF) {
      cnt++;
      lastF = end;
    }
  }

  return cnt;
}