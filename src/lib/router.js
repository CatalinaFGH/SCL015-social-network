import { login } from "./view/templateLogin.js";
import { register } from "./view/templateRegister.js";
import { wall } from "./view/templateWall.js";
import { resetPassword } from "./view/templatePasswordReset.js";
import { newProfile } from "./view/templateCreateProfile.js";


export const changeRouter = (hash) => {
    if (hash === '#/register') {
        return showTemplate(hash);
    }
    else if (hash === '#/wall') {
        return showTemplate(hash);
    }
    else if (hash === '#/resetPassword') {
        return showTemplate(hash);
    }
    else if (hash === '#/createProfile') {
        return showTemplate(hash);
    }
    else {
        return showTemplate(hash);
    }
}

export const showTemplate = (hash) => {
    const containerRoot = document.getElementById('root');
    containerRoot.innerHTML="";
     if (hash === '#/' || hash === '' || hash === '#'|| hash === '/') {
        containerRoot.appendChild(login());
    }
    else if (hash === '#/register'){
        containerRoot.appendChild(register());
    }
    else if (hash === "#/wall"){
        containerRoot.appendChild(wall());
    }
    else if (hash === '#/resetPassword') {
        containerRoot.appendChild(resetPassword());
    }
    else if (hash === '#/createProfile') {
        containerRoot.appendChild(newProfile());
    }
    else { 
        containerRoot.innerHTML = "la página no existe";
    }
}