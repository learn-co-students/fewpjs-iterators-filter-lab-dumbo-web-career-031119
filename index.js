// Code your solution here

function findMatching(drivers,string){
  return drivers.filter( n => { return n.toLowerCase() === string.toLowerCase();})
}

function fuzzyMatch(drivers,partialName){
  let length = partialName.length;
  return drivers.filter( n => { return n.slice(0, length) === partialName })
}

function matchName(drivers, name){
  return drivers.filter( n => {if(n["name"] === name){return n}})
}
