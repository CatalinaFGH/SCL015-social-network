import { wall } from "./templateWall.js";
export const editPost = (docID, message, postImage) => {
  const divEditPost = document.createElement("div");
  divEditPost.setAttribute("CLASS", "templateNewPost");
  const viewEditPost = `
  <div class= "desktopMain">
  
      <!-- Header fijo -->
      <div class="newPostTitle" id="contentMenu">
          <img src="img/backBtn.svg" alt="volver" id="backBtn" class="backBtn">Editar Publicación
      </div>

      <!-- contenido del post a editar-->
      <main id="newPostContentDiv" class="newPostDiv">
          <div id="newPostUserInfo" class="newPostUserInfo">
              <img src="" alt="foto de perfil" id="editPostProfilePic" class="newPostProfileImg">
              <p class="newPostUserName" id="editPostUserName"></p>
          </div>
      
          <div class="newPostContent">
              <div class="postImgDiv">
                <img src="${postImage}" class="imgNewPost" id="imgToPost">
              </div>
              <textarea id="newPostText" name="newPostText" class="newPostTextInput" rows="4" cols="50">${message}</textarea>
              <input type="submit" value="Guardar cambios" class="postButton" id="saveChangesBtn">
          </div>
      </main>
      
      <footer class="fixedFooter">
      </footer>
      <div>`;

  divEditPost.innerHTML = viewEditPost;

  //Variables globales a utilizar
  const firestore = firebase.firestore();
  const saveChangesBtn = divEditPost.querySelector("#saveChangesBtn");

  //función para volver al muro principal (evento al icono)
  const backToWall = divEditPost.querySelector("#backBtn");
  backToWall.addEventListener("click", () => {
    const root = document.getElementById("root");
    root.innerHTML = "";
    root.appendChild(wall());
  });

  //función para imprimir en pantalla información del usuario
  firestore
    .collection("posts")
    .doc(docID)
    .get()
    .then(function (doc) {
      if (doc.exists) {
        divEditPost.querySelector("#editPostUserName").innerHTML = doc.data().userName;
        divEditPost.querySelector("#editPostProfilePic").src = doc.data().userPhotoURL;
      } else {
        divEditPost.log("No such document!");
      }
    })
    .catch(function (error) {
      console.log("Error getting document:", error);
    });
  
  //función para guardar el valor del mensaje editado
  saveChangesBtn.addEventListener("click", () => {
    let postMessage = divEditPost.querySelector("#newPostText").value;

  //función para actualizar mensaje editado en firebase
    firestore
      .collection("posts")
      .doc(docID)
      .update({
        message: postMessage,
      })
      .then(() => {
        const root = document.getElementById("root");
        root.innerHTML = "";
        root.appendChild(wall());
      });
  });

  return divEditPost;
};
