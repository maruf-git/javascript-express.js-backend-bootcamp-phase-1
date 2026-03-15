// array
// object
//0, 1,  2, 3, 4
let marks = [90, 95, 60, 70, 100];
console.log(marks)
// console.log(marks[2])

// destructuring

let [, , shifat, taosif] = marks;

console.log(shifat);
// console.log(anik);


let student = {
    name: "maruf",
    id: 25,
    dept: "cse"
};
console.log(student)

// const studentName = student.name;
// console.log(studentName)
const { name: firstName, id: studentId } = student;
console.log(firstName)
console.log(studentId)

