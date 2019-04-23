// Code your solution here


const findMatching = (arr, string) => {
  return arr.filter(driver => {
    return driver.toLowerCase() === string.toLowerCase()
  })
}

const fuzzyMatch = (arr, string) => {
  let length = string.length
  return arr.filter(driver => {
    return driver.slice(0, length) === string;
  })
}

const matchName = (arr, string) => {
  return arr.filter(driver => {
    return driver.name.toLowerCase() === string.toLowerCase();
  })
}







// function findMatching(arr, string) {
//   return arr.filter(function(driver) {
//     return driver.toLowerCase() === string.toLowerCase();
//   }) // => returns "hi"
// }

// findMatching(["bye", "hi"], "hi")
