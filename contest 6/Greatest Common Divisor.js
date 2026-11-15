function gcd(a, b) {
  // TODO: Return the greatest common divisor of a and b
  let rem = 0;
  while (a !== 0) {
    rem = b % a;
    b = a;
    a = rem;
  }

  return b;
}
