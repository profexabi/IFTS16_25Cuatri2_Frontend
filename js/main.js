/*========================
    Objetos globales
==========================

El entorno de ejecucion es el lugar donde se ejecuta JavaScript. Históricamente, el entorno de ejecución de JavaScript es el navegador. Hoy podemos hacer aplicaciones del lado del servidor,aplicaciones de escritorio con JavaScript.

Trailer de documental de Node.js: https://www.youtube.com/watch?v=SfWPqr04srM

Los objetos globales en JavaScript son aquellos que estan disponibles en todo el entorno de ejecucion (el navegador en nuestro caso, o Node.js en el back).

Los objetos globales varian dependiendo del entorno de ejecucion, sea un navegador o Node.js, pero su proposito es facilitar el acceso a ciertas funciones y valores predeterminados


Objetos globales en el navegador:


- Window
Es el objeto global principal en el navegador. Este objeto representa la ventana del navegador y actua como el contenedor global para todas las variables, funciones y objetos globales en una pagina web. Todos los objetos, variables y funciones definidos en el ambito global estan automaticamente disponibles como propiedades del objeto window.

- Objetos y metodos importantes del objeto window

    - document: Representa el DOM de la pagina web actual, permitiendo acceder y manipular elementos html
    let miParrafo = document.getElementById("parrafo");

    - alert, prompt y confirm: Metodos que permiten mostrar dialogos al usuario

    - setTimeout y setInterval: Metodos para programar la ejecucion de codigo despues de un tiempo o en intervalos regulares    
*/
   

// location: Proporciona info sobre la URL actual de la pagina y permite redireccionar a otras URL
console.log(window.location.href);


// navigator: Contiene informacion sobre el navegador, la version, el agente de usuario y la geolocalizacion
console.log(navigator.userAgent);


// console: Proporciona acceso a la consola del navegador para mostrar mensajes de depuracion
console.log("holis");
console.log(console); // Vemos todo el objeto impreso


// localStorage y sessionStorage: Permiten almacenar datos en el navegador de manera persistente o temporal


// history: Proporciona acceso al historial de navegacion del navegador
// history.back()



/*============================================
    Almacenamiento de datos en JavaScript
==============================================

En JavaScript, almacenar datos implica elegir la estructura adecuada de acuerdo con el timpo de informacion que queremos guardar y como queremos manipularla.

- Variables simples: para valores unicos como numeros y cadenas



- Objetos: Para representar datos complejos con propiedades

    - Cuando deseamos represnetar una entidad unica con multiples atributos
    - Cuando sabemos que no habra multiples instancias o copias de estos datos en la aplicacion
    - Cuando necesitamos acceder a propiedades especificas mediante sus nombres


- Arrays: Para almacenar listas ordenadas de elementos del mismo (idealmente)

    - Cuando tenemos una lista ordenada de elementos individuales, donde cada elemento no requiere atributos adicionales, ej array de valores primitivo


- Arrays de objetos: Para manejar listas ORDENADAS de elementos con propiedades similares

    - Cuando necesitamos almacenar multiples isntancias de una misma entidad o estructura de datos
    - Cuando planeamos realizar operaciones sobre una lista de elementos, como iteraciones, filtrados, etc
    - Si necesitamos aplicar metodos de los arrays como map, filter, reduce, find

    - Ejs: Listado de usuarios registrados en una plataforma, inventario de productos en una tienda, etc

*/


// Array de objetos

let personas = [
    {nombre: "Juan", edad: 30, ocupacion: "chofer", activo: true },
    {nombre: "Carla", edad: 35, ocupacion: "arquitecta", activo: false},
    {nombre: "Lautaro", edad: 40, ocupacion: "diseñador", activo: true }
];

// Ejemplo de iteracion
personas.forEach(persona => console.log(persona.nombre));




/*=======================================
    Metodos clasicos: for tradicional
=========================================

    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }

- Ventajas: Maximo control, podemos usar break y continue. Gran rapidez (eficiencia en memoria)

- Desventajas: Mas confuso para leer */

// Ejemplo 1: Sumar elementos
const numeros = [1, 2, 3, 4, 5];
let suma = 0;

for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
}

console.log(suma);


// Ejemplo 2: Buscar elemento -> queremos imprimir el string que arranque con el substring ban y que al encontrarlo rompa el bucle y lo muestre por consola
const frutas = ["manzana", "banana", "pomelo"];

for (let i = 0; i < frutas.length; i++) {

    // Recorremos cada elemento y comprobamos si empieza cada string con "ban"
    if (frutas[i].startsWith("ban")) { 
        console.log(frutas[i]);
        break;
    }
}


// Ejemplo 3: Filtrar objetos
const productos = [
    { id: 1, nombre: "Laptop", precio: 1000, cantidad: 1, completada: true },
    { id: 2, nombre: "Mouse", precio: 10, cantidad: 2, completada: false  },
    { id: 3, nombre: "Teclado", precio: 30, cantidad: 3, completada: true  },
    { id: 4, nombre: "Monitor", precio: 100, cantidad: 4, completada: false  },
    { id: 5, nombre: "gabinete", precio: 70, cantidad: 6, completada: true  }
];

let productosCaros = [];

for(let i = 0; i < productos.length; i++) {
    if (productos[i].precio > 70) {
        productosCaros.push(productos[i]);
    }
}

console.log(productosCaros);




