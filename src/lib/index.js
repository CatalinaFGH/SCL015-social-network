// aqui exportaras las funciones que necesites

// export const myFunction = () => {
//   // aqui tu codigo
//   console.log('Hola mundo!');
// };

// ¿Podríamos unir todas las vistas en un solo js (como un objeto) y ahorrarnos los demás js's? Pregunta seria OwO
// ¿Es posible?, ¿es una mala practica?
// ¿Si no se puede, ¿podemos borrar el index.js? (no le vemos la funcionalidad)
// ¿Podríamos agregar ahora el assign()?

export const loginWithGoogle = () =>{

 const provider = new firebase.auth.GoogleAuthProvider();
 
 firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    console.log("user",user);
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    console.log("error",errorMessage);
  });}