let arr = [1,5,2,7,10,0];

arr.sort((a,b)=>{           //ascending order
    return a-b;
});

/*arr.sort((a,b)=>{        //descending order     
    return b-a;
});*/

/*arr.sort((a,b)=>{         // keep as it is
    return a=b;
});*/

console.log(arr);