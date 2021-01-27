// import {registerWithEmail} from '../index.js';

export const register = () => {
    const divRegister = document.createElement("div"); 
    const viewRegister=` <div>
  <img src="img/logo.png" alt="Beauty Tips Logo">
  <h3>Registrate</h3>
  <label for="">Correo</label><br>
  <input type="text" id="theEmail"><br>
  <label for="">Contraseña</label><br>
  <input type="password" id="thePassword" class="passwordInput"><br>
  <a id="registerBtn" href="#/register">Enviar</a><br>
  <a id="backBtn" href="#/">Volver</a><br>
</div>`;

divRegister.innerHTML=viewRegister;

const registerBtn = divRegister.querySelector("#registerBtn");
registerBtn.addEventListener("click", () => { 
    let email = divRegister.querySelector("#theEmail").value;
    let password = divRegister.querySelector("#thePassword").value;
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        var user = firebase.auth().currentUser;
        user.sendEmailVerification().then(function() {
          alert("correo enviado");
          const firestore = firebase.firestore();
          const currentUserData = firebase.auth().currentUser;
          const uid = currentUserData.uid;
        }).catch(function(error) {
          console.log("ups, salio mal");
        });
      })
      .catch((error) => {
        // var errorCode = error.code;
        // var errorMessage = error.message;
        if(error.message === "The email address is already in use by another account."){
        alert("Este correo ya esta en uso")};
        if(error.message === "The email address is badly formatted."){
          alert("Ingrese un formato de correo valido")
        }
        // ..
      });}
)

return divRegister;
  }