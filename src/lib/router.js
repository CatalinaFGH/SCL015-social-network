import { login } from "./view/templateLogin.js";
import { wall } from "./view/templateWall.js";

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
    containerRoot.innerHTML='';
    if (hash === "#/wall") {
        containerRoot.innerHTML = wall();
    }
    else { 
        containerRoot.innerHTML= login();
    }
}
 
