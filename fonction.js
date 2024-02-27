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
    //Ajout d'un bouton de suppression
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Supprimer";

    listItem.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", () => {
      listItem.remove();
    });
    //Ajout d'un bouton de tâche finit
    const validerBtn = document.createElement("button");
    validerBtn.textContent = "Tâche fini";
    listItem.appendChild(validerBtn);
    //Ajout de l'evenement du bouton finit
    validerBtn.addEventListener("click", () => {
      listItem.setAttribute("style", "text-decoration-line: line-through;")
    });
    // Création du boutton de modification
    const modifyBtn = document.createElement("button");
    modifyBtn.textContent = "Modifier la tâche";
    listItem.appendChild(modifyBtn);
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
