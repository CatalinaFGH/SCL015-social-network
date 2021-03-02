import { loginWithGoogle } from "../loginGoogleFirebase.js";

export const login = () => {
  const divLogin = document.createElement("div");
  divLogin.setAttribute("CLASS", "templateLogin");
  const viewLogin = `<img src="img/logo.png" alt="Beauty Tips Logo" class="logoLogin">

      <div class="loginInputsContainer">
          <input type="text" id="loginEmail" class="loginInput" required>
          <span class="loginTextInput">Email</span>
      </div>

      <div class="loginEmailInputContainer">
          <input type="password" id="loginPassword" class="loginInput" required>
          <span class= "loginTextInput">Contraseña</span>
          <div class="eyeImageContainer">
              <img src= "img/eye-open.svg" id="eye" class= "eyeImage">
          </div>
      </div>

      <div class="loginButtonsContainer">
          <button id="logInBtn" class="loginButtonStyle">Inicia Sesión</button>

          <div class="loginLine">
              <img src="img/line.svg" alt="lines" class="lines"><p class="o">o</p><img src="img/line.svg" alt="lines" class="lines">
          </div>
          <button id="googleBtn" class="google-btn "href="#/wall">Inicia sesión con Google</button>
          <div class="googleImageContainer">
              <img src="img/logo-gmail.svg" alt="Google" class="googleImage">
          </div>
      </div>

      <div class="loginLinksContainer">
          <a href="#/resetPassword" class="loginLinks">¿Olvidaste tu contraseña?</a>
          <p class="loginLinks">¿Eres nueva?<a href="#/register" class="registerLink"> Regístrate</a></p>
      </div>`;

  divLogin.innerHTML = viewLogin;

const googleLoginBtn= divLogin.querySelector("#googleBtn"); 
googleLoginBtn.addEventListener("click", () => {
loginWithGoogle();
})

// funcion para iniciar sesión con email y contraseña
const loginWithEmail = divLogin.querySelector("#logInBtn");
loginWithEmail.addEventListener("click",() =>{
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((user) => {
    var user = firebase.auth().currentUser;
    const userVerified = user.emailVerified;
    const firestore = firebase.firestore();
    const uid = user.uid;
    if(userVerified === true) { 
      firestore.collection('users').doc(uid).get().then(function(doc){
            if (doc.exists) {
              location.assign("#/wall")}
              else{ 
          location.assign("#/createProfile")}
        })}
    else if (userVerified === false) {
    alert("Por favor verifica tu correo antes de ingresar");
            }
          });
        });

  // funcion para ocultar y mostrar contraseña al hacer click en icocno de ojo
let passwordInput = divLogin.querySelector("#loginPassword");
let eyeIcon = divLogin.querySelector("#eye");

eyeIcon.addEventListener("click", ()=>{
  if(passwordInput.type === "password"){
    passwordInput.type = "text";
    eyeIcon.src = "img/eye-closed.svg";
  }else{
    passwordInput.type = "password";
    eyeIcon.src = "img/eye-open.svg";
}});

return divLogin;
};