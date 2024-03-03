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
 


