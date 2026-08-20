const p1 = new Promise((res)=>{
    setTimeout(()=>{
        res("Runs after 2 sec");
    },2000);
});

const p2 = new Promise((res)=>{
    setTimeout(()=>{
        res("Runs after 1 sec");
    },1000);
});

const p3 = new Promise((res)=>{
    setTimeout(()=>{
        res("Runs after 0.5 sec");
    },500);
});

Promise.race([p1,p2,p3]).then((data)=>{
    console.log(data);
});