//Making a Promise
const p1 = Promise.resolve("Resolution coming from p1.");
const p2 = Promise.reject("Rejection coming from p2");
const p3 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("Resolution coming from p3");
    },1000);
});

//Consuming a Promise
Promise.allSettled([p1,p2,p3]).then((results)=>{
    console.log(results);
});