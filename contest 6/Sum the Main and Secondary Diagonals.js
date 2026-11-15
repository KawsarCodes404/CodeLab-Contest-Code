function diagonalSums(matrix) {
  // Write your code here
  let m = 0;
  let s = 0;

  for (let i = 0; i < matrix.length; i++) {
    m += matrix[i][i];
    s += matrix[i][matrix.length - 1 - i];
  }

  return { main: m, secondary: s };
}
