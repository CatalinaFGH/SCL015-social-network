export const wall = () => {
  const divWall = document.createElement("div"); 
  divWall.setAttribute("CLASS","templateWall");
    const viewWall =`
<header class="header" id="header">
    <img src="img/lateralMenu.svg" alt="menu" class="lateralMenu">
    <img src="img/logoHeader.png" alt="Logo" class="logoHeader">
</header>
    <main id="wallContentDiv" class="wallContent">

    <div class="post">
    <header class="postHeader"></header>
    <img src="img/imagenPruebaPost.png" class="imgPost">
    <footer class="postFooter"></footer>
    </div>

    </main>
<footer class="fixedFooter">
  <img src="img/MakeupStoreMap.svg" alt="Mapa">
  <img src="img/addPost.svg" alt="Nuevo Post" class="newPostBtn">
  <img src="img/Search.svg" alt="Buscar">
</footer>
`;
divWall.innerHTML=viewWall;

return divWall;
};