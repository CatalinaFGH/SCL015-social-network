export const profile = () => {
 const divProfile = document.createElement("DIV");
 divProfile.setAttribute("CLASS", "createProfile");
 const viewProfile =
       ` <div class="desktopMain">
       <header class="headerProfile" id="header">
           <div class= "profileTitle"><h3>Mi Perfil</h3></div>
        </header>
    
        <main class="newProfileContent">
          <img src="" alt="" class="newProfileImage" id="profilePic"><br>
             <div class="profileContentDiv">
                <h1 id="profileName" class="viewProfileName"></h1>
                    <p class="profileContent">
                        Instagram<br>
                        <span id="profileInstagram"></span><br><br>
                        Facebook<br>
                        <span id="profileFacebook"></span><br><br>
                        Intereses<br>
                        <span id="profileAboutMe"></span>
                    </p>
             </div>
        </main>
        
        <div class="btnsProfileContainer">
           <button class="profileButton" id="profileButton">EDITAR</button>
           <button class="profileButton" id="profileButton2">MURO</button>
        </div>

        <footer class="fixedFooter"></footer>
        </div>`;

 divProfile.innerHTML = viewProfile;

 //Variables globales a utilizar
 const firestore = firebase.firestore();
 let currentUserData = firebase.auth().currentUser;
 const uid = currentUserData.uid;
 
//  funcion para mostrar datos de perfil de usuario
 firestore.collection('users').doc(uid).get().then(function(doc){
     if (doc.exists) {
         divProfile.querySelector("#profileName").innerHTML = doc.data().name;
         divProfile.querySelector("#profileInstagram").innerHTML = doc.data().instagram;
         divProfile.querySelector("#profileFacebook").innerHTML = doc.data().facebook;
         divProfile.querySelector("#profileAboutMe").innerHTML = doc.data().aboutMe;
         divProfile.querySelector("#profilePic").src = doc.data().photoURL;
     } else {
         console.log("No such document!");
     }
 }).catch(function(error) {
     console.log("Error getting document:", error);
 });
 
 let editButton = divProfile.querySelector("#profileButton");
 editButton.addEventListener("click", () =>{
     location.assign("#/createProfile");
 });

 let wallButton = divProfile.querySelector("#profileButton2");
 wallButton.addEventListener("click", () =>{
     location.assign("#/wall");
 });

 return divProfile;
}