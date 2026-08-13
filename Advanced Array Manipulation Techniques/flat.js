//used to flatten an array by reducing its dimensionality

let num = [1,[2,3],4,5,[6,7],[8,[9,[10]]]];

console.log(num);

console.log(num.flat());

console.log(num.flat(2));

console.log(num.flat(3));