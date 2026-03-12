// operator
// Assignment operator =
// arithmetic operator + , - , / , %, **
// comparison operator ==,===, >, >=, <, <=
// logical operator and, or, not

// assignment operator
// math profit = invesment 
let mark = 90;

// arithmatic operator
let bonus = 5;
let totalMark = mark + bonus;
console.log(totalMark);
console.log(90 / 5);

let markOfMaruf = 90;
let markOfRifat = 95;
console.log(markOfMaruf == markOfRifat); // 90 == 95 false
console.log(markOfMaruf > markOfRifat); // 90 > 95 false
console.log(markOfMaruf >= markOfRifat); // 90 >= 95 false
console.log(markOfMaruf < markOfRifat); // 90 < 95 true
console.log(markOfMaruf <= markOfRifat); // 90 <= 95 true

// logical operator
// all true output true : and
// any true output true : or
// inverse : not , ex, not true = false
console.log("***************")
console.log(true && true && false);

console.log("------------------")
// == comparision operator
// only compares value does not compare data type

// let cash = 100 // number
// let account = 100 // number
// console.log(cash == account); //true

// vs

// let cash = 100 // number
// let account = "100" // string
// console.log(cash == account); //true

// === comparision operator
// value same and also data type is same -> only then gives true.
let cash = 100 // number
let account = "100" // string
console.log(cash === account); //false



// conditional 
// if(condition), else if(condition), else

let age = 10;
if (age >= 18) {
    console.log("You are adult");
}
else if (age >= 15) {
    console.log("Growing person")
}
else {
    console.log("You are a child")
}

console.log("end")

let isRaining = false;
let isSaturday = false;

if (isRaining == true && isSaturday == true) {
    console.log("I will watch a movie")
} else if (isRaining == true && isSaturday == false) {
    console.log("I will bring a umbrella")
} else {
    console.log("I will go to work but not carry umbrella")
}