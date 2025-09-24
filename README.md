# IFTS16_25Cuatri2_Frontend


---

## JavaScript III / Scope y ambito, funciones, tipos de funciones, parametros y argumentos, funciones flecha

```js
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
```

---

## JavaScript II / Control de flujo, estructuras de control, condicionales y bucles I

```js
/* ======================
    Control de flujo
=========================
    
- Determina como se ejecutan las instrucciones de un programa.

- JavaScript nos proporciona ciertas estructuras de control que permiten ejecutar secuecnias de codigo basadas en decisiones, repeticiones o condiciones especificas

1. Condicionales: 
    - if, else, else if
    - Operadores logicos &&, ||, !
    - Operadores ternarios

2. Bucles:
    - for, while, do...while

3. Control de flujo avanzado
    - break
    - continue
    - switch
*/

// Ejemplo bucle if
//let edad = prompt("Introduci una edad"); // El prompt devuelve un string
//let edad = parseInt(prompt("Introduci una edad"));

let edad = 20;
console.log(typeof edad);


if (edad >= 18) {
    console.log("Sos mayor de edad");
    
} else if (edad < 18 && edad > 0) {
    console.log("Sos menor de edad");
} else {
    console.log("Edad invalida");
}


let tieneLicencia = true;

if (edad >= 18 && tieneLicencia) { // con && ambas condiciones deben ser true
    console.log("Podes conducir");
}

if (edad < 18 || !tieneLicencia) { // con || al menos una condicion debe ser true
    console.log("No puede conducir"); // El operador ! niega el valor de una condicion. Es el operador de negacion logica
}


// Ejemplo de toggle con el operador !
let estado = true;

function alternarEstado() {
    estado = !estado; // Invierte el valor de estado

    // console.log("Nuevo estado " + estado); // Devuelve string + variable
    // console.log("Nuevo estado ", estado); // Devuelve string y por separado la variable (no hay conversion a string)
    console.log(`Nuevo estado ${estado}`); // `` -> backticks o tildes invertidas nos permite usar template 
}

alternarEstado();
alternarEstado();


// Con el operador ternario podremos escribir de forma mas compacta y single line una condicion if...else
let mensaje = (edad >= 18) ? "Sos mayor de edad" : "Sos menor de edad";
console.log(mensaje);


/* =================
    Bucles 
====================

for (inicializacion; condicion; incremento) {
    // Codigo a ejecutar en cada iteracion
}


while (condicion) {
    // Codigo a ejecutar en cada iteracion
}


do {
    // Codigo a ejecutar

} while (condicion)

*/ 

// Bucle for simple
for ( let i = 0; i < 5; i++) {
    console.log(`Iteracion ${i}`);
}


// Bucle for anidado 1
for (let i = 0; i < 3; i++) {
    console.log(`Iteracion i = ${i}`);

    for(let j = 0; j < 3; j++) {
        //console.log(`Iteracion ${i}`);
        console.log(`Iteracion j = ${j}`);
    }

    console.log("Fin de la iteracion j");

    console.log("Fin de la iteracion i");
}


// Bucle for anidado 2
// Tabla del 3
for (let i = 1; i <= 3; i++) {

    for (let j =1; j <= 3; j++) {

        console.log(`${i} x ${j} = ${i * j}`);

    }

}


// EJERCICIO SUGERIDO: Hagan la tabla del 10, del 0 al 10 con bucle for anidado


// Bucle while
let i = 0;
while (i < 5) {

    console.log(`Iteracion while: ${i}`);

    i++; // Si no hay incremento, es un bucle infinito que nos satura la memoria de la compu y se crashea el navegador
}



// Bucle do...while
let contador = 0;

do {
    console.log(`Iteracion do.. while ${contador}`);
    contador++;

} while (contador < 3);


/* =============================
    Control de flujo avanzado 
================================

break: Para salir inmediatamente de un bucle o estructura de control

continue: Para saltar a la siguiente iteracion del bucle, omitiendo el codigo restante para esa iteracion
*/ 

for (let i = 0; i < 10; i++) {
    if (i ===5) {
        break; // Salgo del bucle cuando i es 5
    }
    console.log(`Iteracion: ${i}`);
}


for ( let i = 0; i < 10; i++) {

    if (i % 2 === 0) {
        continue; // Saltamos las iteraciones donde i es par
    }

    console.log(`Numero: ${i}`);
}


// Switch: Es otra estructura de control que permite evaluar una expresion y ejecutar el bloque de codigo correspondiente

let diaSemana = prompt("Introduci dia de la semana");
console.log(typeof diaSemana);

// Verifico que dia de la semana es
switch (diaSemana) {
    case 1:
    case "1":
        console.log("Lunes");
        break;

    case 2:
    case "2":
        console.log("Martes");
        break;


    case 3:
    case "3":
        console.log("Miercoles");
        break;

    case 4:
    case "4":
        console.log("Jueves");
        break;

    case 5:
        console.log("Viernes");
        break;

    default:
        console.log("Fin de semana");
        
}
```

---

## JavaScript I / Conceptos elementales, sintaxis básica, variables, tipos de datos y operadores

- *Recordatorio: vayan practicando con el portafolio*
```js
/* Que es JavaScript?
JavaScript (JS) es un lenguaje de programación que se utiliza para crear páginas web interactivas.

JavaScript es un lenguaje de programación que se usa para procesar información y manipular documentos.
*/

console.log("Que onda!");

// var: declaracion historica, con limitaciones como el hoisting y el scope. No recomendada!

var nombre = "Juan Pablo";

// let: declaracion moderna para variables que pueden cambiar su valor y tiene alcance de bloque
let edad = 25;

// const: declaracion moderna para variables que no vayan a cambiar su valor
const pi = 3.1416; // el valor en const puede ser modificado si es un objeto o un array, pero la referencia no puede cambiar

console.log(nombre);
console.log(edad);
console.log(pi);


////////////////////////////////
// Tipos de datos primitivos //

let numero = 42; // valores numericos
let texto = "Hola mundo"; // Texto encerrado entre comillas simples o dobles
let verdadero = true; // true o false
let vacio = null; // Valor intencionalmente vacio
let indefinido; // Una variable declarada pero sin valor

console.log(texto.length); // Object wrappers o envolvedores de objetos (tratar incluso a los tipos de datos primitivos como si fueran objetos)

// Repasar js operators https://www.w3schools.com/js/js_operators.asp

// Operadores de tipo
console.log(typeof 42);
console.log(typeof "hola");
```
---

# Guia JavaScript

## JavaScript VIII / JSON, asincronia, promesas, fetch, async/await y try/catch

---

## JavaScript VII / High order functions, destructuring, spread operator, closures, funciones anidadas, callbacks, web apis

---

## JavaScript VI / Manipulacion del DOM en JavaScript y Eventos

---

## JavaScript V / Objetos, clases y objetos globales. Almacenamiento persistente, iteracion en arrays, iteracion en objetos e iteracion en arrays de objetos

---

## JavaScript IV / Introduccion a arrays. Metodos de strings y arrays

