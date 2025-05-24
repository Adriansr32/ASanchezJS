// Funciones para mostrar/ocultar imagen
function mostra() {
    let p1 = document.getElementById('id1');
    if (p1.src.includes('img_girl.jpg')) {
        p1.src = '';
    } else {
        p1.src = '../img/img_girl.jpg';
    }
}

// Funciones para el menú
function primerPlat() {
    document.getElementById('imatge').src = '../img/pesols.jpg';
}

function segonPlat() {
    document.getElementById('imatge').src = '../img/fettuccini-funghi.jpg';
}

function postre() {
    document.getElementById('imatge').src = '../img/donuts-azucar.jpg';
}

// Funciones para redimensionar imagen
let mida = 200;

function mesGran() {
    mida += 10;
    document.getElementById('imatge').width = mida;
    document.getElementById('imatge').height = mida;
}

function mesPetit() {
    mida -= 10;
    if (mida < 100) {
        mida = 100;
        alert('No pot ser mes petit que 100');
    }
    document.getElementById('imatge').width = mida;
    document.getElementById('imatge').height = mida;
}

// Funciones para crear imágenes
function crea(n) {
    let imatges = document.getElementById('imatges');
    for (let i = 0; i < n; i++) {
        imatges.innerHTML += '<img src="../img/pesols.jpg">';
    }
}

function crea2(n) {
    let p = '';
    for (let i = 0; i < n; i++) {
        p += '<img src="../img/pesols.jpg">';
    }
    document.getElementById('imatges').innerHTML = p;
}