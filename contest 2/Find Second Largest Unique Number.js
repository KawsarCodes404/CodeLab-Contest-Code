function findSecondLargestUnique(numbers) {
  // TODO: Implement this function
  const freq = {};
  let arr = [];
  let larg = -Infinity;

  for (let num of numbers) {

    if (num > larg) {
      larg = num;
    }

    if (!freq[num]) {
      arr.push(num);

      freq[num] = 1;
    }
  }

  if (arr.length < 2) {
    return null;
  }

  let secondLarg = -Infinity

  for (let num of arr) {
    if (num > secondLarg && num < larg) {
      secondLarg = num;
    }
  }

  return secondLarg;
}
