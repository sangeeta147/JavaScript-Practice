// 3 ways

//1. Single quotes

let name = 'Sangeeta';
let age = 25;
let gender = 'Female';

//2. Double quotes

let name1 = "Sangeeta";
let age1 = 25;
let gender1 = "Female";

//3. Backtics: gives us power to also include js variables inside the string

let last_name = 'Kundu';
let name2 = `Sangeeta ${last_name}`;

console.log(name,name1,name2);
console.log(age,age1);
console.log(gender,gender1);


let finalname = 'Sangeeta' + ' ' + 'Kundu';
console.log(finalname);
