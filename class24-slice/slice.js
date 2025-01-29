const list = [1,2,3,4,5,6,7,8]
console.log(list.slice(3))
console.log(list.slice(3,6))
console.log(list.slice(5,8))
console.log(list.slice(-1))
console.log(list.slice(-2))
console.log(list.slice(4,-2))

const list2 =list.slice(1)
const list3 = list.slice(2,8)

console.log('node', list2, list3)
