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
       console.log("usuario entro");
      createProfile();
       console.log("user",user);
     }).catch((error) => {
       // Handle Errors here.
       var errorCode = error.code;
       var errorMessage = error.message;
       // The email of the user's account used.
       var email = error.email;
       // The firebase.auth.AuthCredential type that was used.
       var credential = error.credential;
       console.log("error",errorMessage)
       console.log("usuario no entro");
       alert("Hubo un error en la validación de datos");;
     });}
   
     // Aqui debemos agregar la autentificación con correo y contraseña y el registro
   // Usuarios Nuevos
   function createProfile(){
     const currentUserData = firebase.auth().currentUser;
   const uid = currentUserData.uid;
   const firestore = firebase.firestore();
   firestore.collection('users').doc(uid).get().then(function(doc){
     if (doc.exists) {
       location.assign("#/wall")}
       else{ 
   location.assign("#/createProfile")}
   })}