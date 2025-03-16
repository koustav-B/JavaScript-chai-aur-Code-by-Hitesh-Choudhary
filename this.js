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