export const comment = () => {
    const divComment = document.createElement("DIV");
    divComment.setAttribute("CLASS","templateComment");
    const viewComment = `
    <!-- Header fijo -->
      <div class="newPostTitle" id="contentMenu">
      <img src="img/backBtn.svg" alt="volver" id="theBackButton" class="backBtn">Nuevo comentario
      </div>

      <!-- contenido del nuevo comentario -->
      <main id="newComment" class="comment">

      <div class="newComentContainer">
      <textarea id="newCommentText" class="newCommentTextInput" rows="4" cols="50" placeholder="Escribe aquí tu comentario.."></textarea>
          
      <input type="submit" value="Comentar" class="commentButton" id="commentButton">
      </div>

      </main>
      
  <footer class="fixedFooter">
  </footer>
    `

    divComment.innerHTML = viewComment
  
    const goWall = divComment.querySelector("#theBackButton");
    goWall.addEventListener("click", () => {
        location.assign("#/wall")
    })


    return divComment;
}