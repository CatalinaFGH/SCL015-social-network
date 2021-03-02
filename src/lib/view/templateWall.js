import { editPost } from "./templateEditPost.js";
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
      <div class="menuSecondSection">
        <ul>
          <div class="homeUserIconContainer">
          <img src="img/perfilIcon.svg" class="homeUserIcon">
          <li id="showProfileBtn">Perfil</li>
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
    <main id="wallContentDiv" class="wallContent">

    

    </main>
    
<footer class="fixedFooter">
  <img src="img/MakeupStoreMap.svg" alt="Mapa" id="viewMap">
  <img src="img/addPost.svg" alt="Nuevo Post" class="newPostBtn" id="newPostButton">
  <img src="img/Search.svg" alt="Buscar">
</footer>
`;
  divWall.innerHTML = viewWall;

  const firestore = firebase.firestore();
  let currentUserData = firebase.auth().currentUser;
  const uid = currentUserData.uid;
  const newPostBtn = divWall.querySelector("#newPostButton");
  
  // firestore.collection('posts').doc(docID).get().then((doc) => {
  //   let data = doc.data();
  //   if (data.likes.includes(uid)) {
  //     let heart = `<img src= "img/fullHeart.svg" class="likeBtn" alt="fullkokoro"></img>`;
  //   }
  //   else {
  //   }
  // })


  firestore.collection('users').doc(uid).get().then(function (doc) {
    if (doc.exists) {
      divWall.querySelector("#homeUserName").innerHTML = doc.data().name;
      divWall.querySelector("#homeUserMail").innerHTML = currentUserData.email;
      divWall.querySelector("#profileMiniPic").src = doc.data().photoURL;
    } else {
      console.log("No such document!");
    }
  }).catch(function (error) {
    console.log("Error getting document:", error);
  });


  firestore.collection("posts").orderBy("date", "desc")
    .onSnapshot(function (querySnapshot) {
      divWall.querySelector("#wallContentDiv").innerHTML = "";
      querySnapshot.forEach(function (doc) {
        let heart ="";
        if (doc.data().likes.includes(uid)) {
           heart = `<img src= "img/fullHeart.svg" class="likeBtn" alt="fullkokoro"></img>`;
        }
        else {
           heart = `<img src= "img/emptyHeart.svg" class="likeBtn" alt="emptykokoro"></img>`;
        }
        let wall = divWall.querySelector("#wallContentDiv");
        let post = document.createElement("DIV");
        let header = document.createElement("HEADER");
        let userPic = document.createElement("IMG");
        let deletePost = document.createElement("IMG");
        let postImage = document.createElement("IMG");
        let footer = document.createElement("FOOTER");
        let divContent = document.createElement("DIV");
        let likeImage = document.createElement("P");
        likeImage.innerHTML = heart;
        let imageSpan = document.createElement("SPAN");
        let commentImage = document.createElement("IMG");
        let editPost = document.createElement("IMG");
        let rowDiv = document.createElement("DIV");
        let postUserName = document.createElement("H2");
        let postDescription = document.createElement("P");
        let headerUserName = document.createElement("P");
        let divComments = document.createElement("DIV");
        let comments = document.createElement("P");
        post.setAttribute("class", "post");
        headerUserName.setAttribute("class", "headerUserName");
        header.setAttribute("class", "postHeader");
        userPic.setAttribute("class", "postProfilePicture");
        deletePost.setAttribute("src","img/deleteBtn.svg");
        deletePost.setAttribute("class","delete-post");
        postImage.setAttribute("class", "imgPost");
        footer.setAttribute("class", "postFooter");
        divContent.setAttribute("class", "rowDiv");
        likeImage.setAttribute("class", "rowDiv");
        imageSpan.setAttribute("class", "countSpan");
        imageSpan.setAttribute("id", "count");
        commentImage.setAttribute("class", "commentBtn");
        commentImage.setAttribute("id", "commentBtn");
        commentImage.setAttribute("src", "img/commentBtn.svg");
        editPost.setAttribute("class", "postMenu");
        editPost.setAttribute("id", "postMenu");
        editPost.setAttribute("src", "img/editBtn.svg");
        postUserName.setAttribute("class", "postUserName");
        postDescription.setAttribute("class", "postComment");
        comments.setAttribute("class", "viewComments");
        comments.setAttribute("id", "viewComments");
        wall.appendChild(post);
        post.appendChild(header);
        post.appendChild(postImage);
        post.appendChild(footer);
        footer.appendChild(divContent);
        divContent.appendChild(likeImage);
        divContent.appendChild(imageSpan);
        divContent.appendChild(commentImage);
        divContent.appendChild(editPost);
        footer.appendChild(rowDiv);
        rowDiv.appendChild(postUserName);
        rowDiv.appendChild(postDescription);
        footer.appendChild(divComments);
        divComments.appendChild(comments);
        userPic.src = doc.data().userPhotoURL;
        headerUserName.innerHTML = doc.data().userName;
        header.appendChild(userPic);
        header.appendChild(headerUserName);
        header.appendChild(deletePost);
        postImage.src = doc.data().postImage;
        postUserName.innerHTML = doc.data().userName;
        postDescription.innerHTML = doc.data().message;
        comments.innerHTML = "Ver comentarios";
        imageSpan.innerHTML = doc.data().likes.length;
        deletePost.onclick = function(){
          let docID = doc.id;
            firestore.collection('posts').doc(docID).delete().then(() => {
         }).catch((error) => {
             console.error("Error removing document: ", error);
         })
        }
        editPost.onclick = function () {
          let docID = doc.id;
          let message = doc.data().message
          let postImage = doc.data().postImage;
          console.log("editar");
          redireccionar(docID, message, postImage);

      };

      commentImage.onclick = function(){
        console.log("¡funciona!")
        location.assign("#/newComment");
      }
      
        likeImage.onclick = function () {
          let docID = doc.id;
          likeUpdate(docID, likeImage);
        }});
    });

  const likeUpdate = (docID) => {
    firestore.collection('posts').doc(docID).get().then((doc) => {
      let data = doc.data();
      if (data.likes.includes(uid) === true) {
        for (let i = 0; i < data.likes.length; i++) { 
        if(data.likes[i] === uid) {
          data.likes.splice(i, 1);
          console.log("dislike");
          firestore.collection('posts').doc(docID).update({
            likes: data.likes,
          })}}
      }
      else {
        console.log("like");
        data.likes.push(uid);
        firestore.collection('posts').doc(docID).update({
          likes: data.likes,
        })
      };
    }) }


  let viewMap = divWall.querySelector("#viewMap")
  viewMap.addEventListener("click", () => {
    location.assign("#/map");
  })

  let showProfileBtn = divWall.querySelector("#showProfileBtn");

  showProfileBtn.addEventListener("click", () => {
    location.assign("#/profile");
  })

  const logoutButton = divWall.querySelector("#logoutBtn");
  logoutButton.addEventListener("click", () => {
    firebase.auth().signOut().then(() => {
      location.assign("#");
    })
  })

  newPostBtn.addEventListener("click", () => {
    location.assign("#/newPost");
  })

  const redireccionar = (docID, message, postImage) => {
    const root = document.getElementById("root");
    root.innerHTML = "";
    root.appendChild(editPost(docID, message, postImage));
  }

  return divWall;
};