function outerFunction() {
    let outerVar = "I'm from outer scope";

    function innerFunction() {
        console.log(outerVar); // ✅ Accessible inside
    }

    innerFunction();
}

outerFunction();
// console.log(outerVar); // ❌ Error: outerVar is not defined outside