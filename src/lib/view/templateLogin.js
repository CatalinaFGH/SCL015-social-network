export const login = () => {
    const viewLogin =
`
<img src="img/logo.png" alt="Beauty Tips Logo">
<h3>Inicia Sesión</h3>
<label for="">Usuario</label><br>
<input type="text"><br>
<label for="">Contraseña</label><br>
<input type="password" class="passwordInput">
<br>
<a id="logInBtn" href="#/wall">Inicia Sesión</a>
<br>
<a id = "googleBtn" class="google-btn" href="#/wall"> <img src="img/logo-gmail.svg" alt="Google">Inicia Sesión con Google</a> <br><br>

<a href="">¿Olvidaste tu contraseña?</a>

<p>¿Eres nueva? <a href=""><strong>Regístrate</strong></a></p>
`
return viewLogin;
};

