// removes the last element and returns it to us when asked.

let arr = [1,2,3,4,false,"Hello"]

let last_elem = arr.pop()

arr.pop()    //last 2nd is removed
arr.pop()   // last 3rd is removed
console.log(last_elem);

console.log(arr);