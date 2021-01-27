// aqui pondremos las preguntas existenciales serias

// modularización: ¿es obligatoria?, ¿en qué momento la podríamos hacer?
// ¿por qué no funciona el registro? no muestra los console log. Si registra usuarios. Exige contraseña de + de 5 caracteres y un mail real.
// ¿Qué pasa si el usuario entra con la contraseña mala? ¿cómo lo hacemos?
// ¿cómo redireccionar al muro si el usuario ingresa correctamente los datos?
// siguentes pasos a seguir :s



//Función de Firebase para iniciar sesión con Google
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

  // Aqui debemos agregar la autentificación con correo y contraseña y el registro
// Usuarios Nuevos



// export const registerWithEmail = (email,password) =>{
//   firebase.auth().createUserWithEmailAndPassword(email, password)
//   .then((user) => {
//     // Signed in
//     // ...
//   })
//   .catch((error) => {
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // ..
//   });}

//   // Usuarios Existentes
//   export const loginWithEmail = () => {
//   firebase.auth().signInWithEmailAndPassword(email, password)
//   .then((user) => {
//     // Signed in
//     // ...
//   })
//   .catch((error) => {
//     var errorCode = error.code;
//     var errorMessage = error.message;
//   });}