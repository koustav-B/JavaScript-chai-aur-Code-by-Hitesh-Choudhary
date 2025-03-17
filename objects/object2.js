const tinderuser = {}; // Declare the object

tinderuser.id = "123abc"; // Correct way to add a property
console.log(tinderuser); // { id: "123abc" }

const regularuser = {
    email: "hello.com",
    fullname: {
        username: {
            firstname: "koustav",
            lastname: "biswas"
        }
    }
}
console.log(regularuser.fullname)

///combine objects
const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "c", 4: "d" }
    //const obj3 = { obj1, obj2 }
const obj3 = Object.assign(obj1, obj2)
const obj4 = Object.assign({}, obj1, obj2) //{} is optional parameter
console.log(obj3)
console.log(obj4)


const users = [{
            id: 1,
            email: "Koustav"
        },
        {
            id: 2,
            email: "Uday"
        },
    ]
    //hasOwnProperty--> checks for