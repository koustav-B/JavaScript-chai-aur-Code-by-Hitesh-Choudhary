/*function name() {
    console.log("H");
    console.log("I")
}
name();*/

/*function add(num1, num2) {
    return num1 + num2

}
//console.log(add(3, "5"));

//console.log(add(3, null));


function add(num1, num2) {
    let res = num1 + num2
    return res
}
console.log(add(2, 5))*/

/*function loginuser(username) {
    return `${username} just logged in`
}
console.log(loginuser("Koustav"))
console.log(loginuser())*/

function loginuser(username) {
    if (username == undefined) {
        console.log("enter a valid username")
        return
    }
    return `${username} just logged in`
}

console.log(loginuser())
console.log(loginuser("Koustav"))