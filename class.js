class student {
    constructor(studentId, studentName, schoolName) {
        this.id = studentId;
        this.name = studentName;
        this.school = "kolumunessa School"
        // this.school = schoolName;

    }
}

const student1 = new student(12, "shuvo", "Name of school1");
const student2 = new student(22, "Oshuve");
const student3 = new student(100, "Hablu");
// console.log(student1.id, student2.name, student3.school); 
console.log(student1, student2, student3); 