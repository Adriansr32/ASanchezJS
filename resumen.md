# Resumen del Proyecto JavaScript

## Índice
1. [Estructura del Proyecto](#estructura-del-proyecto)
2. [Conceptos Básicos de JavaScript](#conceptos-básicos-de-javascript)
3. [Manipulación del DOM](#manipulación-del-dom)
4. [Funciones](#funciones)
5. [Eventos y Interactividad](#eventos-y-interactividad)
6. [Ejemplos Prácticos](#ejemplos-prácticos)

## Estructura del Proyecto
El proyecto contiene varios archivos HTML, JavaScript y CSS que demuestran diferentes conceptos de programación web:

- `index.html` - `index8.html`: Páginas con ejemplos de manipulación del DOM
- `functions.js`: Biblioteca de funciones reutilizables
- `bucles.js`: Ejemplos de estructuras de control
- `tasques.js`: Archivo con ejercicios prácticos
- `styles.css`: Estilos CSS del proyecto

## Conceptos Básicos de JavaScript

### Estructuras de Control
```javascript
// Bucle while con contador descendente
let i = 3;
while (i) {
    alert(i);
    i--;
}

// Bucle do-while para garantizar al menos una ejecución
let l = 0;
do {
    alert(l);
    l++;
} while (l < 3);

// Bucle for con contador ascendente
for (let a = 0; a < 3; a++) {
    alert(a);
}
```

### Manejo de Fechas
```javascript
// Obtener y formatear la fecha actual
let avui = new Date().toLocaleDateString("es-ES");
document.getElementById("dia").innerHTML = avui;
```

## Funciones

### Funciones de Flecha
```javascript
const peix = (dibuix, vegades) => {
    let retorna = "";
    for (let i = 0; i < vegades; i++) {
        retorna += dibuix + "<br><br>";
    }
    return retorna;
}
```

## Manipulación del DOM

### Eventos y Temporizadores
```javascript
// Botón para mostrar la hora actual
<button onclick="mostraHora()">MOSTRA HORA</button>

function mostraHora() {
    let hora = Date();
    document.getElementById("demo").innerHTML = hora;
}

// Temporizador automático
setInterval(function() {
    let horaActual = new Date().toLocaleTimeString();
    document.getElementById("reloj").innerHTML = horaActual;
}, 1000);
```

### Manipulación de Elementos
```javascript
// Cambiar estilos dinámicamente
function cambiarEstilo(elemento) {
    elemento.style.backgroundColor = '#ffeb3b';
    elemento.style.padding = '10px';
    elemento.style.borderRadius = '5px';
}

// Agregar y eliminar elementos
function agregarTarea(texto) {
    const nuevaTarea = document.createElement('p');
    nuevaTarea.textContent = texto;
    document.getElementById('tasques').appendChild(nuevaTarea);
}
```

## Ejemplos Prácticos

### Sistema de Login con Gestión de Tareas
```javascript
// Sistema de autenticación
let user = prompt('Introdueix el teu usuari: ', 'user');
let password = prompt('Introdueix la teva contrasenya: ', 'password');

// Validación de credenciales
if (user == "admin" && password == "1234") {
    alert('Has iniciat sessió com a admin');
} else if (user == "alum" && password == "pepe") {
    alert('Has iniciat sessió com a alum');
} else {
    alert('Error Password');
}

// Gestión de tareas según el rol del usuario
if (user == "admin") {
    document.getElementById("tasques").innerHTML =
        `<p>Fer un pdf</p> <p>Buscar bugs</p> <p>Anar al cine</p>`
} else if (user == "alum") {
    document.getElementById("tasques").innerHTML =
        `<p>Fer deures</p> <p>Menjar una burguer</p> <p>Escoltar musica horrible a tot volum</p>`
}
```

### Carrusel de Imágenes
```javascript
function showImage(index) {
    const mainImage = document.getElementById('mainImage');
    const images = ['donuts-azucar.jpg', 'fettuccini-funghi.jpg', 'pesols.jpg'];
    mainImage.src = `img/${images[index]}`;
    mainImage.alt = `Imagen ${index + 1}`;
}

function nextImage() {
    if (currentIndex >= totalImages - 1) {
        currentIndex = 0;
    } else {
        currentIndex = currentIndex + 1;
    }
    showImage(currentIndex);
}
```