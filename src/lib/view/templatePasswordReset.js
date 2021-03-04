export const resetPassword = () => {
  const divReset = document.createElement("div");
  divReset.setAttribute("CLASS", "templateResetPassword");
  const viewReset = 
          ` <div class="desktopLogin">
              <img src="img/logo.png" alt="Beauty Tips Logo">
    
                 <div class="resetPasswordInfoContainer">
                    <h2 class="resetPasswordTitle">Restablecer Contraseña</h2>
                    <p class="resetPasswordParagraph">Ingresa tu correo y te enviaremos una nueva contraseña</p>

                 <div class="inputContainer">
                    <input type="text" id="resetEmail" class="loginInput" required>
                    <span class="loginTextInput">Email</span>
                    <h3 id="alertMessage" class="alert-message"></h3>
                 </div>

                 <button class="resetPasswordButton" id="resetPasswordBtn">Restablecer</button>
                 <a class="backButton" id="goBackButton" href="#/">Volver</a>
                 

                 </div>
            </div>`;

  divReset.innerHTML = viewReset;

  //Variables globales a utilizar
  const resetPasswordWithEmail = divReset.querySelector("#resetPasswordBtn");
  const toLogin = divReset.querySelector("#goBackButton");
  let alertMessage = divReset.querySelector("#alertMessage");
  
  //función para enviar correo para reestablecer la contraseña
  resetPasswordWithEmail.addEventListener("click", () => {
    const auth = firebase.auth();
    const emailAddress = divReset.querySelector("#resetEmail").value;
    auth
      .sendPasswordResetEmail(emailAddress)
      .then(function () {
      alertMessage.innerHTML="";
      alertMessage.innerHTML+="Enviamos un correo para restablecer tu contraseña";
      })
      .catch(function (error) {
        if (error.message === "The email address is badly formatted.") {
          alertMessage.innerHTML="";
          alertMessage.innerHTML+="por favor ingresa un correo válido";
        } else if (
          error.message ===
          "There is no user record corresponding to this identifier. The user may have been deleted."
        ) {
          alertMessage.innerHTML="";
          alertMessage.innerHTML+="correo no registrado";
        }

        console.log(error);
        console.log("envio no exitoso");
      });
  });

  //función para volver al login
  toLogin.addEventListener("click", () => {
    location.assign("#");
  });

  return divReset;
};
