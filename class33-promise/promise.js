const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const promiseResolved = true
    if (promiseResolved){
      resolve('Operation succesfull')
    } else {
      reject('Operation failed')
    }
  }, 2000)
})

promise
  .then((successMessage) => {
    console.log(successMessage)
  })
  .catch((failMessage) => {
    console.log(failMessage)
  })