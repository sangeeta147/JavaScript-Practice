let n1 = Number.MAX_SAFE_INTEGER;
let n2 = Number.MAX_SAFE_INTEGER;

console.log(n1 + 1 === n2 + 2); //precision loss, returns true

let n3 = 9007199254740991n; // BigInt

console.log(n3 + 2n === n3 + 3n); // no precision loss, returns false


/*BigInt is a built-in object in JavaScript that provides a way to represent whole numbers larger than 2^53 - 1, which is the largest number JavaScript can reliably represent with the Number primitive. BigInt can be created by appending 'n' to the end of an integer or by calling the BigInt() constructor.
*/