const numbers = [1, 2, 3]
const numbersPlus = numbers.concat([4, 5, 6])

numbers.push([4, 5, 6, 7])
numbers.push(4,5,6)

const sum = numbersPlus.reduce((sum = 0, newValue) => sum + newValue)

console.log(numbers, numbersPlus, sum)