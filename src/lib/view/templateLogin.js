import { loginWithGoogle } from "../index.js";

export const login = () => {
    const divLogin = document.createElement("div");   
    divLogin.setAttribute("CLASS","templateLogin");
    const viewLogin = `

<img src="img/logo.png" alt="Beauty Tips Logo">

<div class= "inputsBigContainer">
<div class="loginInputsContainer">
<input type="text" id="loginEmail" class="loginInput" required>
<span class="loginTextInput">Email</span>
</div><br>

<div class="loginEmailInputContainer">
<input type="password" id="loginPassword" class="loginInput" required>
<span class= "loginTextInput">Contraseña</span>
<div class="eyeImageContainer">
<img src= "img/eye-open.svg" id="eye" class= "eyeImage"><br>
</div>
</div><br>

<button id="logInBtn" class="loginButtonStyle">Inicia Sesión</button>
<br>
<button id="googleBtn" class="google-btn "href="#/wall"> <img src="img/logo-gmail.svg" alt="Google">Inicia Sesión con Google</button> <br><br>

<a href="#/resetPassword">¿Olvidaste tu contraseña?</a>

<p>¿Eres nueva? <a href="#/register"><strong class="registerLink">Regístrate</strong></a></p>
`;

divLogin.innerHTML= viewLogin;

const googleLoginBtn= divLogin.querySelector("#googleBtn"); 
googleLoginBtn.addEventListener("click", () => {
loginWithGoogle();
})

const loginWithEmail = divLogin.querySelector("#logInBtn");
loginWithEmail.addEventListener("click",() =>{
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;
    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((user) => {
    var user = firebase.auth().currentUser;
    const userVerified = user.emailVerified;
    if(userVerified === true) { 
      console.log("usuario entro");
      location.assign("#/wall");
      console.log(user);}
    else if (userVerified === false) {
      alert("Por favor verifica tu correo antes de ingresar");
    }
    // Signed in
    // ...
  })
  .catch((error) => {
      console.log("usuario no entro");
      alert("usuario y/o clave incorrecta");
      location.assign("#/");
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
  });}
)

let passwordInput = divLogin.querySelector("#loginPassword");
let eyeIcon = divLogin.querySelector("#eye");

eyeIcon.addEventListener("click", ()=>{
// console.log("hola")
  if(passwordInput.type === "password"){
    passwordInput.type = "text";
    eyeIcon.src = "img/eye-closed.svg";
  }else{
    passwordInput.type = "password";
    eyeIcon.src = "img/eye-open.svg";
}});

return divLogin;
}
