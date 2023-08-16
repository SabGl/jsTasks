//нам нужно создать функцию, которая возвращает массив уникальных элементов


//вариант 1
 const uniqueArr = (arr) => {
    return new Set (arr)
 }


//вариант 2
const uniqueArr = (arr) => {
    return Array.from = new Set (arr)
}

//вариант 3
const uniqueArr = (arr) => {
    let onlyUnique = []
    return onlyUnique = new Set (arr)
}