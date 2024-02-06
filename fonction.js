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
    console.log('Nom: ', nom)
    const password = localStorage.getItem('password');
    console.log('Password: ', password)
}