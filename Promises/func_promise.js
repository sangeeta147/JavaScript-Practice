function data(){
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve({user : "Sangeeta",age : 25});
        },1000);
    });
}

data().then((res)=>{
    console.log(res);
})