// Code your solution here
function findMatching(arr, str) {
    return arr.filter(x => x.toLowerCase() === str.toLowerCase());
}

function fuzzyMatch(arr, str) {
    return arr.filter(x => x.slice(0,str.length) === str);
}

function matchName(arr,str) {
    return arr.filter(x => x.name === str);
}