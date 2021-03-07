export const map = () => {
  const divMap = document.createElement("DIV");
  divMap.setAttribute("CLASS", "createProfile");
  const viewMap = `
  <div class="desktopMap">
  <!-- Creación del Header fijo -->
       <header class="headerMap" id="headerMap">
          <img src="img/backBtn.svg" alt="volver" id="backButtonMap" class="backBtn">
          <h2 class="mapTitle">Mapa de Tiendas</h2>
       </header>

      <!-- El mapa -->
      <main id="newPostContentDiv" class="mapDiv">
         <iframe class="theMap" src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1022450.090880412!2d-71.64366674941526!3d-33.70679055735288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1stiendas%20maquillaje%20chile!5e0!3m2!1ses-419!2scl!4v1614601336446!5m2!1ses-419!2scl" width="350px" height="500px" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
      </main>
      
     <!-- Creación del footer -->
      <footer class="fixedFooter"></footer>
      <div>`;

  divMap.innerHTML = viewMap;

  // Función para volver al muro principal
  const backToWall = divMap.querySelector("#backButtonMap");
  backToWall.addEventListener("click", () => {
    location.assign("#/wall");
  });

  return divMap;
};
