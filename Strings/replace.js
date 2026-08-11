let str = "hello, hello, hello";

let newstr = str.replace("hello","Hey");

let newstr1 = str.replace(/hello/g,"Hey");

console.log(newstr);

console.log(newstr1);