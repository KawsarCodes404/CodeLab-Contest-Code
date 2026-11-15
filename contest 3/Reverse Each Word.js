function reverseEachWord(str) {
  // TODO: Implement this function
  const arr = str.split(' ');

  return arr.map(word => word.split('').reverse().join('')).join(' ');
}
