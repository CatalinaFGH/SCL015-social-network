import { loginWithGoogle } from "../index.js";

export const login = () => {
    const divLogin = document.createElement("div");   
    divLogin.setAttribute("CLASS","root");
    const viewLogin = `
<img src="img/logo.png" alt="Beauty Tips Logo">
<h3>Inicia Sesión</h3>
<label for="">Usuario</label><br>
<input type="text"><br>
<label for="">Contraseña</label><br>
<input type="password" class="passwordInput">
<br>
<a id="logInBtn" href="#/wall">Inicia Sesión</a>
<br>
<button id="googleBtn" class="google-btn "href="#/wall"> <img src="img/logo-gmail.svg" alt="Google">Inicia Sesión con Google</button> <br><br>

<a href="">¿Olvidaste tu contraseña?</a>

<p>¿Eres nueva? <a href=""><strong>Regístrate</strong></a></p>
`;

divLogin.innerHTML= viewLogin;

const googleLoginBtn= divLogin.querySelector("#googleBtn"); 
googleLoginBtn.addEventListener("click", () => {
    console.log("pruebirijilla");
loginWithGoogle();
})

return divLogin;
}

