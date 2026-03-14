let mark = 90; //expression
// ধরি, মার্ক = ৯০ //expression

// traditional function syntax
// function functionName(parameters){
//     // code to execute

//     return
// }

function add(num1 = 0, num2 = 0) {
    return num1 + num2
}
console.log(add(10, 5))

// function expression
let addition = function (num1 = 0, num2 = 0) { // anonumous function
    return num1 + num2
}
console.log(addition(10, 5))

// arrow function // fat arrow function
let subtraction = (num1 = 0, num2 = 0) => { // anonumous function
    return num1 - num2
}
console.log(subtraction(10, 5))


