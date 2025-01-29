//Case 1 - Adding elements to a list

const list = [1,2,3,4,5,6]
const list2 = [...list,7,8,9,10]
console.log(list, list2)

//Case 2, copy an array

const list3 = [...list]
console.log(list, list3)

//Case 3 - Combine arrays

const list4 = [...list, ...list2]
console.log(list)
console.log(list2)
console.log(list4)

//Case 4 - Pass elements as parameters of a function
console.log()
function sum (a,b,c) {
  return a + b + c
}
const list5 = list.slice(0,3)
const summary = sum(...list5)
console.log(summary)
