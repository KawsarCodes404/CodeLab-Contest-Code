function getDayOfWeek(year, month, day) {
  // TODO: return the name of the weekday
  let date = new Date(year, month - 1, day);

  const ans = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  return ans[date.getDay()];
}
