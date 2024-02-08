function saveLocal() {
    let nom = document.getElementById("name").value;
    let password = document.getElementById("password").value;
    localStorage.setItem('nom', nom);
    localStorage.setItem('password', password);
}

function saveSession() {
    let nom = document.getElementById("name").value;
    let password = document.getElementById("password").value;
    sessionStorage.setItem('nom', nom);
    sessionStorage.setItem('password', password);
}

function restaurer() {
    const nom = localStorage.getItem('nom');
    console.log('Nom: ', nom);
    const password = localStorage.getItem('password');
    console.log('Password: ', password);
}
const taskInput = document.getElementById('taksInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener("click", addTask);
function ajoutTache() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const listItem = document.createElement('li');
        listItem.textContent = taskText;
        taskList.appendChild(listItem)
        taskInput.value = "";
        //Ajout d'un bouton de suppression
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Supprimer"
        
        listItem.appendChild(deleteBtn);

        deleteBtn.addEventListener("click", () => {
            listItem.remove();
        });
    } else {
        alert("Veuillez entrer une tâche valide.")
    }
 
}
