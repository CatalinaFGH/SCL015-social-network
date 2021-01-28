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
//revisar error de esta parte 
    auth.sendPasswordResetEmail(emailAddress).then(function() {
     alert("Enviamos un correo para restablecer tu contraseña");
    }).catch(function(error) {
        if(error.message=== "The email address is badly formatted."){
            alert("por favor ingresa un correo valido")}
        else if (error.message === "There is no user record corresponding to this identifier. The user may have been deleted."){
            alert("correo no registrado")
        }

    console.log(error);
     console.log("envio no exitoso");
    });

    })

return divReset;
    
}