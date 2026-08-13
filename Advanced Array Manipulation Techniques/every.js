//tests whether all elements in an array pass a given test
// ony if all satisfies - true
// agar sab kar rhe ho lekin ek na kare - false

let arr = [2,3,4,6,8,10];

/*let every_arr = arr.every((elem)=>{
    if (elem%2===0){
        return true;
    }
    else {
        return false;
    }
});*/

let every_arr = arr.every((elem)=>{
    return elem%2===0;
});

//both work the same way

console.log(every_arr);