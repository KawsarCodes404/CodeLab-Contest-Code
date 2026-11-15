function isValidBdMobileNumber(phoneNumber) {
  // TODO: Implement the function
  let reg = /^(?:01[3-9][0-9]{8}|\+8801[3-9][0-9]{8}|8801[3-9][0-9]{8})$/;

  return reg.test(phoneNumber);
}
