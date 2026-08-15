alert("Hello Dear");

let items = Array.from(document.getElementsByClassName("li_itm"));
let hdr = document.getElementsByClassName("h1_itm");

//console.log(items.innerText);
//console.log(hdr);

console.log(items);

for (let i = 0; i < items.length; i++) {
    console.log(items[i].innerText);
};