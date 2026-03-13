// nested function

// function greet(location = "Bangladesh") {
//     console.log("Good Morning")

//     const country = () => {
//         console.log("People of", location)
//     }
//     country();
// }

// greet("Turkey");
// country();

const country = (location = "Bangladesh") => {
    console.log("People of", location)
}
// country()

const popularCity = (city = "Dhaka") => {
    console.log(city, "is a beautiful city")
}

// call back function
function greet(janina) { //janina = popularCity
    console.log("Good Morning")
    janina("New York"); //-> country()
}

greet(country);
console.log("**************88")
greet(popularCity)
// country();

// here callback functions are = country(), poplularCity()
// const handleApi = (req, res) => {
//     console.log(req, res)
// }
// app.get("/", handleApi){
//     handleApi()
// }