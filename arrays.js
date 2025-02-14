const arr = [0, 1, 2, 3, 4, 5]
console.log(arr)
const arr1 = [1, 5, 7, 2, 3]
console.log(arr1.sort())

console.log(arr1[1])

const hero = ['Uday', 'Aditya', 'Rugved']
console.log(hero)
hero.push('Koustav')
console.log(hero)
console.log(hero.unshift(0))
console.log(hero.includes('Uday'))


//slice , splice
//console.log("A", hero)
const n1 = hero.slice(1, 3)
const n2 = hero.splice(1, 3)
console.log(n1)
console.log(n2) //last range printed

const l1 = [1, 2]
const l2 = [3.4]
const all = l1.concat(l2)
console.log(all)

//spread operator
const ok = [...l1, ...l2]
console.log(ok)




console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({ name: "Koustav" })) //interesting
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3))