function calculateDiscount (originalPrice, discount) {
  return originalPrice - originalPrice*discount/100
}

const originalPrice = 100
const discount = 15
const newPrice = calculateDiscount(originalPrice, discount)

console.log({
  Originalprice : originalPrice,
  Discount : discount,
  newPrice : newPrice
})