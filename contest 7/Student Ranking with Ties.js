function rankStudents(students) {
    // TODO: Return students sorted by score with rank added
    let stu = students.sort((a, b) => b.score - a.score);

    for (let i = 0; i < stu.length; i++) {
        if (i === 0 || stu[i].score < stu[i - 1].score) stu[i].rank = i + 1;
        else stu[i].rank = stu[i - 1].rank;
    }

    return stu;
}