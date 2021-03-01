export const map = () => {
    const divMap = document.createElement("DIV")
    const viewMap = `
    <!-- Header fijo -->
      <div class="newPostTitle" id="contentMenu">
      <img src="img/backBtn.svg" alt="volver" id="backButton" class="backBtn">Mapa de Tiendas
      </div>

      <!-- contenido del nuevo post -->
      <main id="newPostContentDiv" class="newPostDiv">
      <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1022450.090880412!2d-71.64366674941526!3d-33.70679055735288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1stiendas%20maquillaje%20chile!5e0!3m2!1ses-419!2scl!4v1614601336446!5m2!1ses-419!2scl" width="350px" height="200px" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
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