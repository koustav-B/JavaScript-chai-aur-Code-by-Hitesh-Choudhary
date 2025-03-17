function showLocal() {
    let localVar = "I am local!";
    console.log(localVar); // Accessible inside the function
}

showLocal();
console.log(localVar); // ❌ Error: localVar is not defined (outside its function)