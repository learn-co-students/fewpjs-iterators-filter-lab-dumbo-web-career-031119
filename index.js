// Code your solution here

// Write findMatching- This function takes an array of drivers and a string as arguments, and returns the matching list of drivers. The function should be case insensitive.

function findMatching(darray, driver) {
  return darray.filter(d => {
    return d.toLowerCase() === driver.toLowerCase();
  });
}

// function superbowlWin(whash) {
//   let value = whash.find(s => s.result === 'W');
//   return !!value ? value.year : undefined;
// }

// Write fuzzyMatch - This function takes an array of drivers and a string as arguments for querying the array, and returns all drivers whose names begin with the provided letters.

function fuzzyMatch(darray, driver) {
  return darray.filter(d => d[0] === driver[0]);
}

// Write matchName - This function takes an array of drivers and a string as arguments. In this function, each element of the drivers array is a JavaScript object that has a property of name. The function should return each element whose name property matches the provided string argument.

function matchName(darray, driver) {
  return darray.filter(d => d.name === driver);
}
