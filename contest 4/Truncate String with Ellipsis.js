function truncateString(str, maxLength) {
  // TODO: Implement this function

  if (maxLength <= 3) return "...";

  if (str.length <= maxLength) return str;

  return str.slice(0, maxLength - 3) + "...";
}
