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
var task = "task";
var i = 0;
function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}

function addTask() {
  
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const listItem = document.createElement("li");
    listItem.textContent = taskText;
    taskList.appendChild(listItem);
    taskInput.value = "";

    const doneBtn = document.createElement("i");
 
    doneBtn.setAttribute("class", "fa-solid fa-square-check");
    doneBtn.setAttribute('height', '25px');
    doneBtn.setAttribute('width', '25px');
    doneBtn.setAttribute('margin-left', '20px');
 
    listItem.appendChild(doneBtn);
 
    doneBtn.addEventListener("click", () => {
        if(listItem.id == ""){
            listItem.id = "checked"
        }
        else(
            listItem.id = ""
            )});
       
 
    const editBtn = document.createElement("i");
 
    editBtn.setAttribute("class", "fa-solid fa-pen-to-square");
    editBtn.setAttribute('height', '25px');
    editBtn.setAttribute('width', '25px');
 
    listItem.appendChild(editBtn);
 
    editBtn.addEventListener("click", () => {
        taskInput.value = listItem.textContent
        listItem.remove()
    });
 
    const deleteBtn = document.createElement("i");
 
    deleteBtn.setAttribute("class", "fa-solid fa-trash");
    deleteBtn.setAttribute('height', '25px');
    deleteBtn.setAttribute('width', '25px');
 
    listItem.appendChild(deleteBtn);
 
    deleteBtn.addEventListener("click", () => {
 
        listItem.remove();
 
    });
    
  localStorage.setItem(task.concat(i), taskText);
  i++;
  
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

const removeItem = function(item){
  console.log(item);
  const removeIndex = (todoItems.indexOf(item));
  console.log(removeIndex);
  todoItems.splice(removeIndex, 1);
}

function register(){
  const nomUtilisateur = document.getElementById("nomUtilisateur").value;
  const mdp = document.getElementById("motPasse").value;
  const mdpRepete = document.getElementById("motPasseRepete").value;
 
  if(mdp === mdpRepete){
    localStorage.setItem("nomUtilisateur", nomUtilisateur);
    localStorage.setItem("mdp", mdp);
  }
}

function login(event){
  event.preventDefault();
  const nomUtilisateurConnexion = document.getElementById("nomUtilisateurConnexion").value;
  const motPasseConnexion = document.getElementById("motPasseConnexion").value;
 
  const nomUtilisateurStorage = localStorage.getItem("nomUtilisateur");
  const motPasseStorage = localStorage.getItem("mdp");
 
  if(nomUtilisateurStorage === nomUtilisateurConnexion && motPasseStorage === motPasseConnexion){
      window.location.replace('/tasklist.html');
  }
}
 


