function checkMathOperationsForNine(a, b) {
  // TODO: Implement this function
  let arr = [];

  arr.push(a + b);
  arr.push(a - b);
  arr.push(a * b);
  arr.push(a / b);

  return (arr.includes(9)) ? "Nine" : "Nein";
}
