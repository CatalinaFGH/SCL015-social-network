// import {registerWithEmail} from '../index.js';

export const register = () => {
    const divRegister = document.createElement("div"); 
    const viewRegister=` <div>
  <img src="img/logo.png" alt="Beauty Tips Logo">
  <h3>Registrate</h3>
  <label for="">Correo</label><br>
  <input type="text" id="theEmail"><br>
  <label for="">Contraseña</label><br>
  <input type="password" id= "thePassword" class="passwordInput"><br>
  <a id="registerBtn" href="#/register">Enviar</a><br>
  <a id="backBtn" href="#/">Volver</a><br>
</div>`;

divRegister.innerHTML=viewRegister;

const registerBtn = divRegister.querySelector("#registerBtn");
registerBtn.addEventListener("click", () => { 
    console.log("pruebirijilla");
    let email = document.getElementById("theEmail").value;
    let password = document.getElementById("thePassword").value;
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        // Signed in
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
      });}
)

return divRegister;
  }