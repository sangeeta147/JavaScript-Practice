//used to check if atleast one element in an array satisfies a condition
//check for single condition

let marks = [34,76,84,58,98,99,53,62,36];

//check if any student is failing : marks >=33

let check = marks.some((elem,ind)=>{
    if(elem<33){
        return true;
    }
    else false;
})

console.log(check);