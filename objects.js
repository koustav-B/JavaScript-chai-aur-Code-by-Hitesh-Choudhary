//defined by literal and constructor
//object literals
//Object.create //-->constructor
const juser = {
    name: "Hitesh",
    age: 20,
    location: "Kolkata",
    isLoggedIn: false,
    "full name": "Koustav Biswas", //--->u cant access this
    lastlgin: ["Monday", "Saturday"]
}
console.log(juser.name) //--->not efficient
console.log(juser.location)

//objects accessed by dot operator
juser.email = "Koustavbiswas04@gmail.com"
Object.freeze(juser)
juser.email = "abc@gmail.com"
console.log(juser)