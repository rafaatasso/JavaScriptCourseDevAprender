const grades = [ 100, 60, 80 ];

let print = nameSchoolGrade(grades);
console.log(print);

function avgSchoolGrade(grades) {
    let lengthGrand = 0;
    let sumTotal = 0;
    for (let grade of grades) {
        lengthGrand += 1;
        sumTotal += grade;
    }

    return sumTotal / lengthGrand;
};

function nameSchoolGrade(grade) {
    const final = avgSchoolGrade(grade);

    if (final < 60)
        return 'F';
    if (final < 70)
        return 'D';
    if (final < 80)
        return 'C';
    if (final < 90)
        return 'B';
    return 'A';
};