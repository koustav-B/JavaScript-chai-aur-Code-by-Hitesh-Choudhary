console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve().then(() => console.log("C"));

console.log("D");
/*✔ Why?
1️⃣ "A" logs immediately.
2️⃣ setTimeout() moves callback to Web API.
3️⃣ Promise.resolve().then() goes to Microtask Queue.
4️⃣ "D" logs.
5️⃣ Microtasks (C) execute before setTimeout (B).*/