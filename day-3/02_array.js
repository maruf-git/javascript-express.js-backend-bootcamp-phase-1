// array
// not necessary same data type

let mark = 90;


// computer memory 550, 551, 552, 553
let studentsMark = [95, 90, 85, 100];
// printing an array
console.log(studentsMark)
// studentsMark.length = 4
console.log(studentsMark.length)
for (let index = 0; index < studentsMark.length; index++) {
    console.log(studentsMark[index])
}

// accessing a single value
console.log(studentsMark[2]);

studentsMark.push(70);
console.log(studentsMark)
console.log(studentsMark.length)

console.log(typeof studentsMark);


const result = [95, 100, "maruf", "litchi", true]
console.log(result)

// console.log(Array.isArray(studentsMark))
console.log(Array.isArray("maruf"))