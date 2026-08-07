/* Symbols are a new primitive type introduced in ES6. They are unique and immutable identifiers that can be used as keys for object properties. Symbols are often used to avoid property name collisions in objects, especially when working with libraries or frameworks.
Here's a brief overview of how to use symbols in JavaScript:
1. Creating Symbols:
You can create a new symbol using the `Symbol()` function. Each time you call `Symbol()`, it returns a unique symbol.*/


sym1 = Symbol();
sym2 = Symbol('test'); // You can also provide an optional description for the symbol
sym3 = Symbol('test'); // This will create a different symbol even though the description is the same


console.log(sym1);
console.log(sym2);
console.log(sym3);

console.log(sym2 === sym3); // false, because each symbol is unique

/*2. Using Symbols as Object Keys:
You can use symbols as keys for object properties. This allows you to create properties that won't collide with other property names.*/
