// Array of Objects

const students = [
    { name: "Alice", age: 22, grade: 85, major: "CS" },
    { name: "Bob", age: 20, grade: 72, major: "Math" },
    { name: "Charlie", age: 23, grade: 90, major: "CS" },
    { name: "Diana", age: 21, grade: 88, major: "Physics" },
    { name: "Eve", age: 22, grade: 95, major: "CS" }
];

//get all students names
const names = students.map(student => student.name);
console.log(names);

//get students with grade > 80
const highAchievers = students
  .filter(student => student.grade > 80)
  .map(student => ({ name: student.name, grade: student.grade }));

console.log(highAchievers);

//find the student named "Charlie"
const charlie = students.find(student => student.name === "Charlie");
console.log(charlie);

//calculate average grade
const avgGrade = students.reduce((total, student) => total + student.grade, 0) / students.length;
console.log(avgGrade);

//get CS majors only
const csMajors = students
  .filter( student => student.major === "CS")
  .map(student => ({ name: student.name, major: student.major }));
console.log(csMajors);

//sort by grade highest first
const sortedByGrade = [...students].sort((a, b) => b.grade - a.grade);
console.log(sortedByGrade);

//check if any student has grade > 90
const hasTopStudent = students.some(student => student.grade > 90);
console.log(hasTopStudent);

//check if all students are passing (grade >= 60)
const allPassing = students.every(student => student.grade >= 60);
console.log(allPassing);

//STUDENT GRADE TRACKER

const gradeTracker = {
    students: [],

    // Add a new student
    addStudent(name, grades) {
        this.students.push({ name, grades });
    },

    // Get a student by name
    getStudent(name) {
        return this.students.find(student => student.name === name) || null;
    },

    // Calculate a student's average
    getStudentAverage(name) {
        const student = this.getStudent(name);
        if (!student) return null;

        const scores = Object.values(student.grades);
        const avg = scores.reduce((sum, val) => sum + val, 0) / scores.length;

        return Number(avg.toFixed(2));
    },

    // Get class average for a subject
    getSubjectAverage(subject) {
        let total = 0;
        let count = 0;

        this.students.forEach(student => {
            if (student.grades[subject] !== undefined) {
                total += student.grades[subject];
                count++;
            }
        });

        if (count === 0) return null;

        return Number((total / count).toFixed(2));
    },

    // Get top performer
    getTopStudent() {
        if (this.students.length === 0) return null;

        let topStudent = null;
        let highestAvg = -Infinity;

        this.students.forEach(student => {
            const avg = this.getStudentAverage(student.name);
            if (avg > highestAvg) {
                highestAvg = avg;
                topStudent = student;
            }
        });

        return topStudent ? topStudent.name : null;
    },

    // Get students needing help (average < 70)
    getStrugglingStudents() {
        return this.students
            .filter(student => this.getStudentAverage(student.name) < 70)
            .map(student => student.name);
    },

    // Get letter grade
    getLetterGrade(score) {
        if (score >= 90) return "A";
        if (score >= 80) return "B";
        if (score >= 70) return "C";
        if (score >= 60) return "D";
        return "F";
    },

    // Generate report card
    generateReportCard(name) {
        const student = this.getStudent(name);
        if (!student) return "Student not found";

        const grades = student.grades;
        const avg = this.getStudentAverage(name);

        let report = `Report Card for ${name}\n`;
        report += "-------------------------\n";

        for (let subject in grades) {
            const score = grades[subject];
            const letter = this.getLetterGrade(score);
            report += `${subject}: ${score} (${letter})\n`;
        }

        report += "-------------------------\n";
        report += `Average: ${avg} (${this.getLetterGrade(avg)})`;

        return report;
    }
};

// Test your implementation
gradeTracker.addStudent("Alice", { math: 95, english: 88, science: 92 });
gradeTracker.addStudent("Bob", { math: 72, english: 85, science: 78 });
gradeTracker.addStudent("Charlie", { math: 60, english: 65, science: 58 });

console.log(gradeTracker.getStudentAverage("Alice"));      
console.log(gradeTracker.getSubjectAverage("math"));       
console.log(gradeTracker.getTopStudent());                 
console.log(gradeTracker.getStrugglingStudents());         
console.log(gradeTracker.generateReportCard("Alice"));