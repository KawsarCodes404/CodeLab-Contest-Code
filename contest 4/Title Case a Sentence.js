function titleCaseSentence(str) {
  // TODO: Implement this function

  let tmpArr = str.split(" ").filter(item => item !== "");

  for (let i = 0; i < tmpArr.length; i++) {
    tmpArr[i] = tmpArr[i][0].toUpperCase() + tmpArr[i].slice(1).toLowerCase();
  }

  return tmpArr.join(" ");
}
