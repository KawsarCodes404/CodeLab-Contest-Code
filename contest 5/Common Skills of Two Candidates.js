function commonSkills(skills1, skills2) {
  // TODO: Return shared skills lowercased, deduplicated, and sorted
  let ans = [];

  skills1 = skills1.map(skill => skill.toLowerCase());
  skills2 = skills2.map(skill => skill.toLowerCase());

  for (let skill of skills1) {
    if (skills2.includes(skill) && !ans.includes(skill)) ans.push(skill);
  }

  return ans.sort();
}
