// Funcions que no retornen res
function showMessage() {
    alert('¡Hola!');
}

// Funcions que treballen amb paràmetres

function suma(a, b) {
    return (a + b);
}

// Variables locals 
function showMessage() {
    let message = "Hola"; // variable local
    alert(message);
}

// message fora de la funció no té valor definit
var x = myFunction(4, 3);
document.getElementById("demo").innerHTML = x;

document.getElementById("demo").innerHTML = pintaUnPeix();

pintaX(10);


function myFunction(a, b) {
    return a * b;
}

function pintaUnPeix() {
    return "<*))))<"
}

function pintaX(quantitat) {
    cadenaCar = ""
    for (let i = 0; i < quantitat; i++) {
        cadenaCar = cadenaCar + "X";
    }
    document.getElementById("demo3").innerHTML = cadenaCar;
}
function mostraHora() {
    let hora = Date();
    document.getElementById("demo").innerHTML = hora;
}
let a = 4;
function myFunction() {
    let a = 3;
    document.getElementById("demo").innerHTML = a * a;
}




myFunction();
document.getElementById("demo2").innerHTML = a * a;

// Funcions de fletxa

// Si tenim una funció així

function saludar() {
    alert("hola!");
}


// La podem convertir en funció de fletxa així

let saludar = () => { alert("hola"); }

// Si hi ha paràmetres es posen a dins dels parèntesis així

function resta(a, b) {
    return (a - b);
}

alert(resta(2, 1));


let resta = (a, b) => { return (a - b); }

// En aquests dos casos, quan només hi ha una línia de codi que és return, es poden obviar les claus { } i el return

let resta = (a, b) => a - b;

// Molt important. Les funcions de fletxa s’han de definir ABANS de fer-les servir

alert(resta(3, 1));
let resta = (a, b) => a - b;	// NO FUNCIONARÀ
