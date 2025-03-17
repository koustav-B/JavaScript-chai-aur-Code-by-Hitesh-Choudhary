const cities = ["New York", "London", "Paris", "Tokyo"];

cities.forEach(city => {
    console.log(city);
});

const animals = ["Dog", "Cat", "Elephant"];

animals.forEach((animal, index) => {
    console.log(`${index}: ${animal}`);
});

const numbers = [10, 20, 30];

numbers.forEach((num, index, arr) => {
    arr[index] = num * 2;
});

console.log(numbers);


let sum = 0;
const values = [5, 10, 15];

values.forEach(num => {
    sum += num;
});

console.log(`Sum: ${sum}`);