export const wall = () => {
  const divWall = document.createElement("div"); 
  divWall.setAttribute("CLASS","templateWall");
    const viewWall =`

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
          <li id="homeUserMail"></li>
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

    <div class="post">
    <header class="postHeader"> <img src="img/profilePicture.svg" class="postProfilePicture"> Makeup_Lover </header>
    <img src="img/imagenPruebaPost.png" class="imgPost">
    <footer class="postFooter">
    <div><img src="img/likeBtn.svg" class="likeBtn"><img src="img/commentBtn.svg" class="commentBtn"></div>
    <div class="rowDiv"><h2 class="postUserName">Makeup_lover</h2><p class="postComment">Esta es mi sombra favorita</p></div>
    <div><p class="viewComments">Ver 5 comentarios</p></div></footer>
    </div>

    </main>
    
<footer class="fixedFooter">
  <img src="img/MakeupStoreMap.svg" alt="Mapa">
  <img src="img/addPost.svg" alt="Nuevo Post" class="newPostBtn">
  <img src="img/Search.svg" alt="Buscar">
</footer>
`;
divWall.innerHTML=viewWall;

const firestore = firebase.firestore();
let currentUserData = firebase.auth().currentUser;
const uid = currentUserData.uid;

firestore.collection('users').doc(uid).get().then(function(doc){
  if (doc.exists) {
      divWall.querySelector("#homeUserName").innerHTML = doc.data().name;
      divWall.querySelector("#homeUserMail").innerHTML = currentUserData.email;  
      divWall.querySelector("#profileMiniPic").src = doc.data().photoURL;
  } else {
      console.log("No such document!");
  }
}).catch(function(error) {
  console.log("Error getting document:", error);
});

let showProfileBtn = divWall.querySelector("#showProfileBtn");

showProfileBtn.addEventListener("click", ()=> {
location.assign("#/profile");
})

const logoutButton = divWall.querySelector("#logoutBtn");
    logoutButton.addEventListener("click", () =>{
    firebase.auth().signOut().then(() => {
    location.assign("#");
  })
})

return divWall;
};