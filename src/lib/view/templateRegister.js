export const register = () => {
    const divRegister = document.createElement("div"); 
    divRegister.setAttribute("CLASS", "templateRegister")
    const viewRegister=`
  <img src="img/logo.png" alt="Beauty Tips Logo">
  <h3 class="registerTitle">Regístrate</h3><br>

  <div class="inputContainer">
  <input type="text" id="theUserName" class="loginInput" required>
  <span class="loginTextInput">Nombre de usuario</span>
  </div>
  <div class="inputContainer">
  <input type="text" id="theEmail" class="loginInput" required>
  <span class="loginTextInput">Correo</span>
  </div>

  <div class="inputContainer">
  <input type="text" id="thePassword" class="loginInput" required>
  <span class="loginTextInput">Contraseña</span>
  </div>

  <button id="registerBtn" class="registerBtn" href="#/register">Registrarse</button>
  <a id="toGoBackButton" class="backRegisterButton" href="#/">Volver</a><br>
`;

divRegister.innerHTML=viewRegister;

const registerBtn = divRegister.querySelector("#registerBtn");
registerBtn.addEventListener("click", () => { 
    let email = divRegister.querySelector("#theEmail").value;
    let password = divRegister.querySelector("#thePassword").value;
    let userName = divRegister.querySelector("#theUserName").value;
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        var user = firebase.auth().currentUser;
        user.updateProfile({
          displayName: userName,
        }).then(function() {
          console.log("guardo nombre")
        }).catch(function(error) {
          console.log("no lo guardo :C")
          console.log(error);
        });
        user.sendEmailVerification().then(function() {
          alert("Te hemos enviado un correo con el link de verificación, para iniciar sesión recuerda verificar tu correo");
          const firestore = firebase.firestore();
          const currentUserData = firebase.auth().currentUser;
          const uid = currentUserData.uid;
        }).catch(function(error) {
          console.log("ups, salio mal");
          console.log(error);
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



const backToLogin = divRegister.querySelector("#toGoBackButton");
backToLogin.addEventListener("click", () => {
    location.assign("#")
})

return divRegister;
  }