export const newProfile = () => {
    const divNewProfile = document.createElement("div");
    divNewProfile.setAttribute("CLASS","createProfile");
    const viewNewProfile = ` 
    <header class="headerProfile" id="header">
    <div class= "profileTitle"><h3>Crear Perfil</h3></div>
    </header>
   <main class="newProfileContent">
    <img src="" alt="" class="newProfileImage" id="profileImage"><br>
  
    <div class="custom-input-file">
    <input type="file" id="imgFile" class="input-file" value="">
    +
    </div>
  
    <div class="scroll-container">
  
    <div class="loginEmailInputContainer">
    <input type="text" id="instagram" class="loginEmailInput" required>
    <span class="loginEmailTextInput">Instagram</span><br><br></div>
  
    <div class="loginEmailInputContainer">
    <input type="text" id="facebook" class="loginEmailInput" required>
    <span class="loginEmailTextInput">Facebook</span><br><br></div>
  
    <div class="loginEmailInputContainer">
    <input type="text" id="aboutMe" class="loginEmailInput" required>
    <span class="loginEmailTextInput">Sobre mi</span><br><br>
    </div>
    </div>  
  
    <div class="newProfileBtn">
     <button id="newProfileBtn" class="profileButton">GUARDAR</button></div>
     <main>
  `
  
    divNewProfile.innerHTML = viewNewProfile;

    return divNewProfile
}