function isAnagram(s1, s2) {
  // TODO: Implement this function

  const orderIt = (str) => str.toLowerCase().replace(/[^a-z]/g, "").split("").sort().join("");

  return orderIt(s1) === orderIt(s2);
}
