function countEvenOdd(numbers) {
  // TODO: Implement this function
  let even = 0;
  let odd = 0;

  for (const num of numbers) {
    if (num % 2) {
      odd++;
    }
    else {
      even++;
    }
  }

  return { even, odd };
}
