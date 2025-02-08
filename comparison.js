/*console.log(null>0);
console.log(null>=0);

console.log(null<0);

console.log(null<=0);
console.log(null==0);

console.log(undefined);

// ===check data types
console.log("2"===2);*/

// 🔹 Primitive Data Types
let stringType = "Hello, JavaScript!"; // String
let numberType = 42; // Number
let bigIntType = 9007199254740991n; // BigInt
let booleanType = true; // Boolean
let undefinedType; // Undefined (default value is undefined)
let nullType = null; // Null (special object type)
let symbolType = Symbol("unique"); // Symbol

console.log("🔹 Primitive Data Types:");
console.log(typeof stringType, stringType);
console.log(typeof numberType, numberType);
console.log(typeof bigIntType, bigIntType);
console.log(typeof booleanType, booleanType);
console.log(typeof undefinedType, undefinedType);
console.log(typeof nullType, nullType); // Returns "object" (historical bug in JS)
console.log(typeof symbolType, symbolType);

// 🔹 Non-Primitive (Reference) Data Types
let objectType = { name: "Alice", age: 25 }; // Object
let arrayType = [1, 2, 3, 4, 5]; // Array (special type of object)
let functionType = function() { return "I am a function!"; }; // Function
let dateType = new Date(); // Date Object

console.log("\n🔹 Reference Data Types:");
console.log(typeof objectType, objectType);
console.log(typeof arrayType, arrayType);
console.log(typeof functionType, functionType);
console.log(typeof dateType, dateType);

// 🔹 Special Data Type: NaN (Not a Number)
let nanType = "Hello" / 2; // NaN occurs when an invalid number operation happens
console.log("\n🔹 Special Data Type:");
console.log(typeof nanType, nanType);

