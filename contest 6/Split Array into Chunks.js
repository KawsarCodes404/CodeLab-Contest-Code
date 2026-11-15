function chunkArray(arr, size) {
  // TODO: Return an array of chunks of length `size`
  let res = [];

  for (let i = 0; i < arr.length; i += size) {
    res.push(arr.slice(i, i + size));
  }

  return res;
}
