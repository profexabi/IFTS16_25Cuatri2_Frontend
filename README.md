# IFTS16_25Cuatri2_Frontend


---

## Notas cursada
- Falta repasar JavaScript IV: Arrays, objetos y metodos de strings y arrays
- De ahi saltamos a JavaScript V

---


## JavaScript IV / Introduccion a arrays. Metodos de strings y arrays
```js
/* =============================
     Introduccion a arrays
================================

- Un array es una lista ORDENADA de elementos, donde cada uno tiene una posicion o indice (index)

- Los arrays en JavaScript pueden contener cualquier tipo de dato (numeros, strings, booleanos, otros arrays, objetos, funciones, etc)

- Usaremos arrays cuando necesitemos almacenar una lista ordenada de elmentos (como una lista de nombre)



=================================
    Introduccion a objetos
=================================

- Un objeto en JavaScript es una coleccion de pares clave-valor. as claves son strings que identifican cada valor, lo que nos permite un acceso rapido y estructurado a los datos

- Los objetos son utiles cuando queremos representar una entidad con multiples propiedades

- Accedemos a las propiedades de un objeto a traves de notacion de punto y notacion de corchetes

- Los objetos tambien pueden tener metodos, que son funciones almacenadas en una propiedad

- Usaremos objetos cuando tenemos datos estructurados que puedne agruparse en propiedades clave-valor


/////////////////////////////////////////
// Comparacion entre Arrays y Objetos //

Uso principal: 
    Array: Lista ordenada de elementos     
    Objeto: Colecciond e pares clave-valor

Acceso a datos:
    Array: Por indice (array[0])
    Objeto: Notacion de punto o de corchete (objeto.clave / objeto["clave"])

Metodos:
    Array: .push(), .pop(), .map(), .forEach()
    Objeto: Metodos personalizados y funciones

Iteracion:
    Array: .forEach(), .map(), bucles, etc
    Objeto: for...in, Object.keys(), Object.values()
*/

// Arrays
let frutas = ["manzana", "banana", "naranja"];

console.log(frutas[0]); 
console.log(frutas[2]);


// Objetos
let persona = { // Similar a los diccionarios en Python
    nombre: "Kevin",
    edad: 23,
    ciudad: "Buenos Aires",

    presentarse: function() { // Metodo de objeto persona
        console.log("Soy profesor de programacion!")
    }
}

// Notacion de punto
console.log(persona.nombre); 

// TO-DO, sin desplegar es copia y desplegando es referencia del objeto?

// Notacion de corchetes
console.log(persona); // La consola del navegador imprime una referencia, no una copia! (al desplegar el objeto en la consola del navegador?)

console.log({...persona}); // Aca imprimimos una copia del objeto hasta ese momento
console.log(persona["ciudad"]);

persona.presentarse(); // Usamos el metodo del objeto

// Agregamos una propiedad
persona.lenguaje = "JavaScript";
// console.log(persona);

// Modificamos una propiedad
persona.lenguaje = "Python";

// Eliminamos una propiedad
delete persona.edad;

persona.ciudad = "Mendoza";
console.log(persona);



/* ========================
    Metodos de strings
===========================

En JavaScript son todo objetos, salvo los tipos primitivos
Pero incluso los tipos primitivos (cadenas de caracteres, numeros, etc), JavaScript los trata como si fueran objetos.

Esto sucede por los object wrappers o envolvedores de objetos. Donde JavaScript envuelve estos tipos de datos y les proporciona metodos para poder manipularlos
*/

// 1. length: nos devuelve la longitud del string
console.log("Hola".length); 

// Ejemplo object wrapper, iterando un string
let saludos = "Saludos"; // Cadena de caracteres para iterar

for (let i = 0; i < saludos.length; i++) { // Recorro cada caracter del string como un array
    console.log(saludos[i]);
} // Devuelve cada caracter

console.log("///////////////////");


//  2. charAt: Devuelve el caracter en la posicion especificada
console.log(
    "Hola".charAt(2)
);


// 3. concat: Concatena strings
console.log("Hola".concat(" ", "mundo"));


// 4. includes: Devuelve true si el substring esta en el string
console.log("JavaScript".includes("Script"));


// 5. startsWith: Comprueba si el string comienza con el substring
console.log("Hola mundo".startsWith("Hola"));


// 6. endsWith: Comprueba si el string termina con el substring
console.log("Hola mundo".endsWith("ndo"));


// 7. indexOf: Devuelve el indice de la primera aparicion del substring
console.log("banana".indexOf("a"));


// 8. lastIndexOf: Devuelve la ultima aparicion del substring
console.log("banana".lastIndexOf("a"));


// 9. replace: Reemplaza una parte del string
console.log("Hola mundo".replace("mundo", "division 132"));


// 10. replaceAll: Reemplaza todas las apariciones
console.log("1,2,3".replaceAll(",", ";"));


// 11. toLowerCase: Convierte a minusculas
console.log("AGUANTE JAVASCRIPT".toLowerCase());


// 12. toUpperCase: Convierte a mayusculas
console.log("holis".toUpperCase());


// 13. trim: Elimina espacios en blanco al principio y al final
console.log("      hola          ".trim());


// 14. trimStart: Elimina espacios al inicio
console.log("         hola".trimStart());


// 15. trimEnd: Elimina espacios al final
console.log("hola                 ".trimEnd());


// 16. slice: Extraemos parte del string
console.log("JavaScript".slice(0, 4));
console.log("Holis".slice(-3));


// 17. substring: Similar a slice, pero no acepta negativos
console.log("JavaScript".substring(4, 10));


// substr: Obsoleto, similar a substring


// 18. split: Divide el string en un array
console.log("rojo,verde,azul".split(","));
console.log("Hola mundo".split(" "));
console.log("JavaScript".split(""));


// 19. repeat: Repite el string
console.log("ji".repeat(3));


// 20. match: Devuelve coincidencias con una expresion regular (REGEX)
console.log("abce123".match(/[aeiou]/gi)); // Extraemos las vocales



/* ========================
    Metodos de arrays
==========================*/

// 1. length: devuelve la longitud del array
console.log([1, 2, 3].length);

let desayuno = ["avena", "pera", "pomelo", "banana", "semillas"];

for (let i = 0; i < desayuno.length; i++) {
    console.log(desayuno[i]);
}


// 2. push: Agrega un elemento al final del array
let arr = [1, 2];

console.log(arr);
arr.push(3);
console.log(arr);


// 3. pop: Elimina el ultimo elemento y lo devuelve
arr.pop();
console.log(arr);


// 4. unshift: Agrega un elemento al inicio del array
arr.unshift(0);
console.log(arr);


// 5. shift: elimina el primer elemento y lo devuelve
console.log(arr.shift()); // lo podemos ver en consola
console.log(arr);


// 6. concat: concatena arrays
let err = [3, 4]
let orr = arr.concat(err);
console.log(arr.concat(err));
console.log(arr);
console.log(orr);


// 7. join: une los elementos en un string
console.log(orr.join("-"));
console.log(orr.join(""));
console.log(orr.join(" "));


// 8. slice: extrae una copia parcial del array
console.log(orr.slice(1, 3));


// 9. splice: modifica el array in situ y permite borrar y agregar
console.log(orr);
console.log(orr.splice(1, 0, "dos", "2"));
console.log(orr);


// 10. indexOf, lastIndexOf: primera y ultima posicion del elemento
orr.push(2);
console.log(orr.indexOf(2));
console.log(orr.lastIndexOf(2));


// 11. includes: devuelve true si el elemento existe
console.log(orr.includes(3));
console.log(orr.includes(5));



/* =====================
    EXTRA
========================

Comparativa de notación con punto frente a notación con corchetes en JavaScript

En JavaScript, la notación con punto (`objeto.propiedad`) y la notación con corchetes (`objeto[“propiedad”]`) son funcionalmente equivalentes para acceder a las propiedades de los objetos, pero difieren en cuanto a rendimiento y casos de uso. La notación con punto suele ser más rápida porque se beneficia de las optimizaciones en tiempo de compilación, lo que permite a los motores JavaScript resolver rápidamente el nombre de la propiedad directamente. Esto se debe a que el motor conoce el nombre exacto de la propiedad en tiempo de compilación, lo que se traduce en tiempos de acceso más rápidos.  

La notación entre corchetes, aunque más versátil, requiere que el motor evalúe la expresión dentro de los corchetes en tiempo de ejecución, lo que introduce una ligera sobrecarga. Esta flexibilidad permite el acceso dinámico a las propiedades, como el uso de variables para los nombres de las propiedades o el acceso a propiedades con caracteres especiales o espacios, que la notación con punto no puede manejar. Por ejemplo, `person[propertyName]`, donde `propertyName` es una variable, o `person[“job-title”]`, con un nombre con guion, requieren la notación entre corchetes.  


Históricamente, la diferencia de rendimiento era notable, y las pruebas comparativas mostraban que la notación de puntos era más rápida, por ejemplo, 25 ms frente a 35 ms para 10 millones de iteraciones.  Sin embargo, los motores JavaScript modernos como V8 (utilizado en Chrome y Node.js) han optimizado significativamente ambas notaciones, lo que hace que la diferencia de rendimiento sea insignificante en la mayoría de las aplicaciones.  De hecho, algunas pruebas en las versiones actuales de Chrome muestran que la notación entre corchetes con nombres de propiedades más largos puede ser entre un 4 % y un 6 % más rápida para la lectura de propiedades, aunque las operaciones de escritura tienen un rendimiento similar.

A pesar de estas pequeñas diferencias de rendimiento, la elección entre una notación u otra debe basarse principalmente en la legibilidad, la facilidad de mantenimiento y el caso de uso específico. La notación de puntos es preferible para nombres de propiedades estáticos y conocidos debido a su sintaxis limpia y concisa.  La notación entre corchetes es esencial para el acceso dinámico, como la iteración sobre las propiedades de los objetos con bucles «for...in» o el acceso a propiedades basadas en valores calculados.  Además, la flexibilidad de la notación entre corchetes puede ayudar a los motores JavaScript a optimizar el código para escenarios que implican bucles o acceso basado en variables, lo que potencialmente le da una ligera ventaja en esos contextos. 

En resumen, aunque la notación de puntos ofrece una pequeña ventaja de rendimiento en algunos escenarios debido a la optimización en tiempo de compilación, la diferencia suele ser insignificante en los motores modernos. La decisión debe dar prioridad a la claridad del código y a la necesidad de acceso dinámico a las propiedades por encima de las microoptimizaciones. 
*/
```


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



