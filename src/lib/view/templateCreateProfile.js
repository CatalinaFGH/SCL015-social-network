export const newProfile = () => {
  const divNewProfile = document.createElement("div");
  divNewProfile.setAttribute("CLASS", "createProfile");
  const viewNewProfile = ` <header class="headerProfile" id="header">
          <div class= "profileTitle">
              <h3>Crear Perfil</h3>
          </div>
        </header>

        <main class="newProfileContent">
            <img src="" alt="" class="newProfileImage" id="profileImage"><br>
      
            <div class="custom-input-file">
               <input type="file" id="imgFile" class="input-file" value="">
            </div>
      
            <div class="scroll-container">
      
              <div class="loginEmailInputContainer">
                <input type="text" id="instagram" class="loginProfileInput" required>
                <span class="loginTextInput">Instagram</span><br><br>
              </div>
      
              <div class="loginEmailInputContainer">
                 <input type="text" id="facebook" class="loginProfileInput" required>
                  <span class="loginTextInput">Facebook</span><br><br>
               </div>
      
              <div class="loginEmailInputContainer">
                <input type="textarea" id="aboutMe" class="loginProfileInput" required>
                <span class="loginTextInput">Intereses</span><br><br>
              </div>
           </div>  
      
          <div class="newProfileBtn">
          <button id="newProfileBtn" class="profileButton">GUARDAR</button>
          </div>
        <main>

        <footer class="fixedFooter">
        </footer>
      `;

  divNewProfile.innerHTML = viewNewProfile;

  //Variables globales a utilizar
  const firestore = firebase.firestore();
  const currentUserData = firebase.auth().currentUser;
  const uid = currentUserData.uid;
  const storage = firebase.storage();
  const newProfileBtn = divNewProfile.querySelector("#newProfileBtn");
  let addFileBtn = divNewProfile.querySelector("#imgFile");

  // función para adjuntar foto de perfil del usuario
  let showProfilePicture = () => {
    const user = firebase.auth().currentUser;
    if (user.photoURL === null) {
      user
        .updateProfile({
          photoURL: "./img/profile_image.svg",
        })
        .then(function () {
          divNewProfile.querySelector("#profileImage").src = user.photoURL;
        });
    } else {
      divNewProfile.querySelector("#profileImage").src = user.photoURL;
    }
  };
  
  // funcion para que se cargue la imagen al cargar la pagina
  window.onload = showProfilePicture();

  // función para guardar datos de perfil en firebase
  newProfileBtn.addEventListener("click", () => {
    console.log("click");
    let instagram = divNewProfile.querySelector("#instagram").value;
    let facebook = divNewProfile.querySelector("#facebook").value;
    let aboutMe = divNewProfile.querySelector("#aboutMe").value;
    firestore
      .collection("users")
      .doc(uid)
      .set({
        name: currentUserData.displayName,
        email: currentUserData.email,
        instagram: instagram,
        facebook: facebook,
        aboutMe: aboutMe,
        userID: uid,
        photoURL: currentUserData.photoURL,
      })
      .then(() => {
        location.assign("#/profile");
        console.log("guadado");
      });
  });
  
  //función para cargar foto del usuario y se guarde en firebase
  addFileBtn.addEventListener("change", () => {
    let file = divNewProfile.querySelector("#imgFile").files[0];
    uploadImg(file);
  });

  let uploadImg = (file) => {
    let storageRef = firebase.storage().ref("usersProfileImgs/" + uid);
    storageRef.put(file).then(function (snapshot) {
      showImg();
    });
  };

  // funcion para imprimir en pantalla la foto almacena en firebase
  let showImg = () => {
    const user = firebase.auth().currentUser;
    let newImgURL = storage.ref(`usersProfileImgs/${uid}`);
    newImgURL.getDownloadURL().then((url) => {
      user
        .updateProfile({
          photoURL: url,
        })
        .then(function () {
          divNewProfile.querySelector("#profileImage").src = user.photoURL;
        });
    });
  };

  return divNewProfile;
};
