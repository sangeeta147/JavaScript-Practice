console.log("Hey");  //Callstack

function promise(){
    Promise.resolve().then(promise)
}
promise()    //Microtask Queue

setTimeout(()=>{
    console.log("Coming fron setTimeout");
},100)  //MacrotaskQueue