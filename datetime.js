let mydate = new Date()
console.log(mydate)
console.log(mydate.toString())
console.log(mydate.toLocaleString())
console.log(typeof mydate)
console.log(mydate.toDateString())

let newdate = new Date("2025-02-14") //yymmdd
console.log(newdate.toLocaleString());
console.log(Math.floor(Date.now() / 1000))