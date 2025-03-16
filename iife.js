//An IIFE is written using parentheses to define and execute the function immediately.
(function() {
    console.log("IIFE is executed immediately!");
})();
//You can pass arguments into an IIFE.
(function(name) {
    console.log(`Hello, ${name}!`);
})("Koustav");
//IIFE can also be written using arrow functions.
(() => {
    console.log("This is an arrow function IIFE!");
})();

//IIFE is useful for creating private variables that don't leak into the global scope.
const counter = (function() {
    let count = 0; // Private variable

    return {
        increment: function() {
            count++;
            console.log(`Count: ${count}`);
        },
        getCount: function() {
            return count;
        }
    };
})();
// Here, count is private and cannot be accessed directly.
counter.increment(); // ✅ "Count: 1"
counter.increment(); // ✅ "Count: 2"
console.log(counter.getCount()); // ✅ 2

//IIFEs can also be asynchronous using async functions.
(async function() {
    console.log("Fetching data...");
    await new Promise(resolve => setTimeout(resolve, 2000)); // Simulating delay
    console.log("Data fetched!");
})();