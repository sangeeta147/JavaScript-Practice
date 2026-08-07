/* Indexes are no's starting from 0.*/

const arr = [1,2,'Geeta', false,10,14,17];

arr[2.5] = 'Ram'; // This will create a property with key '2.5' instead of an index

console.log(arr);

console.log(arr[2]);