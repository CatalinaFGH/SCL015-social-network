export const newPost = () => {
    const divNewPost = document.createElement("div"); 
    divNewPost.setAttribute("CLASS","templateNewPost");
      const viewNewPost =`
  
      <!-- Header fijo -->
      <div class="newPostTitle" id="contentMenu">
      <img src="img/backBtn.svg" alt="volver" id="backButton" class="backBtn">Nueva Publicación
      </div>

      <!-- contenido del nuevo post -->
      <main id="newPostContentDiv" class="newPostDiv">

      <div id="newPostUserInfo" class="newPostUserInfo">
      <img src="" alt="foto de perfil" id="newPostProfilePic" class="newPostProfileImg">
      <p class="newPostUserName" id="newPostUserName"></p>
      </div>
  
      <div class="newPostContent">

          <header class="newPost">
            Adjunta una foto
            <img src="img/adjuntar.svg" alt="adjuntarArchivo" id="selectFile" class="selectFile">
            <input type="file" id="newPostImgFile" class="inputFileNewPost" value="">
          </header>

         
          
          <div class="postImgDiv">
            <img src="img/adjuntarImg.svg" class="imgNewPost" id="imgToPost">
          </div>

          <textarea id="newPostText" name="newPostText" class="newPostTextInput" rows="4" cols="50" placeholder="Escribe aquí tu mensaje.."></textarea>
          
          <input type="submit" value="Publicar" class="postButton" id="publishBtn">
      </div>
  
      </main>
      
  <footer class="fixedFooter">
  </footer>
  `;
  divNewPost.innerHTML=viewNewPost;

const firestore = firebase.firestore();
let currentUserData = firebase.auth().currentUser;
const uid = currentUserData.uid;
const storage = firebase.storage();
const publishBtn = divNewPost.querySelector("#publishBtn");



  const backToWall = divNewPost.querySelector("#backButton");
  backToWall.addEventListener("click", () => {
      location.assign("#/wall")
  })

  firestore.collection('users').doc(uid).get().then(function(doc){
    if (doc.exists) {
      divNewPost.querySelector("#newPostUserName").innerHTML = doc.data().name;
      divNewPost.querySelector("#newPostProfilePic").src = doc.data().photoURL;
    } else {
        console.log("No such document!");
    }
  }).catch(function(error) {
    console.log("Error getting document:", error);
  });
  

  let addPicNewPost = divNewPost.querySelector("#newPostImgFile");
  addPicNewPost.addEventListener("change", () => {
    let file = divNewPost.querySelector("#newPostImgFile").files[0];
    let filePath = `postImages/${file.name}${file.lastModified}`;
    uploadImg(file,filePath)});

    let uploadImg=(file,filePath)=> {
      let storageRef = firebase.storage().ref(filePath);
     storageRef.put(file).then(function(snapshot) {
      showImg(filePath);
    })}
    
    let showImg=(filePath)=>{ 
        let newImgURL= storage.ref(filePath);
        newImgURL.getDownloadURL().then((url) => {
        divNewPost.querySelector("#imgToPost").src = url;
        })}


        publishBtn.addEventListener("click", () => {
          let file = divNewPost.querySelector("#newPostImgFile").files[0];
          if (file == null){
            alert("No has seleccionado una imagen")
          }
          else { 
            let postMessage = divNewPost.querySelector("#newPostText").value;
            let file = divNewPost.querySelector("#newPostImgFile").files[0];
            let filePath = `postImages/${file.name}${file.lastModified}`;
            let newImgURL= storage.ref(filePath);
            newImgURL.getDownloadURL().then((url) => {
            firestore.collection('posts').doc().set({
              userName: currentUserData.displayName,
              date: Date.now(),
              userID: uid,
              postImage: url,
              message: postMessage,
              userPhotoURL: currentUserData.photoURL
              })})
              .then(()=>{
            location.assign("#/wall")
          })
          }
        })

  return divNewPost;
}