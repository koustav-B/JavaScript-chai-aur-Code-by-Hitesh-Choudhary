/*const user = {
    username: "koustav",
    price: 100
}

function handleobject(anyobject) {
    console.log(`username is ${anyobject.username}     and price is ${anyobject.price}`);
}
handleobject(user)*/
// Object representing a person
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    fullName: function() {
        return `${this.firstName} ${this.lastName}`;
    },
    celebrateBirthday: function() {
        this.age++;
        console.log(`Happy Birthday, ${this.firstName}! You are now ${this.age} years old.`);
    }
};

// Function to update person's name
function updateName(personObj, newFirstName, newLastName) {
    personObj.firstName = newFirstName;
    personObj.lastName = newLastName;
}

// Function to create a new person object
function createPerson(firstName, lastName, age) {
    return {
        firstName: firstName,
        lastName: lastName,
        age: age,
        fullName: function() {
            return `${this.firstName} ${this.lastName}`;
        }
    };
}

// Testing the object and functions
console.log("Full Name:", person.fullName());
person.celebrateBirthday();

updateName(person, "Alice", "Smith");
console.log("Updated Name:", person.fullName());

const newPerson = createPerson("Emma", "Brown", 25);
console.log("New Person's Name:", newPerson.fullName());