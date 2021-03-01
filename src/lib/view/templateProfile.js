export const profile = () => {
 const divProfile = document.createElement("DIV");
 const viewProfile = `
 <header class="headerProfile" id="header">
 <div class= "profileTitle"><h3>Crear Perfil</h3></div>
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
 <button class="profileButton"><a href="#/createProfile" class="link">EDITAR</a></button>  <button class="profileButton" id="profileButton2"><a href="#/wall" class="link">MURO</a></button>
 </div>
  <footer class="fixedFooter">
  </footer>
 `
 divProfile.innerHTML = viewProfile;

 const firestore = firebase.firestore();
 let currentUserData = firebase.auth().currentUser;
 const uid = currentUserData.uid;
 
 
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
 

 return divProfile;
}