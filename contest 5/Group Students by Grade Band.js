function groupStudentsByGradeBand(students) {
  // TODO: Implement this function
  let ans = { "A": [], "B": [], "C": [], "F": [] };

  for (let stu of students) {
    if (stu.marks >= 80) ans["A"].push(stu);
    else if (stu.marks >= 70) ans["B"].push(stu);
    else if (stu.marks >= 60) ans["C"].push(stu);
    else ans["F"].push(stu);
  }

  return ans;
}
