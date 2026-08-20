setTimeout(()=>{
    console.log("setTimeout1");
},100);

setTimeout(()=>{
    console.log("setTimeout2");
},100);

Promise.resolve().then(()=>{
    console.log("Promise");
});

console.log("Hey from Call Stack.");