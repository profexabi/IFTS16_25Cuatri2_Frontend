# IFTS16_25Cuatri2_Frontend


---

## JavaScript III / Scope y ambito, funciones, tipos de funciones, parametros y argumentos, funciones flecha

```js

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

