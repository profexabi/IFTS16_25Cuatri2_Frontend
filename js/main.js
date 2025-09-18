/* ============================
    Declaracion de funciones
=============================
    
function nombreFuncion() {
    // Bloque de codigo cuando llamemos a la funcion
}
*/

function sumarDosYDos() {
    let resultado = 2 + 2;
    console.log(`El resultado es ${resultado}`);
}

sumarDosYDos();



// Funciones con parametros: Son las variables quie definimos en las funciones y que aceptan valores cuando se las llama

function suma(a, b) { // Los nombres de las variables que definimos en la declaracion de la funcion

    return `El resultado es ${a + b}`; // Las funciones pueden devolver un valor usando la palabra clave return
    
    console.log("Esto no se va a ejecutar"); // Return termina la ejecucion de la funcion
}

console.log(suma(2, 5)); // Argumentos: son los valores que le pasamos a la funcion cuando la llamamos


function saludar(nombre = "maestro") { // Podemos poner valores predeterminados si no pasamos argumentos
    console.log(`Hola ${nombre}`);
}

saludar("Marcos");


// Multiples parametros: Los argumentos deben pasarse en el mismo orden
function sumaTresNums(a, b, c) {
    return a + b + c;
}

let miSuma = sumaTresNums(1, 2, 3);
console.log(miSuma);





/*===================================
    Funciones en JavaScript
=====================================
- Una funcion es un bloque de codigo reutilizable que podremos ejecutar cuando lo llamamos por su nombre.

- Usaremos funciones porque permiten organizar el codigo, permiten su reutilizacion y mejoran la legibilidad y el mantenimiento


1. Funcion declarada: La forma mas comun de declarar una funcion en JavaScript, usando la palabra clave function

function nombreFuncion() {
    // Codigo a ejecutar cuando se llame o invoque esta funcion
}


===============================
    Funciones flecha
===============================

Son una forma mas compacta de escribir funciones. Se introdujeron en ES6 y tienen una sintaxis mas concisa

const nombreFuncion = (parametros) => {  }
*/

// Funcion sin parametros
function sumaDosYCinco() {
    let resultado = 2 + 5;
    console.log(`El resultado es ${resultado}`);
}

sumaDosYCinco();

// Funcion con parametros: Podemos definir variables en las funciones que acepten valores cuando se les llama
function sumar(a , b) { // Los parametros son a, b
    let resultado = a + b;
    console.log(`El resultado es ${resultado}`);
}

sumar(5, 3); // Los argumentos son los valores que le pasamos a la funcion cuando los llamamos


// Funciones que devuelven un valor: usando la palabra clave return
function multiplicar(a, b) {
    return a * b; // Todo lo de abajo no se va a ejecutar
    console.log("Probando"); // A partir de la palabra clave return, no se continua la ejecucion del codigo
}

console.log(multiplicar(4,5));


// Valores predeterminados en los parametros
function saludar(nombre = "maestro") {
    console.log(`Hola ${nombre}`);
}

saludar();

function sumaTresNumeros(a, b, c) {
    return a + b + c;
}

console.log(sumaTresNumeros(1, 2, 3));


// Funciones flecha
const saludarFlecha = () => {
    console.log("Hola mundo");
}

saludarFlecha();

// Funcion flecha con un solo parametro, los parentesis son opcionales
const saludarFlechaNombre = nombre => {
    console.log(`Que onda ${nombre}`);
}

saludarFlechaNombre("Emmanuel");


// Funcion flecha en una sola linea
// Si la funcion solo devuelve un valor, no es necesario usar la palabra return ni las { }
const sumarFlecha = (a, b) => a + b;

console.log(sumarFlecha(6, 9));


/*=====================================
    Tipos de funciones en JavaScript
=======================================

1. Funcion declarada / Named function o Basic function

- Es la declaracion basica de JavaScript, usa la keyword function
- Se recomienda para funciones con nombre o cuando se necesite hoisting.
- Las funciones declaradas con la keyword function se pueden elevar a la parte superior de su ambito. Por lo que podemos llamar a la funcion antes de ser declarada

    ciclon();

    function ciclon() {
        console.log(`Aguante San Lorenzo`);
    }


2. Funcion expresada / Function expression
- Es la funcion que esta dentro de una varaible
- Son utiles para funciones anonimas, para cuando se quiere controlar donde va a estar disponible la funcion o para cuando va a ser usada como argumento para otra funcion

    const casla = function() {
        console.log(`Aguante el ciclon`);
    }

    casla();


3. Funcion anonima / Anonymous function
- No tiene nombre y se usan como callbacks generalmente
    
    setTimeout(function() {
        console.log(`Soy una funcion anonima dentro de una operacion asincronica`)
    }, 1000);


4. Funcion flecha / Arrow function
- Muy utiles para escribir funciones de una sola linea

const sumarFlecha = (a, b) => a + b;


5. Funcion de metodos / Method function
- Funciones definidas dentro de un objeto o clase

    const persona = {
    nombre: "Alejo",
    saludar() {
        console.log(`Hola, me llamo ${this.nombre}`);
    }
}

persona.saludar();


// 6. Expresion de funcion ejecutada inmediatamente / IIFE - Immediately Invoked Function Expressions
- Funciones que se ejecutan inmediatamente despues de haberse definido

(function() {
    console.log(`Esta es una IIFE`);
}());




==========================================
    Tipos de funciones flecha
==========================================
// Funcion flecha sin parametros
const despedirse = () => console.log("Chau nos vemos");
despedirse();

// Funcion de flecha con un solo parametro
const cuadrado = x => x * x;
console.log(cuadrado(5));

// Funcion de flecha con mas de un parametro
const restar = (a, b) => a - b;
console.log(restar(5, 3));


// Funcion de flecha con mas de una instruccion en la funcion
const saludarProfe = nombre => {
    const saludo = `Hola, ${nombre}`
    return saludo;
}

console.log(saludarProfe("Gabi"))
*/

// 1. Funcion declarada
ciclon();

function ciclon() {
    console.log(`Aguante San Lorenzo`);
}


// 2. Funcion expresada
const casla = function() {
    console.log(`Aguante el ciclon`);
}

casla();


// 3. Funcion anonima
setTimeout(function() {
    console.log(`Soy una funcion anonima dentro de una operacion asincronica`)
}, 1000);


// 4. Funcion flecha
const sumarMuestra = (a, b) => a + b;


// 5. Funcion de metodos / Method function
const persona = {
    nombre: "Alejo",
    saludar() {
        console.log(`Hola, me llamo ${this.nombre}`);
    }
}

persona.saludar();


// 6. Expresion de funcion ejecutada inmediatamente / IIFE - Immediately Invoked Function Expressions
(function() {
    console.log(`Esta es una IIFE`);
}());




// Funcion flecha sin parametros
const despedirse = () => console.log("Chau nos vemos");
despedirse();

// Funcion de flecha con un solo parametro
const cuadrado = x => x * x;
console.log(cuadrado(5));

// Funcion de flecha con mas de un parametro
const restar = (a, b) => a - b;
console.log(restar(5, 3));


// Funcion de flecha con mas de una instruccion en la funcion
const saludarProfe = nombre => {
    const saludo = `Hola, ${nombre}`
    return saludo;
}

console.log(saludarProfe("Gabi"));


// TO DO, falta scope, hoisting y comparacion var, let y const