/*==========================
    Scope (Ambito)
============================
El scope se refiere al contexto en el cual las variables y funciones son accesibles y pueden ser referenciadas

// Global Scope o Ambito global
    - Las variables declaradas FUERA de cualquier funcion o bloque tienen alcance global y son accesibles desde cualquier parte del codigo

// Local Scope o Function Scope
    - Las variables declaradas dentro de una funcion solo son accesibles dentro de esa funcion y tienen un ambito local

// Block Scope o Ambito de bloque
    - A partir de ES6 (JavaScript 2015), las variables let y const tienen alcance de bloque, por lo que solo son accesibles dentro de las {} (bucle, condicional, etc)
*/

// Global Scope
var globalLet = "Soy una variable global";

function mostrarGlobal() {
    console.log(globalLet);
}

mostrarGlobal();
console.log(globalLet);


// Local Scope
function mostrarLocal() {
    var localVar = "Soy local";
    console.log(localVar);
}

mostrarLocal();
// console.log(localVar); // Uncaught ReferenceError: localVar is not defined


// Block Scope
if(true) {
    let bloqueLet = "Soy de bloque";
    console.log(bloqueLet);
}

// console.log(bloqueLet); // Uncaught ReferenceError: bloqueLet is not defined


// NOTA: Siempre declaremos variables modernas con let y const




