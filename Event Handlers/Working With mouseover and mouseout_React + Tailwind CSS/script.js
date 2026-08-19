const mydiv = document.getElementById("my_div");

mydiv.addEventListener("mouseover",() => {
    mydiv.style.backgroundColor = "purple";
    mydiv.style.cursor = "pointer";
    mydiv.style.height = "200px";
    mydiv.style.width = "200px";
    mydiv.textContent = "This is on Hovering";
});

mydiv.addEventListener("mouseout",() => {
    mydiv.style.backgroundColor = "white";
    mydiv.textContent = "This is after Hovering";
});    