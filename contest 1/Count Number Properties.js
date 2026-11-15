function countNumberProperties(numbers) {
  // TODO: Implement this function
  let even = 0;
  let odd = 0;
  let positive = 0;
  let negative = 0;

  for (const num of numbers) {
    if (num % 2) {
      odd++;
    }
    else {
      even++;
    }

    if (num > 0) {
      positive++;
    }
    else if (num < 0) {
      negative++;
    }
  }

  return { even, odd, positive, negative };
}
