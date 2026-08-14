//allows to pass an infinite no of arguments to a function.
//collects all remainig arguments in a sinle array.

const arr = [1,2,3,4,5,6,7,8,9];

const [a,...b] = arr;

console.log(a,b);


let sum = 0;
function add(...nums) {
    for(let i = 0;i<nums.length;i++){
        sum+=nums[i];
    }
    console.log(sum);
    sum = 0;
}

add(1,2,3,4)  //10

add(1,2)      //3

add(1,2,3,4,5,6)    //21