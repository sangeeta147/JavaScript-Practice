const target_div = document.getElementById("my_div");

target_div.addEventListener("contextmenu", (e) => {
    e.preventDefault()
    console.log(e);
    const menu = document.getElementById("custom_menu");
    menu.style.top = `${e.pageY}px`;
    menu.style.left = `${e.pageX}px`;
    menu.style.display = "block";
});