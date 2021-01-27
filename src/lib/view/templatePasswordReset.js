export const resetPassword = () => {

    const divReset = document.createElement('div');
    const viewReset = `<img src="img/logo.png" alt="Beauty Tips Logo">
    <h3>Restablecer Contraseña</h3>
    <p>Ingresa tu correo y te enviaremos una nueva contraseña</p>
    <label for="">Correo</label><br>
    <input type="text" id="resetEmail"><br>
    <button id="resetPasswordBtn">Restablecer</button>
    <a id="backBtn" href="#/">Volver</a><br>
    `;
    divReset.innerHTML = viewReset;
    
    const resetPasswordWithEmail = divReset.querySelector("#resetPasswordBtn");
    resetPasswordWithEmail.addEventListener("click", () => {
    var auth = firebase.auth();
    var emailAddress = divReset.querySelector("#resetEmail").value;

    auth.sendPasswordResetEmail(emailAddress).then(function() {
     Alert("Enviamos un correo para restablecer tu contraseña")
    }).catch(function(error) {
     console.log("envio no exitoso")
    });
   
    })

return divReset;
    
}