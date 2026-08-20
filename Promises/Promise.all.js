let p1 = Promise.resolve("p1 has been resolved");
let p2 = Promise.resolve("p2 has been resolved");
let p3 = Promise.resolve("p3 has been resolved");
let p4 = Promise.reject("p4 has been rejected");

Promise.all([p1,p2,p3,p4]).then((res)=>{
    console.log("Results:",res);
})
.catch((error)=>{
    console.log("Failed",error);
})