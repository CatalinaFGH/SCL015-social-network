import { login } from "./view/templateLogin.js";

export const changeRouter = (hash) => {
    if (hash === '#/menu') {
        return showTemplate(hash);
    }
    else if (hash === '#/wall') {
        return showTemplate(hash);
    }
    else {
        return showTemplate(hash);
    }
}

export const showTemplate = (hash) => {
    const containerRoot = document.getElementById('root');
    containerRoot.appendChild(login());
     if (hash === '#/' || hash === '' || hash === '#')  {
        containerRoot.appendChild(login());
    }
    else { 
        containerRoot.innerHTML = "pagina no existe";
    }
}