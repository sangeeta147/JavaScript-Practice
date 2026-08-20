console.log("Start");

const ID = setTimeout(()=>{
    console.log("This comes from setTimeout after 3sec.");
},3000);

clearTimeout(ID);
