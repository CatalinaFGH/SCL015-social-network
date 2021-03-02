export const register = () => {
  const divRegister = document.createElement("div");
  divRegister.setAttribute("CLASS", "templateRegister");
  const viewRegister = 
                      ` <img src="img/logo.png" alt="Beauty Tips Logo">
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

  divRegister.innerHTML = viewRegister;

  // variables globales a utilizar
  const user = firebase.auth().currentUser;
  const registerBtn = divRegister.querySelector("#registerBtn");
  let email = divRegister.querySelector("#theEmail").value;
  let password = divRegister.querySelector("#thePassword").value;
  let userName = divRegister.querySelector("#theUserName").value;
  const backToLogin = divRegister.querySelector("#toGoBackButton");

  // funcion para registrarse con correo y contraseña
  registerBtn.addEventListener("click", () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
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
            alert(
              "Te hemos enviado un correo con el link de verificación, para iniciar sesión recuerda verificar tu correo"
            );
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
          alert("Este correo ya esta en uso");
        }
        if (error.message === "The email address is badly formatted.") {
          alert("Ingrese un formato de correo valido");
        }
      });
  });

  // funcion para volver a pagina de login
  backToLogin.addEventListener("click", () => {
    location.assign("#");
  });

  return divRegister;
};
