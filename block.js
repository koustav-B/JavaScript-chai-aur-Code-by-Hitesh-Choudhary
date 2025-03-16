if (true) {
    let blockVar = "I exist only inside this block! ✅";
    console.log(blockVar); // ✅ Accessible here
}

// console.log(blockVar); // ❌ Error: blockVar is not defined (outside the block)
if (true) {
    var functionScopedVar = "I ignore block scope!";
}
console.log(functionScopedVar); // ✅ Accessible outside the block
// Best Practice: Minimize global variables and use local scope when possible!