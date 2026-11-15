function daysBetweenDates(date1, date2) {
  // TODO: Return absolute number of days between date1 and date2
  let [y1, m1, d1] = date1.split('-').map(Number);
  let [y2, m2, d2] = date2.split('-').map(Number);

  let t1 = Date.UTC(y1, m1 - 1, d1);
  let t2 = Date.UTC(y2, m2 - 1, d2);

  let diff = Math.abs(t1 - t2);

  return diff / (24 * 60 * 60 * 1000);
}
