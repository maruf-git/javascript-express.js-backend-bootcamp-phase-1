// Functions

// function syntax
// function definition
// function functionName(paramater) {
//     return something; // optional -> default: undefined
// }

function makeCoffee(personName) {
    // these codes will run
    //master chef -> make a coffee
    console.log("coffee for", personName, ":")

    console.log("Go to kitchen")
    console.log("Boil some water")
    console.log("Add some coffee")
    console.log("Add some sugar")
    console.log("Mix everything and bring it to me")

    return "Thank you for making me a coffee";
}

// customer - rifat
makeCoffee("rifat")

// customer - shifat
makeCoffee("shifat")

// customer - taosif
let checkReturnValue = makeCoffee("taosif")
console.log("****************")
console.log(checkReturnValue)
console.log(typeof checkReturnValue)


console.log("Working with sum function:")
// function addition(num1, num2) {
//     let sum = num1 + num2;
//     return sum;
// }
// let result = addition(10, 5)
// console.log(result);

// default parameter value setting
// function addition(num1, num2) {
//     let sum = num1 + num2;
//     return sum;
// }
// let result = addition(10), //NaN = Not a Number
//     console.log(result);

function addition(num1, num2 = 0) {
    let sum = num1 + num2;
    return sum;
}

let result = addition(10) //NaN = Not a Number
console.log(result);


let result2 = addition(10, 40);
console.log(result2)


