function fetchData(){
    return new Promise((res)=>{
        setTimeout(()=>{
            res("Step 1: Fetched Data");
        },1000);
    });
}

function transformData(data){
    return new Promise((res)=>{
        setTimeout(()=>{
            res(`Step 2: Transformed ${data}`);
        },1000);
    });
}

function finalData(data){
    return new Promise((res)=>{
        setTimeout(()=>{
            res(`Step 3: Final ${data}`);
        },1000);
    });
}

fetchData().then((data)=>{
    console.log(data);
    return transformData(data);
})
.then((data)=>{
    console.log(data);
    return finalData(data);
})
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})