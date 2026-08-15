//ESM - allow developers to split their code into smaller, reusable pieces, making the codebase more managable.
//helps in importing and exporting specific functionality between different files.

//1. Named Export
//file: math.js
//export const add = (a,b) => a+b;
//export const subtract = (a,b) => a-b;

export const divide = (a,b) => {
    return a/b;
};

export const prod = (a,b) => {
    return a*b;
};

//2. Default Export
//file: math.js
//const multiply = (a,b) => a*b;
//export default multiply

const add = (a,b) => {
    return a+b;
};

export default add;

