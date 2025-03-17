console.log(this); // ✅ Refers to window in browsers
//In strict mode ("use strict"), this will be undefined

"use strict";

function showThis() {
    console.log(this);
}
showThis(); // ❌ Undefined in strict mode
//When a method is called using object.method(), this refers to the object.
const person = {
    name: "Alice",
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

person.greet(); // ✅ "Hello, my name is Alice"
//When a function inside a method is called as a separate function, this loses its reference.
const person2 = {
    name: "Bob",
    greet: function() {
        function innerFunc() {
            console.log(this.name); // ❌ `this` is now undefined or refers to `window`
        }
        innerFunc();
    }
};

person2.greet(); // ❌ Undefined (loses reference)

//Arrow functions do not create a new this. Instead, they inherit this from their surrounding scope.
const person3 = {
    name: "Charlie",
    greet: function() {
        const innerFunc = () => {
            console.log(this.name); // ✅ Inherits `this` from `greet()`
        };
        innerFunc();
    }
};

person3.greet(); // ✅ "Charlie"

//Arrow functions in the global scope will inherit this from the surrounding scope.
const arrowFunc = () => {
    console.log(this); // ✅ Still refers to `window` in browsers
};

arrowFunc();