/* ==========================
    Hoisting (Elevacion)
=============================

- Las declaraciones de variables y funciones en JS se mueven "hacia arriba" de su contexto de ejecucion (scope).
Solo las declaraciones son elevadas, no asi las inicializaciones

- var: Las variables se elevan y se inicializan con undefined

- let y const: Las variables se elevan pero NO se inicializan
*/

console.log(elevadaVar); // undefined
var elevadaVar = "Soy var elevada";
console.log(elevadaVar);


console.log(elevadaLet); // Uncaught ReferenceError: Cannot access 'elevadaLet' before initialization
let elevadaLet = "Soy una let elevada";
console.log(elevadaLet);


/* =================================
    Comparacion var, let y const
==================================

En resumen, let y const proporcionan un control más preciso sobre el ámbito y el comportamiento de las variables en
comparación con var . 

Aunque var sigue estando soportado, let y const se recomiendan para código nuevo debido a su ámbito e inmutabilidad mejorados.

Las principales diferencias entre var , let y const en JavaScript son su ámbito, redeclarabilidad y reasignabilidad:

var :
    • De ámbito de función.
    • Puede ser redeclarado y reasignado.
    • Tiene elevación a nivel de función, lo que significa que puede utilizarse antes de la declaración.

let :
    • De ámbito bloque (dentro de un bucle, una sentencia condicional o una función).
    • No se puede volver a declarar, pero SI reasignar.
    • Tiene elevación a nivel de bloque, lo que significa que no es accesible antes de la declaración.

const :
    • A nivel de bloque (dentro de un bucle, sentencia condicional o función).
    • No se puede volver a declarar ni reasignar.
    • Tiene elevación a nivel de bloque, lo que significa que no es accesible antes de la declaración.

Buenas prácticas:

Usa const para variables de sólo lectura, como constantes u objetos inmutables. Utiliza let para variables que puedan
cambiar con el tiempo, pero que no deban volver a declararse. Evita usar var debido a su ámbito global o de función, que
puede dar lugar a conflictos y bugs.

// Discusion en stackoverflow con argumentos a favor de const y a favor de let
https://stackoverflow.com/questions/41086633/in-javascript-why-should-i-usually-prefer-const-to-let
*/
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
#### [Operadores en JavaScript](https://www.w3schools.com/js/js_operators.asp)
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

