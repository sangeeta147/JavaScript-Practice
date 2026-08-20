let success = false;

//Making Promise
let promise = new Promise(function(resolve,reject){
    if(success){
        resolve("Promise Fulfilled");
    }
    else {
        reject("Error🤦‍♀️");
    }
});

//
promise.then((msg)=>{
    console.log(msg);
})
.catch((err)=>{
    console.log(err);
});