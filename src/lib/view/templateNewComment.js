import { wall } from "./templateWall.js";
export const comment = (docID) => {
  const divComment = document.createElement("DIV");
  divComment.setAttribute("CLASS", "templateComment");
  const viewComment = `<!-- Header fijo -->
             <div class="newPostTitle" id="contentMenu">
                <img src="img/backBtn.svg" alt="volver" id="theBackButton" class="backBtn">Comentarios
             </div>

           <!-- contenido del nuevo comentario y los comentarios anteriores -->
               <main id="newComment" class="comment">

                   <div id="commentsListContent" class="commentsListContent"></div>

                      <div class="newComentContainer">
                          <textarea id="newCommentText" class="newCommentTextInput" rows="4" cols="50" placeholder="Escribe aquí tu comentario.."></textarea>
          
                          <input type="submit" value="Comentar" class="commentButton" id="commentButton">
                      </div>

                </main>
      
            <footer class="fixedFooter"></footer>`;

  divComment.innerHTML = viewComment;

  //Variables globales a utilizar
  const firestore = firebase.firestore();
  const currentUserData = firebase.auth().currentUser;
  const uid = currentUserData.uid;
  const root = document.getElementById("root");
  const viewCommentContent = divComment.querySelector("#commentsListContent");
  let newMessage = divComment.querySelector("#newCommentText");
  const goWall = divComment.querySelector("#theBackButton");
  const sendMessage = divComment.querySelector("#commentButton");

  //Función para volver al muro principal
  goWall.addEventListener("click", () => {
    root.innerHTML = "";
    root.appendChild(wall());
    location.assign("#/wall");
  });

//Función para imprimir lista de comentarios de post
  firestore
    .collection("posts")
    .doc(docID)
    .collection("comments")
    .orderBy("date")
    .onSnapshot(function (querySnapshot) {
      viewCommentContent.innerHTML = "";
      querySnapshot.forEach(function (doc) {
        viewCommentContent.innerHTML += 
        `<div class="mainCommentsBox">
            <img src="${doc.data().profilePictureURL}" alt="profilePic" class="postProfilePicture">
            <div class="input-content">
                <div class="input-nameHour">
                    <span class="input-message-username" id="inputMessage">${doc.data().profileName}</span>
                    <span id="inputTime">${doc.data().time}</span>
                </div>
                <div class="message-box" id="messageBox">
                    <span class="input-message" id="inputMessageText">${doc.data().message}</span>
                </div>
            </div>
        </div>`;
        viewCommentContent.scrollTop = viewCommentContent.scrollHeight;
      });

    //funcion para añadir comentario a post
      sendMessage.addEventListener("click", () => {
        if (newMessage.value !== "") {
          let d = new Date();
          let n = d.getHours() + ":" + d.getMinutes();

          firestore.collection("posts").doc(docID).collection("comments").add({
            profilePictureURL: currentUserData.photoURL,
            profileName: currentUserData.displayName,
            message: newMessage.value,
            userID: uid,
            date: Date.now(),
            time: n,
          });
          newMessage.value = "";
        }

        firestore
        .collection("posts")
        .doc(docID)
        .get()
        .then((doc) => {
          let data = doc.data();
            data.comments.push(uid);
            firestore.collection("posts").doc(docID).update({
              comments: data.comments,
            });
          
        });
    
      });
      });
      


  return divComment;
};