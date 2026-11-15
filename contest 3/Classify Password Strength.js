function classifyPassword(password) {
  // TODO
  let upper = 0;
  let lower = 0;
  let digit = 0;
  let special = 0;

  for (const char of password) {
    if (char >= 'a' && char <= 'z') lower++;

    if (char >= 'A' && char <= 'Z') upper++;

    if (char >= '0' && char <= '9') digit++;

    if ("!@#$%^&*".includes(char)) special++;
  }

  let cnt = 0;

  if (lower) cnt++;
  if (upper) cnt++;
  if (digit) cnt++;
  if (special) cnt++;

  if (password.length >= 8 && cnt === 4) return "Strong";
  else if (password.length >= 6 && cnt >= 2) return "Medium";

  return "Weak";
}
