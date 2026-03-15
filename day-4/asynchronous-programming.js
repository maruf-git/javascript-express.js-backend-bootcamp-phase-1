// asynchronous -> async

// source code(js) -> (engine)(v8, spidermonkey) -> machine code

// issue js runs only in browsers

// why not running it in server
// v8 + nodeje = javascript programming

// console.log("A"); console.log("M")
// console.log("B");
// console.log("C");

//javascript -> thread-> execution road/path -> single thread
//java -> multithread -> path(multiple) -> multi thread

// asynchronous programming



console.log("Noodles") //->5 -> noodles

console.log("Coffee") // ->4 -> coffee

// setTimeout(function () { // ->3 -> Bring me pasta ->background
console.log("Bring me pasta -> 10s")
// }, 10000)

console.log("Tea"); // ->2 -> Tea

setTimeout(() => { // ->1->Bring me biriyani ->background
    console.log("Bring me biriyani -> 2s")
}, 2000)

console.log("Bring me soft drinks") //->0 ->Bring me soft drinks
// noodles
// coffee
// Tea
// soft drinks
// biriyani
// pasta