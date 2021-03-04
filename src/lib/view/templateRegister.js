export const register = () => {
  const divRegister = document.createElement("div");
  divRegister.setAttribute("CLASS", "templateRegister");
  const viewRegister = 
                      `<div class="desktopLogin"> 
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
                            <input type="password" id="thePassword" class="loginInput" required>
                            <span class="loginTextInput">Contraseña</span>
                          </div>

                          <div class="eyeImageContainer" id="loginContainer">
                             <img src= "img/eye-open.svg" id="eye2" class= "eyeImage">
                          </div>
                         
                          <h3 id="alertRegisterOKMessage" class="alertRegisterMessage"></h3>
                          <h3 id="alertRegisterMessage" class="alert-message"></h3>
                          <h3 id="alertRegisterNOTMessage" class="alert-message"></h3>

                         <button id="registerBtn" class="registerBtn" href="#/register">Registrarse</button>
                           <a id="toGoBackButton" class="backRegisterButton" href="#/">Volver</a><br>
                           <div>`;

  divRegister.innerHTML = viewRegister;
  
  let alertRegisterMessage = divRegister.querySelector("#alertRegisterMessage");
  let alertRegisterOKMessage = divRegister.querySelector("#alertRegisterOKMessage");
  let alertRegisterNOTMessage = divRegister.querySelector("#alertRegisterNOTMessage");

  //Función para registrarse con correo y contraseña
  const registerBtn = divRegister.querySelector("#registerBtn");
  registerBtn.addEventListener("click", () => {
    let email = divRegister.querySelector("#theEmail").value;
    let password = divRegister.querySelector("#thePassword").value;
    let userName = divRegister.querySelector("#theUserName").value;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        const user = firebase.auth().currentUser;
        user
          .updateProfile({
            displayName: userName,
          })
          .then(function () {})
          .catch(function (error) {
            console.log(error);
          });
        user
          .sendEmailVerification()
          .then(function () {
            alertRegisterOKMessage.innerHTML="";
            alertRegisterOKMessage.innerHTML+="Te hemos enviado un correo con el link de verificación, para iniciar sesión recuerda verificar tu correo";
            
          })
          .catch(function (error) {
            console.log("ups, salio mal");
            console.log(error);
          });
      })
      .catch((error) => {
        if (
          error.message ===
          "The email address is already in use by another account."
        ) {
          alertRegisterMessage.innerHTML="";
          alertRegisterMessage.innerHTML+="Este correo ya está en uso";
        }
        else if (error.message === "The email address is badly formatted.") {
          alertRegisterMessage.innerHTML="";
          alertRegisterMessage.innerHTML+="Ingrese un formato de correo válido";
        }
      });
  });

  //Función para volver a la página de login
  const backToLogin = divRegister.querySelector("#toGoBackButton");
  backToLogin.addEventListener("click", () => {
    location.assign("#");
  });

  //Función para ocultar y mostrar contraseña al hacer click en icono de ojo
    let passwordInput = divRegister.querySelector("#thePassword");
    let eyeIcon = divRegister.querySelector("#eye2");
  eyeIcon.addEventListener("click", ()=>{
    if(passwordInput.type === "password"){
      passwordInput.type = "text";
      eyeIcon.src = "img/eye-closed.svg";
    }else{
      passwordInput.type = "password";
      eyeIcon.src = "img/eye-open.svg";
  }});

  return divRegister;
};
