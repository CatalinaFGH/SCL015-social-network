import { loginWithGoogle } from "../index.js";

export const login = () => {
    const divLogin = document.createElement("div");   
    divLogin.setAttribute("CLASS","root");
    const viewLogin = `
<img src="img/logo.png" alt="Beauty Tips Logo">
<h3>Inicia Sesión</h3>
<label for="">Correo</label><br>
<input type="text" id="loginEmail"><br>
<label for="">Contraseña</label><br>
<input type="password" id="loginPassword" class="passwordInput">
<br>
<button id="logInBtn">Inicia Sesión</button>
<br>
<button id="googleBtn" class="google-btn "href="#/wall"> <img src="img/logo-gmail.svg" alt="Google">Inicia Sesión con Google</button> <br><br>

<a href="">¿Olvidaste tu contraseña?</a>

<p>¿Eres nueva? <a href="#/register"><strong>Regístrate</strong></a></p>
`;

divLogin.innerHTML= viewLogin;

const googleLoginBtn= divLogin.querySelector("#googleBtn"); 
googleLoginBtn.addEventListener("click", () => {
    console.log("pruebirijilla");
loginWithGoogle();
})

const loginWithEmail = divLogin.querySelector("#logInBtn");
loginWithEmail.addEventListener("click",() =>{
    console.log("hola flanders")
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;
    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((user) => {
      console.log("usuario entro")
      location.assign("#/wall");
    // Signed in
    // ...
  })
  .catch((error) => {
      console.log("usuario no entro");
      alert("usuario y/o clave incorrecta");
      location.assign("#/");
    var errorCode = error.code;
    var errorMessage = error.message;
  });}
)

return divLogin;
}

