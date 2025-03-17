console.log(x); // undefined (Hoisted but not initialized)
var x = 5;

greet(); // ✅ Works due to hoisting
function greet() {
    console.log("Hello!");
}
/*Function declarations are hoisted with definitions,
Variables declared with var are hoisted as undefined
(let and const are hoisted but remain in the Temporal Dead Zone).

*/