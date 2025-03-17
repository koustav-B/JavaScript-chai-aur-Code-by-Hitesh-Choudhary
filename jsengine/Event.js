console.log("1");

setTimeout(() => console.log("2"), 0);

Promise.resolve().then(() => console.log("3"));

console.log("4");
/*Microtasks vs Macrotasks (Event Loop)
Microtasks (Higher Priority) → Promises, MutationObserver


Macrotasks (Lower Priority) → setTimeout, setInterval, setImmediate*/