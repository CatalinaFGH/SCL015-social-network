import { editPost } from "./templateEditPost.js";
import { comment } from "./templateNewComment.js";
export const wall = () => {
  const divWall = document.createElement("div");
  divWall.setAttribute("CLASS", "templateWall");
  divWall.setAttribute("ID", "templateWall");
  const viewWall = `

    <!-- Header fijo -->
    <div class="header" id="contentMenu">
    <header></header>
    <input type="checkbox" id="check">
    <label for="check" class="menuButton"><img src="img/lateralMenu.svg"></label>
    <div class="mainTitle">
    <img src="img/logoHeader.png" alt="logo" class="logoHeader">
    </div>

<!-- menu desplegable -->
    <nav class="menu">

      <div class="menuFirstSection">
        <ul>
          <img src="" alt="miniatura foto de perfil" id="profileMiniPic" class="miniViewProfileImage">
          <div class="userInfoContainer">
          <li id="homeUserName"></li>
          <li id="homeUserMail" class="wallUserMail"></li>
          </div>
        </ul>    
      </div>
      <div class="menuThirdSection">
        <ul>
        <div class="homeLogoutIconContainer">
          <img src="img/logoutIcon.svg" class="homeLogoutIcon">
          <li id="logoutBtn">Cerrar Sesión</li>
          </div>
        </ul>
      </div>
    </nav>

    <!-- contenido del muro -->
    <main id="wallContentDiv" class="wallContent"></main>
    
<footer class="fixedFooter">
  <img src="img/MakeupStoreMap.svg" alt="Mapa" id="viewMap">
  <img src="img/addPost.svg" alt="Nuevo Post" class="newPostBtn" id="newPostButton">
  <img src="img/perfilIcon.svg" alt="Perfil" id="showProfileBtn" class="show-profile-btn">
</footer>`;

  divWall.innerHTML = viewWall;
    //Variables globales a utilizar
    const firestore = firebase.firestore();
    let currentUserData = firebase.auth().currentUser;
    const uid = currentUserData.uid;
    const newPostBtn = divWall.querySelector("#newPostButton");
  
    //función para imprimir información del usuario en los posts
    firestore
    .collection("users")
    .doc(uid)
    .get()
    .then(function (doc) {
      if (doc.exists) {
        divWall.querySelector("#homeUserName").innerHTML = doc.data().name;
        divWall.querySelector("#homeUserMail").innerHTML =
          currentUserData.email;
        divWall.querySelector("#profileMiniPic").src = doc.data().photoURL;
      } else {
        console.log("No such document!");
      }
    })
    .catch(function (error) {
      console.log("Error getting document:", error);
    });

  //función para ordenar los posts por hora de publicación y crear el contenido de los posts
  firestore
    .collection("posts")
    .orderBy("date", "desc")
    .onSnapshot(function (querySnapshot) {
      divWall.querySelector("#wallContentDiv").innerHTML = "";
      querySnapshot.forEach(function (doc) {
        let heart = "";
        if (doc.data().likes.includes(uid)) {
          heart = `<img src= "img/fullHeart.svg" class="likeBtn" alt="fullkokoro"></img>`;
        } else {
          heart = `<img src= "img/emptyHeart.svg" class="likeBtn" alt="emptykokoro"></img>`;
        }
        //contenedor de los posts
        let wall = divWall.querySelector("#wallContentDiv");
        let post = document.createElement("DIV");
        //contenido del header
        let header = document.createElement("HEADER");
        let userPic = document.createElement("IMG");
        //contenido de los posts
        let postImage = document.createElement("IMG");
        //contenido del footer de los posts
        let footer = document.createElement("FOOTER");
        let divContent = document.createElement("DIV");
        let divLike = document.createElement("DIV");
        let likeImage = document.createElement("P");
        likeImage.innerHTML = heart;
        let imageSpan = document.createElement("SPAN");
        let commentImage = document.createElement("IMG");
        let rowDiv = document.createElement("DIV");
        let postUserName = document.createElement("H2");
        let postDescription = document.createElement("P");
        let headerUserName = document.createElement("P");
        let divComments = document.createElement("DIV");
        let comments = document.createElement("P");
        let commentSpan = document.createElement("SPAN");
        let commentSpanDiv = document.createElement("DIV");
        //agregar atributos de clase e id para manupular estilo y eventos
        post.setAttribute("class", "post");
        headerUserName.setAttribute("class", "headerUserName");
        header.setAttribute("class", "postHeader");
        userPic.setAttribute("class", "postProfilePicture");
        postImage.setAttribute("class", "imgPost");
        footer.setAttribute("class", "postFooter");
        divContent.setAttribute("class", "footerRowDiv");
        divLike.setAttribute("class", "likeDiv");
        likeImage.setAttribute("class", "likeHeart");
        imageSpan.setAttribute("class", "countSpan");
        commentSpanDiv.setAttribute("class", "commentCount")
        commentImage.setAttribute("class", "commentBtn");
        commentImage.setAttribute("id", "commentBtn");
        commentImage.setAttribute("src", "img/commentBtn.svg");
        commentSpan.setAttribute("class", "commentCountSpan");
        postUserName.setAttribute("class", "postUserName");
        postDescription.setAttribute("class", "postComment");
        comments.setAttribute("class", "viewComments");
        comments.setAttribute("id", "viewComments");
        //orden de los contenedores 
        wall.appendChild(post);
        post.appendChild(header);
        post.appendChild(postImage);
        post.appendChild(footer);
        footer.appendChild(divContent);
        divLike.appendChild(likeImage);
        divLike.appendChild(imageSpan);
        commentSpanDiv.appendChild(commentSpan)
        divContent.appendChild(divLike);
        divContent.appendChild(commentImage);
        divContent.appendChild(commentSpanDiv);
        footer.appendChild(rowDiv);
        rowDiv.appendChild(postUserName);
        rowDiv.appendChild(postDescription);
        footer.appendChild(divComments);
        divComments.appendChild(comments);
        userPic.src = doc.data().userPhotoURL;
        headerUserName.innerHTML = doc.data().userName;
        header.appendChild(userPic);
        header.appendChild(headerUserName);
        postImage.src = doc.data().postImage;
        postUserName.innerHTML = doc.data().userName;
        postDescription.innerHTML = doc.data().message;
        comments.innerHTML = "Ver comentarios";
        imageSpan.innerHTML = doc.data().likes.length;
        commentSpan.innerHTML = doc.data().comments.length;
        //función para mostrar likes al usuario (a partir de 1 se muestran los números)
        if (doc.data().likes.length <= 0) {
          imageSpan.style.display = "none";
        } else {
          imageSpan.style.display = "block";
        }
   
        //función para mostrar la cantidad de comentarios al usuario (a partir de 1 se muestran los números)
        if (doc.data().comments.length <= 0) {
          commentSpan.style.display = "none";
        } else {
          commentSpan.style.display = "block";
        }

        //función para eliminar post del usuario activo
        if (doc.data().userID === uid) {
          let deletePost = document.createElement("IMG");
          deletePost.setAttribute("src", "img/deleteBtn.svg");
          deletePost.setAttribute("class", "delete-post");
          header.appendChild(deletePost);
          deletePost.onclick = function () {
            var r = confirm("¿Confirmas que deseas borrar el post?");
            if (r == true) {
              let docID = doc.id;
              firestore
                .collection("posts")
                .doc(docID)
                .delete()
                .then(() => {})
                .catch((error) => {
                  console.error("Error removing document: ", error);
                });
            }
          };
        
        //función para editar los post del usuario activo
          let editPost = document.createElement("IMG");
          editPost.setAttribute("class", "postMenu");
          editPost.setAttribute("id", "postMenu");
          editPost.setAttribute("src", "img/editBtn.svg");
          divContent.appendChild(editPost);

          editPost.onclick = function () {
            let docID = doc.id;
            let message = doc.data().message;
            let postImage = doc.data().postImage;
            redirection(docID, message, postImage);
          };
        }

        //función para redireccionar a comentarios
        commentImage.onclick = function () {
          let docID = doc.id;
          const root = document.getElementById("root");
          root.innerHTML = "";
          root.appendChild(comment(docID));
        };
        //función para redireccionar a comentarios
        comments.onclick = function () {
          let docID = doc.id;
          const root = document.getElementById("root");
          root.innerHTML = "";
          root.appendChild(comment(docID));
        };

        //función para dar me gusta (de los likes)
        likeImage.onclick = function () {
          let docID = doc.id;
          likeUpdate(docID, likeImage);
        };
      });
    });

  //Función de los likes  
  const likeUpdate = (docID) => {
    firestore
      .collection("posts")
      .doc(docID)
      .get()
      .then((doc) => {
        let data = doc.data();
        if (data.likes.includes(uid) === true) {
          for (let i = 0; i < data.likes.length; i++) {
            if (data.likes[i] === uid) {
              data.likes.splice(i, 1);
              firestore.collection("posts").doc(docID).update({
                likes: data.likes,
              });
            }
          }
        } else {
          data.likes.push(uid);
          firestore.collection("posts").doc(docID).update({
            likes: data.likes,
          });
        }
      });
  };
  //Función para ir al mapa (evento al icono)
  let viewMap = divWall.querySelector("#viewMap");
  viewMap.addEventListener("click", () => {
    location.assign("#/map");
  });

  //Función para ir al perfil (evento al texto)
  let showProfileBtn = divWall.querySelector("#showProfileBtn");
  showProfileBtn.addEventListener("click", () => {
    location.assign("#/profile");
  });

  //Función para cerrar sesión y volver al login (evento al texto)
  const logoutButton = divWall.querySelector("#logoutBtn");
  logoutButton.addEventListener("click", () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        location.assign("#");
      });
  });
  
  //Función que dirije a crear un nuevo post (evento al icono)
  newPostBtn.addEventListener("click", () => {
    location.assign("#/newPost");
  });

  //Función para enviar a editar post
  const redirection = (docID, message, postImage) => {
    const root = document.getElementById("root");
    root.innerHTML = "";
    root.appendChild(editPost(docID, message, postImage));
  };

  return divWall;
};
