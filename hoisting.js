sayHello(); // ✅ Works!

function sayHello() {
    console.log("Hello!");
}

//var is hoisted but initialized as undefined.
//let & const are hoisted but not initialized (Temporal Dead Zone).

console.log(myVar); // ✅ undefined (hoisted but not initialized)
var myVar = "Hoisted Var";

// console.log(myLet); // ❌ Error: Cannot access 'myLet' before initialization
let myLet = "Hoisted Let";