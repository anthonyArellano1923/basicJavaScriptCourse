const numbers = [1, 2, 3, 4, 5]
const squaredNumbers = numbers.map(number => number ** 2)
console.log(numbers, squaredNumbers)

const colors = ['Red', 'Pink', 'Yellow']
const printColors = colors.forEach(color => console.log(color))
console.log(colors, printColors)

const farenheitTemperatures = [70, 78, 67, 95, 110]
const celsiusTemperatures = farenheitTemperatures.map(temperature => `${Math.floor((5 / 9) * (temperature - 32))}°C`)
console.log('Temperaturas en fareheit: ' + farenheitTemperatures, 'Temperaturas en celsius: ' + celsiusTemperatures)

const list = [1, 2, 3, 4, 5]
let counter = 0
const sum = list.forEach(number => counter += number)
console.log(list, counter)