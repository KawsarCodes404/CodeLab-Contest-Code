function findLongestWord(str) {
  // TODO: Implement this function
  let curr = "";
  let long = "";

  for (let c of str) {

    if ((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || (c >= '0' && c <= '9')) {
      curr += c;
    }
    else {
      if (curr.length > long.length) {
        long = curr;
      }

      curr = "";
    }
  }

  if (curr.length > long.length) {
    long = curr;
  }

  return long;
}
