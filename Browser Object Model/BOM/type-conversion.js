//TYPE CONVERSION refers to changing a variable's data type.
//Types of Conversion:
//Implicit (Automatic): Done by JavaScript automatically(also known as type casting).

console.log(10 + "10");   //got converted to string

console.log(10 * "1");    //got converted to no.

console.log(20 + null);

//PRIORITY RULES
//Number + String = String
//Number + Boolean = Number
//Number + Null = Null is treated as 0.
// True is treated as 1.


//Explicit (Manually by the developers): Done using functions like Number(), String(), etc.

let a = "1234";
console.log(Number(a));

let b = 1234;
console.log(String(b));
console.log(Boolean(b));

let c = 0;
console.log(Boolean(c));