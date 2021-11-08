const nombre = "NeyferCoto";
const contraseña = "NeEnCoPi";
const username = document.getElementById("Username");
const password = document.getElementById("Password");
const Button = document.getElementById("loginButton");

Button.addEventListener("click", Login);

function Login(){
    if(username.value == nombre && password.value == contraseña){
        window.location = "Upload.html"
    }else{
        const wrong = document.createElement("b")
        wrong.innerText = "wrong password or number";
        document.body.appendChild(wrong);
        wrong.classList.add("wrong");
    }
}