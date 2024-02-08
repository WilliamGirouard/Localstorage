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
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
var task = "task";
var i = 0;

addTaskBtn.addEventListener("click", addTask);

function addTask() {
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
        //Ajout d'un bouton de tâche finit
        const validerBtn = document.createElement('button')
        validerBtn.textContent = "Tâche fini"
        listItem.appendChild(validerBtn);
        //Ajout de l'evenement du bouton finit
        validerBtn.addEventListener("click", () => {
            const terminer = document.createElement('p');
            terminer.innerHTML = "Tâche terminer";
            terminer.style.color = "green";
            listItem.appendChild(terminer);
            
        });
        // Création du boutton de modification
        const modifyBtn = document.createElement('button');
        modifyBtn.textContent = "Modifier la tâche";
        listItem.appendChild(modifyBtn);
        //Ajout de l'evenement du bouton de modification
        modifyBtn.addEventListener("click", () => {
            const inputModification = document.createElement('input');
            inputModification.setAttribute("type", "text");
            listItem.appendChild(inputModification);
            //Ajout bouton de validation
            const validerModifBtn = document.createElement('button');
            validerModifBtn.textContent = "Valider votre modification";
            listItem.appendChild(validerModifBtn);
            //Ajout du bouton de validation des modifications
            validerModifBtn.addEventListener("click", () => {
                //Prendre la value de la modification
                const valueModif = inputModification.value;
                if (valueModif !== "") {
                    taskInput = valueModif;
                    inputModification.remove();
                } else {
                    alert("Veuillez entrer une modification valide.");
                }});
        });

    } else {
        alert("Veuillez entrer une tâche valide.");
    }
    localStorage.setItem(task.concat(i), taskText);
    i++;
 
}

