// Este es el punto de entrada de tu aplicación

// import { myFunction } from './lib/index.js';
import { login } from './lib/view/templateLogin.js';
import { changeRouter } from './lib/router.js';


// función login de página de bienvenida
document.getElementById('root').innerHTML= login();


const init = () => {
    window.addEventListener('hashchange', () => {
        changeRouter(window.location.hash);
    })
}

window.addEventListener('load', init);