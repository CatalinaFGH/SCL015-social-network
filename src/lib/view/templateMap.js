export const map = () => {
    const divMap = document.createElement("DIV")
    const viewMap = `
    <!-- Header fijo -->
      <div class="newPostTitle" id="contentMenu">
      <img src="img/backBtn.svg" alt="volver" id="backButton" class="backBtn">Mapa de Tiendas
      </div>

      <!-- contenido del nuevo post -->
      <main id="newPostContentDiv" class="newPostDiv">
      <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d214127.39450499424!2d-71.38407680568018!3d-33.01061535893048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1stiendas%20de%20maquillaje!5e0!3m2!1ses-419!2scl!4v1614472034279!5m2!1ses-419!2scl" width="350px" height="200px" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
      
      </main>
      
  <footer class="fixedFooter">
  </footer>
    `
    divMap.innerHTML = viewMap
    const backToWall = divMap.querySelector("#backButton");
    backToWall.addEventListener("click", () => {
        location.assign("#/wall")
    })
    return divMap;
}