const add = (a, b) => {
    return a + b;
}

const sub = (a, b) => {
    return a - b;
}

const mul = (a, b) => {
    return a * b;
}

const div = (a, b) => {
    return a / b;
}

let name = "maruf";

// export default const simpleCalulator = () => {
//     console.log("Hi this is simple calculator")
// }

export default function simpleCalculator() {
    console.log("Hi this is simple calculator")
}

export { add, sub, mul, div, name };
// export