function saveLocal() {
  let nom = document.getElementById("name").value;
  let password = document.getElementById("password").value;
  localStorage.setItem("nom", nom);
  localStorage.setItem("password", password);
}

function saveSession() {
  let nom = document.getElementById("name").value;
  let password = document.getElementById("password").value;
  sessionStorage.setItem("nom", nom);
  sessionStorage.setItem("password", password);
}

function restaurer() {
  const nom = localStorage.getItem("nom");
  console.log("Nom: ", nom);
  const password = localStorage.getItem("password");
  console.log("Password: ", password);
}
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const StorageSupression = document.getElementById("StorageSupression")

var task = "task";
var i = 0;

function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}
  /* Fonction d'ajout de tâches */
function addTask() {

  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const listItem = document.createElement("li");
    listItem.textContent = taskText;
    taskList.appendChild(listItem);
    taskInput.value = "";
  /* Ajout du bouton qui détermine que la tâche est fini */
    const butFini = document.createElement("i");
 
    butFini.setAttribute("class", "fa-solid fa-square-check");
    butFini.setAttribute('height', '25px');
    butFini.setAttribute('width', '25px');
 
    listItem.appendChild(butFini);
 /* Donne l'id checked au bouton qui sont considerer comme finit */
 butFini.addEventListener("click", () => {
        if(listItem.id == ""){
            listItem.id = "checked"
        }
        else(
            listItem.id = ""
            )});
       
   /* Ajout du bouton qui permet de modifier la tache lorsque clicker dessus */
    const butModif = document.createElement("i");
 
    butModif.setAttribute("class", "fa-solid fa-pen-to-square");
    butModif.setAttribute('height', '25px');
    butModif.setAttribute('width', '25px');
 
    listItem.appendChild(butModif);
 
    butModif.addEventListener("click", () => {
        taskInput.value = listItem.textContent
        listItem.remove()
    });
  /* Ajout du bouton qui supprime la tache lorsque clicker dessus */
    const butSupprime = document.createElement("i");
 
    butSupprime.setAttribute("class", "fa-solid fa-trash");
    butSupprime.setAttribute('height', '25px');
    butSupprime.setAttribute('width', '25px');
 
    listItem.appendChild(butSupprime);
 
    butSupprime.addEventListener("click", () => {
 
        listItem.remove();
 
    });
    /* Bouton qui supprime tout le local storage lorsqu'il est appuyé dessus */
    localStorage.setItem(task.concat(i), (taskText), i++)
    StorageSupression.addEventListener("click", () => {
        localStorage.clear()
    })
  }
}
addTaskBtn.addEventListener("click", addTask);
    const getList = function(todoItems){
    itemList.innerHTML = '';

      todoItems.forEach(function(item){
          itemList.insertAdjacentHTML('beforeend', `<div class="item my-3"><h5 class="item-name text-capitalize">${item}</h5><div class="item-icons"><a href="#" class="complete-item mx-2 item-icon"><i class="far fa-check-circle"></i></a><a href="#" class="edit-item mx-2 item-icon"><i class="far fa-edit"></i></a><a href="#" class="delete-item item-icon"><i class="far fa-times-circle"></i></a></div></div>` );

          handleItem(item);
      });
}

