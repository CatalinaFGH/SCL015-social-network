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
  
      <div class="newPostContent">
      <header class="newPost">
      Adjunta una foto
      <img src="img/adjuntar.svg" alt="adjuntarArchivo" id="selectFile" class="selectFile">
      </header>
      <div class="postImgDiv">
      <img src="img/adjuntarImg.svg" class="imgNewPost">
      </div>
      </div>
  
      </main>
      
  <footer class="fixedFooter">
  </footer>
  `;
  divNewPost.innerHTML=viewNewPost;


  const backToWall = divNewPost.querySelector("#backButton");
  backToWall.addEventListener("click", () => {
      location.assign("#/wall")
  })

  return divNewPost;
}