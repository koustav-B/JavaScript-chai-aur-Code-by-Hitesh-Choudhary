function first() {
    console.log("First");
    second();
}

function second() {
    console.log("Second");
}
first();
/*✔ Call Stack Steps:

first() is pushed onto the stack.
console.log("First") executes.
second() is called → Added to the stack.
console.log("Second") executes.
second() is removed from the stack.
first() is removed from the stack.*/