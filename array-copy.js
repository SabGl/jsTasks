// Копия массива

const a = [1, 2, 3]

//Option1
// const b = [...a]

//Option2
// const b = a.reduce((el,arr) => arr.push[el],0) ???

//Option3
// const b = Array.from(a)

//Opytion4
const b = JSON.parse(JSON.stringify(a))
//глубокая копия массива, копируются ссылки вложенных объектов и массивов

b.push('newElement')

console.log(a)
// [1, 2, 3]

console.log(b)
// [1, 2, 3, "newElement"]
