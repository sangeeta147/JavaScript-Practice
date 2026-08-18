let para = document.getElementById("p_id");

let spn = document.createElement("Span");

spn.innerText = "Text coming straight away from JS";

spn.style.color = "red";
spn.style.font = "100px";
spn.style.backgroundColor = "yellow";

para.appendChild(spn);
