import calculator, { add, sub, mul } from "./math.js";
import { goodMorning } from "./greeting.js";

goodMorning();
calculator()

let addResult = add(15, 15);
console.log(addResult);

console.log("subtraction: ")
let subResult = sub(15, 10);
console.log(subResult);

let mulResult = mul(10, 5)
console.log(mulResult);



// addition
// subtraction
// multi
// div

// javascript - 2009
// 2015 javascript -> own module system -> ecamascript module
// node js -> own module system ->  commonjs
// ecmascript module


