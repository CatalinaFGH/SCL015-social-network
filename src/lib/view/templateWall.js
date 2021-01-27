export const wall = () => {
  const divWall = document.createElement("div"); 
    const viewWall =`
<h1>Este es el Muro</h1>
<header class="header" id="header">
  <div>
    <img src="" alt="Perfil">
    <p></p>
  </div>
  <div>
    <img src="" alt="Logo">
  </div>
  <div>
    <img src="" alt="Cerrar Sesión">
  </div>
</header>
    <main id="wallContentDiv">
    </main>
<footer>
  <img src="" alt="home">
  <img src="" alt="Nuevo Post">
  <img src="" alt="Buscar">
  <img src="" alt="Mapa">
</footer>
`;
divWall.innerHTML=viewWall;

return divWall;
};