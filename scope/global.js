let globalVar = "I am global!"; // Global variable

function showGlobal() {
    console.log(globalVar); // Accessible inside the function
}

showGlobal();
console.log(globalVar); // Accessible outside the function