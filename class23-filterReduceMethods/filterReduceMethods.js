const numbers = [1,2,3,4,5,6,7,8,9,10]

//Filter method

const evenNumbers = numbers.filter( number => {
  if (number % 2 == 0) {
    return number
  }
})

//Reduce method, case 1

const sum = numbers.reduce((sum = 0, newVal) => sum + newVal)

console.log(numbers, evenNumbers, sum)

//Reduce method, case 2. String acumulator

const words = ['water', 'dinner', 'lunch', 'brunch', 'water', 'dinner', 'water', 'dinner', 'lunch']
const wordsAccumulator = words.reduce((accumulator, nextValue) => {
  if (accumulator[nextValue]) {
    accumulator[nextValue]++
  } else {
    accumulator[nextValue] = 1
  }
  return accumulator
}, {})

console.log(wordsAccumulator)


