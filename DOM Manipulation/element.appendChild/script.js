let parent_list = document.getElementById("un_list");

let newli1 = document.createElement("li");
let newli2 = document.createElement("li");

newli1.innerText = "This is list 1.";
newli2.innerText = "This is list 2.";

parent_list.appendChild(newli1);
parent_list.appendChild(newli2);