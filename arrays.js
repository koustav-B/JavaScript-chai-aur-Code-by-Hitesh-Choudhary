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