function convertToCamelCase(sentence) {
  const arr = sentence.trim().split(' ');

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "") continue;

    arr[i] = arr[i].toLowerCase();

    if (i) {
      arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    }
  }

  return arr.join('');
}
