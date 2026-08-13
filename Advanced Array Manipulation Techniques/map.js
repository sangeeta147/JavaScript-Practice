//used to iterate over an array and return a new array

let arr = [1,2,3,4,5];

//Square of all the elements

let sq_arr = arr.map((elem)=>{
    return elem*elem;
});

//let sq_arr = arr.map(elem => elem*elem);   --alternate method

console.log(sq_arr);