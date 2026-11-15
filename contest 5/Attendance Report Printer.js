function formatAttendanceReport(students) {
  // TODO: return an array of formatted attendance reports
  for (let i = 0; i < students.length; i++) {
    let stu = students[i];
    let per = Math.round((stu.present / stu.total) * 100);

    students[i] = `${stu.name}: ${stu.present}/${stu.total} (${per}%) - ${per >= 90 ? "Excellent" : (per >= 75 ? "Good" : "At Risk")}`;
  }

  return students;
}
