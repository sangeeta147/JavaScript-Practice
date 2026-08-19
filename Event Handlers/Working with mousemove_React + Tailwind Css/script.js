const mydiv = document.getElementById("my_div");

mydiv.addEventListener("mousemove",() => {
    mydiv.style.backgroundColor = "purple";
    mydiv.style.cursor = "pointer";
    mydiv.style.height = "200px";
    mydiv.style.width = "200px";
    mydiv.style.border = "2px solid black";
    mydiv.textContent = "This is after Hovering";
});