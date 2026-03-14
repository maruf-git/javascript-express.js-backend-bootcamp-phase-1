// object
// characteristics -> properties
// activity -> function -> methods

let car = {
    name: "toyota", //key : value
    model: "2022",
    fuel: 30,
    engine: "v12",
    startEngine: function start() { // method
        return "Engine is starting"
    }
}

console.log(car);
console.log(typeof car)
// object properties access
// dot notation
// bracket notation []

let carName = car.name;
console.log(carName)
console.log(car.engine)
console.log(car.startEngine()) // method

// bracket notation
let x = "name";
// console.log(car[x]);
console.log(car["name"]);


let Ammu = {
    firstName: "Khatija",
    lastName: "Begum",
    age: 45,
    profession: "Housewife",
    work: function () {
        return "she makes delicious foods"
    },
    // fullName: function () {
    //     // return Ammu.firstName + " " + Ammu.lastName;
    //     // return this.firstName + " " + this.lastName;
    // }
    fullName: () => {
        // return Ammu.firstName + " " + Ammu.lastName;
        return Ammu.firstName + " " + Ammu.lastName;
    }
}

console.log(Ammu)
// console.log(Ammu.firstName)
// console.log(Ammu.work())
console.log(Ammu.fullName())



// array of objects
let mark = [90, 95, 100]
let students = [
    {
        name: "maruf",
        id: 1,
        dept: "cse",
        age: 24
    },
    {
        name: "rifat",
        id: 5,
        dept: "eee",
        age: 23
    },
    {
        name: "shifat",
        id: 10,
        dept: "swe",
        age: 23
    },
]

console.log(students)
console.log("**********")
console.log(students[1])

let details = ["maruf", 1, "cse", 24, "rifat", 5, "eee", 23]
console.log(details)