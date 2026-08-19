let sign_form = document.getElementById("signup");
let pass = document.getElementById("pass");
let con_pass = document.getElementById("confirm_pass");
let msg = document.getElementById("message");

sign_form.addEventListener("submit",function(e){
    e.preventDefault()
    if(pass.value!==con_pass.value){
        msg.innerText = ("Passwords do not match!");
        msg.style.color = "red";
    }
    else{
        msg.innerText = ("Passwords Matched!!");
        msg.style.color = "green";
    }
});