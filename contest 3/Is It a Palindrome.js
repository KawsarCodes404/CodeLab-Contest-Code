function isPalindrome(str) {
  // TODO: Implement this function
  let arr = str.toLowerCase().split('');

  let newArr = arr.filter(char => (char >= 'a' && char <= 'z') || (char >= '0' && char <= '9'));

  let str1 = newArr.join('');

  return (str1 === newArr.reverse().join(''));
}
