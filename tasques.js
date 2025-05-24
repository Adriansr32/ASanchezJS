let avui = new Date().toLocaleDateString("es-ES");
// busquem el id dia i hi posem la data
document.getElementById("dia").innerHTML = avui;
// Demanen identificació d'usuari i password
let user = prompt('Introdueix el teu usuari: ', 'user');
let password = prompt('Introdueix la teva contrasenya: ', 'password');
// si l'usuari no és correcte missatge d'error
if (user == "admin" && password == "1234") {
    alert('Has iniciat sessió com a admin');
} else if (user == "alum" && password == "pepe") {
    alert('Has iniciat sessió com a alum');
} else {
    alert('Error Password');
}
// si l'usuari és correcte mirem quin usuari és
// si és el admin mostrem les seves tasques al id de tasques
// si és el alum mostrem les seves tasques al id de tasques
if (user == "admin") {
    document.getElementById("tasques").innerHTML =
        `<p>Fer un pdf</p> <p>Buscar bugs</p> <p>Anar al cine</p>`
} else if (user == "alum") {
    document.getElementById("tasques").innerHTML =
        `<p>Fer deures</p> <p>Menjar una burguer</p> <p>Escoltar musica horrible a tot volum</p>`
}
