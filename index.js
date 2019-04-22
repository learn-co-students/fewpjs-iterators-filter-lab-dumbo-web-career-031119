// Code your solution here
function findMatching(array, string) {
  return array.filter(x => {
    return x.toLowerCase() === string.toLowerCase()
  })
}

function fuzzyMatch(array, string) {
  let len = string.length
  return array.filter(x => {
    return x.slice(0, len).toLowerCase() === string.toLowerCase()
  })
}

function matchName(array, string) {
  return array.filter(x => {
    return x.name === string
  })
}