function Tasklist() {
  return (

    <><div id="divParent">
      <div class="background">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <button id="butInscription" onclick="document.getElementById('id01').style.display='block'" style="width:auto;">S'inscrire</button>

      <div id="id01" class="modal">
        <span onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal">&times;</span>
        <form class="modal-content" action="">
          <div class="container">
            <h1>S'inscrire</h1>
            <p>Veuillez remplir ce formulaire pour créer un compte.</p>
            <hr></hr>
            <label for="nomUtilisateur"><b>Nom d'utilisateur</b></label>
            <input id="nomUtilisateur" type="text" placeholder="Entrer votre pseudonyme" name="nomUtilisateur" required></input>

            <label for="motPasse"><b>Mot de passe</b></label>
            <input id="motPasse" type="password" placeholder="Entrer le mot de passe" name="motPasse" required></input>

            <label for="motPasseRepete"><b>Répéter le mot de passe</b></label>
            <input id="motPasseRepete" type="password" placeholder="Répéter le mot de passe" name="motPasseRepete" required></input>

            <label>
              <input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px">Se souvenir de moi</input>
            </label>

            <p>En créant un compte, vous acceptez nos <a href="#" style="color:dodgerblue">Conditions et confidentialité</a>.</p>

            <div class="clearfix">
              <button type="button" onclick="document.getElementById('id01').style.display='none'" class="cancelbtn">Cancel</button>
              <button type="submit" class="signupbtn" onclick={inscription()}>S'inscrire</button>
            </div>
          </div>
        </form>
      </div>

      <button id="butConnexion" onclick="document.getElementById('id02').style.display='block'" style="width:auto;">Se connecter</button>

      <div id="id02" class="modal">

        <form class="modal-content animate" action="" method="post">
          <div class="imgcontainer">
            <span onclick="document.getElementById('id02').style.display='none'" class="close" title="Close Modal">&times;</span>
            <img src="trudeau-avatar.png" alt="Avatar" class="avatar"></img>
          </div>

          <div class="container">
            <label for="nomUtilisateurConnexion"><b>Nom d'utilisateur</b></label>
            <input id="nomUtilisateurConnexion" type="text" placeholder="Saisissez votre nom d'utilisateur" name="nomUtilisateurConnexion" required></input>
            <label for="motPasseConnexion"><b>Mot de passe</b></label>
            <input id="motPasseConnexion" type="password" placeholder="Entrer le mot de passe" name="motPasseConnexion" required></input>
          </div>

            <button id="sub" onclick={connexion()}>Se connecter</button>

          <label>
            <input type="checkbox" checked="checked" name="remember">Souviens-toi de moi</input>
          </label>

          <div class="container" id="connexionform">
            <button type="button" onclick="document.getElementById('id02').style.display='none'" class="cancelbtn">Annuler</button>
            <span class="psw">Mot de passe<a href="https://www.youtube.com/watch?v=TnlPtaPxXfc"> oublié?</a></span>
          </div>
        </form>

      </div>
    </div><script src="javascript/fonction.js"></script><link rel="stylesheet" href="accueil.css" /></>
    );
  } export default Tasklist;


/* Fonction d'inscritpion, prend le pseudo et le mdp et le store dans le storage local*/
function inscription(){
  const nomUtilisateur = document.getElementById("nomUtilisateur").value;
  const mdp = document.getElementById("motPasse").value;
  const mdpRepete = document.getElementById("motPasseRepete").value;
 
  if(mdp === mdpRepete){
    localStorage.setItem("nomUtilisateur", nomUtilisateur);
    localStorage.setItem("mdp", mdp);
  }
}

/*Fonction de connexion*/
function connexion(event){
  event.preventDefault();
  const nomUtilisateurConnexion = document.getElementById("nomUtilisateurConnexion").value;
  const motPasseConnexion = document.getElementById("motPasseConnexion").value;
 
  const nomUtilisateurStorage = localStorage.getItem("nomUtilisateur");
  const motPasseStorage = localStorage.getItem("mdp");
 /* Re-emmène l'utlisateur vers la page tasklist.html si le mdp et le pseudo est pareil que lui enregistrer dans le storage*/
  if(nomUtilisateurStorage === nomUtilisateurConnexion && motPasseStorage === motPasseConnexion){
      window.location.href='/tasklist.html';
  }else {
    /* Si le pseudonyme ou le mdp n'est pas bon, ça affiche un message d'erreur et le message part après 2000 ms (Pour éviter de s'accumuler un sous l'autre) */
    const wrongCredentials = document.createElement("p");
    wrongCredentials.textContent = "Mauvaise informations de connexion, veuillez réessayer.";
    document.getElementById("connexionform").appendChild(wrongCredentials);
    setInterval(() => {
      wrongCredentials.remove();
    }, 2000);
  }
}
 


