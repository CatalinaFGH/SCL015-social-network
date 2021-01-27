// Este es el punto de entrada de tu aplicación

// import { myFunction } from './lib/index.js';
import { login } from './lib/view/templateLogin.js';
import { register } from './lib/view/templateRegister.js'
import { changeRouter } from './lib/router.js';
// import { registerWithEmail } from './lib/index.js';

// función login de página de bienvenida

window.addEventListener('load', () => {
    changeRouter(window.location.hash);
});

window.addEventListener('hashchange', () => {
    changeRouter(window.location.hash);
});