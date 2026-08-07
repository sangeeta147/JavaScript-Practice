







let arr = [1,2,3,4,5,"A","B","c","D"];

//Access the element

console.log(arr[3]);

arr[3] = 300; //Update the element

console.log(arr[3]);

console.log(arr);


//Delete the element

let removed_value = arr.pop(); //pop() method removes the last element from an array and returns that element.

let removed_value1 = arr.pop(); 


let removed_value2 = arr.shift(); //shift() method removes the first element from an array and returns that element.


console.log(removed_value);
console.log(removed_value1);
console.log(removed_value2);

console.log(arr);