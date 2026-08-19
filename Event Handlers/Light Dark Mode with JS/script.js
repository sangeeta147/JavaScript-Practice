let mainBody = document.getElementById("pageBody");
let btn = document.getElementById("toggleBtn");

let isDark = false;

function toggle() {

    if (isDark === false) {

        mainBody.style.backgroundColor = "black";
        mainBody.style.color = "white";
        btn.innerText = "Light Theme";

        isDark = true;
    }

    else {

        mainBody.style.backgroundColor = "white";
        mainBody.style.color = "black";
        btn.innerText = "Dark Theme";

        isDark = false;
    }
};