/*==============
    forEach()
================

    array.forEach((elemento, índice, arrayOriginal) => {
        console.log(elemento, índice);
    });

- Ventajas: Sintaxis muy legible y no necesita contador

- Desventajas: No puedo detener el bucle con break o continue. Es el bucle mas lento

*/

// const frutas = ["manzana", "banana", "pomelo"];
// Imprimir elementos
frutas.forEach(fruta => console.log(fruta));


// Modificar array externo, nuevo array con numeros dobles
// const numeros = [1, 2, 3, 4, 5];
let numerosDobles = [];
numeros.forEach(num => numerosDobles.push(num * 2));
console.log(numerosDobles);





/*==============
    map()
================

    const nuevosValores = array.map(elemento => elemento * 2);

- Proposito: Transformar cada elemento

- Retorna: Nuevo array con los resultados
*/

// Ejemplo 1: Creamos un nuevo array de cuadrados
// const numeros = [1, 2, 3, 4, 5];

let numerosCuadrados = numeros.map(num => num * num);
console.log(numerosCuadrados)

// Ejemplo 2: Extraemos propiedades-> Guardamos los nombres en un nuevo array
/*
const productos = [
    { id: 1, nombre: "Laptop", precio: 1000 },
    { id: 2, nombre: "Mouse", precio: 10 },
    { id: 3, nombre: "Teclado", precio: 30 },
    { id: 4, nombre: "Monitor", precio: 100 },
    { id: 5, nombre: "gabinete", precio: 70 }
];
*/

let nombresProductos = productos.map(p => p.nombre);
console.log(nombresProductos);



/*==============
    filter()
================

    const filtrados = array.filter(elemento => elemento > 10);

- Proposito: Seleccionar elementos que cumplan condicion

- Retorna: Nuevo array con los elementos filtrados
*/

let numerosLargos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filtrar numeros pares con filter()
const numerosPares = numerosLargos.filter(n => n % 2 === 0);
console.log(numerosPares);


// Ejemplo 2: Filtrar personas de mas de 35 años
/*
let personas = [
    {nombre: "Juan", edad: 30, ocupacion: "chofer"},
    {nombre: "Carla", edad: 35, ocupacion: "arquitecta"},
    {nombre: "Lautaro", edad: 40, ocupacion: "diseñador"}
];
*/

const mayoresTreintaycinco = personas.filter(p => p.edad > 35);
console.log(mayoresTreintaycinco);


// Ejemplo 3: Filtrar por multiples condiciones (> 1 cantidad y que la orden este completada)
/*
const productos = [
    { id: 1, nombre: "Laptop", precio: 1000, cantidad: 1, completada: true },
    { id: 2, nombre: "Mouse", precio: 10, cantidad: 2, completada: false  },
    { id: 3, nombre: "Teclado", precio: 30, cantidad: 3, completada: true  },
    { id: 4, nombre: "Monitor", precio: 100, cantidad: 4, completada: false  },
    { id: 5, nombre: "gabinete", precio: 70, cantidad: 6, completada: true  }
];*/

const productosMultiplesCompletados = productos.filter(p => p.cantidad > 1 && p.completada);
console.log(productosMultiplesCompletados);



/*==============
    reduce()
================

    const suma = array.reduce((suma, elemento) => suma + elemento, 0);

- Proposito: Reducir el array a un unico valor

- Retorna: Valor acumulado
*/

/* Vamos a reproducir en una sola linea este ejemplo

const numeros = [1, 2, 3, 4, 5];
let suma = 0;

for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
}
*/

// Sumar decenas
let decenas = [10, 20, 30, 40, 50];

let sumaDecenas = decenas.reduce((suma, num) => suma + num, 0);
console.log(sumaDecenas);


// Sumar propiedades de las ventas
let ventas = [
    { producto: "Camisa", cantidad: 3, precio: 25 },
    { producto: "Pantalon", cantidad: 2, precio: 40 },
    { producto: "Zapatos", cantidad: 1, precio: 80 }
];

// Opcion 1, en una sola linea
// let totalVentas = ventas.reduce((total, producto) => total + (producto.cantidad * producto.precio), 0

// Opcion 2, le ponemos {} y el return
let totalVentas = ventas.reduce((total, producto) => {
    return total + (producto.cantidad * producto.precio)
}, 0);

console.log(totalVentas);


/*==========================
    find() y findIndex()
============================

    const encontrado = array.find(elemento => elemento.id === 123);
    const indice = array.findIndex(elemento => elemento.id === 123);

- Proposito: Buscar el primer elemento que cumpla una condicion

- Retorna: Elemento (find) o un Indice (findIndex) y devuelve undefined o -1 si no lo encuentra
*/

/* Vamos a reproducir en una sola linea este ejemplo

const numeros = [1, 2, 3, 4, 5];
let suma = 0;

for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
}
*/


// Vamos a buscar usuarios activos

/*let personas = [
    {nombre: "Juan", edad: 30, ocupacion: "chofer", activo: true },
    {nombre: "Carla", edad: 35, ocupacion: "arquitecta", activo: false},
    {nombre: "Lautaro", edad: 40, ocupacion: "diseñador", activo: true }
];*/

let usuarioActivo = personas.find(persona => persona.activo);
console.log(usuarioActivo);

let usuarioMasTreintaYCinco = personas.findIndex(persona => persona.edad >= 35);
console.log(usuarioMasTreintaYCinco);

// for...of, some y every
// Prox clase terminamos estos dos metodos y arrancamos con JavaScript VI (Manipulacion del DOM y Eventos)