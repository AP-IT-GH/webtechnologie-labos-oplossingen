const students = [
    { name: "An",   grades: [14, 16, 12, 18] },
    { name: "Ben",  grades: [9,   7, 11,  8] },
    { name: "Cas",  grades: [15, 17, 14, 16] },
    { name: "Dina", grades: [6,   8,  5,  9] },
    { name: "Eli",  grades: [13, 11, 15, 12] },
];

function calculateAverage(grades) {
    let sum = 0;
    for (const grade of grades) {
        sum += grade;
    }
    return parseFloat((sum / grades.length).toFixed(2));
}

function getPassingStudents(students) {
    const passing = [];
    for (const student of students) {
        if (calculateAverage(student.grades) >= 10) {
            passing.push(student);
        }
    }
    return passing;
}

for (const student of students) {
    console.log(`${student.name}: ${calculateAverage(student.grades)}`);
}

const passing = getPassingStudents(students);
console.log("Geslaagde studenten:");
for (const student of passing) {
    console.log(`${student.name} is geslaagd`);
}
