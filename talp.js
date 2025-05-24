const forat1 = document.getElementsByClassName("forat")[0];
const forat2 = document.getElementsByClassName("forat")[1];
const forat3 = document.getElementsByClassName("forat")[2];
const forat4 = document.getElementsByClassName("forat")[3];
const forat5 = document.getElementsByClassName("forat")[4];
const forat6 = document.getElementsByClassName("forat")[5];

const puntuacioText = document.getElementById("puntuacio");
const soCop = document.getElementById("soCop");
const cop = document.getElementById("cop");

let puntuacio = 0;
let posicioTalp = -1;

function amagarTalp() {
    if (posicioTalp !== -1) {
        if (posicioTalp === 0) forat1.getElementsByTagName("img")[0].src = "img/topoNo.png";
        if (posicioTalp === 1) forat2.getElementsByTagName("img")[0].src = "img/topoNo.png";
        if (posicioTalp === 2) forat3.getElementsByTagName("img")[0].src = "img/topoNo.png";
        if (posicioTalp === 3) forat4.getElementsByTagName("img")[0].src = "img/topoNo.png";
        if (posicioTalp === 4) forat5.getElementsByTagName("img")[0].src = "img/topoNo.png";
        if (posicioTalp === 5) forat6.getElementsByTagName("img")[0].src = "img/topoNo.png";
    }
}

function mostrarTalp() {
    posicioTalp = Math.floor(Math.random() * 6);
    if (posicioTalp === 0) forat1.getElementsByTagName("img")[0].src = "img/topoSi.png";
    if (posicioTalp === 1) forat2.getElementsByTagName("img")[0].src = "img/topoSi.png";
    if (posicioTalp === 2) forat3.getElementsByTagName("img")[0].src = "img/topoSi.png";
    if (posicioTalp === 3) forat4.getElementsByTagName("img")[0].src = "img/topoSi.png";
    if (posicioTalp === 4) forat5.getElementsByTagName("img")[0].src = "img/topoSi.png";
    if (posicioTalp === 5) forat6.getElementsByTagName("img")[0].src = "img/topoSi.png";
}

setInterval(() => {
    amagarTalp();
    mostrarTalp();
}, 1000);

function gestionarClic(foratId, event) {
    let currentHole;
    if (foratId === 0) currentHole = forat1.getElementsByTagName("img")[0];
    if (foratId === 1) currentHole = forat2.getElementsByTagName("img")[0];
    if (foratId === 2) currentHole = forat3.getElementsByTagName("img")[0];
    if (foratId === 3) currentHole = forat4.getElementsByTagName("img")[0];
    if (foratId === 4) currentHole = forat5.getElementsByTagName("img")[0];
    if (foratId === 5) currentHole = forat6.getElementsByTagName("img")[0];
    
    currentHole.src = "img/topoPam.png";
    soCop.currentTime = 0;
    soCop.play();
    
    setTimeout(() => {  
        currentHole.src = "img/topoNo.png";
    }, 300);

    if (foratId === posicioTalp) {
        puntuacio++;
        puntuacioText.textContent = puntuacio;
    }
}

forat1.onclick = (e) => gestionarClic(0, e);
forat2.onclick = (e) => gestionarClic(1, e);
forat3.onclick = (e) => gestionarClic(2, e);
forat4.onclick = (e) => gestionarClic(3, e);
forat5.onclick = (e) => gestionarClic(4, e);
forat6.onclick = (e) => gestionarClic(5, e);
