/*======================
    Callbacks
========================

1. Los callbacks son funciones que se pasan como argumentos a otras funciones 
2. y se ejecutan despues de que ocurra algun evento o se complete alguna operacion*/

// Ejemplo 1
function procesarDatos(datos, callback) {
    console.log("Procesando datos..."); // Operacion 1

    let resultado = datos.toUpperCase(); // Operacion 2 Transforma nuestro hola mundo a mayusculas

    // Al terminar las 2 instrucciones previas, finalmente ejecuta la funcion que le pasamos
    callback(resultado); // Le pasamos a la funcion los datos en mayuscula como argumento
}

procesarDatos("hola mundo", resultado => {
    console.log("Resultado: ", resultado); // Resultado:  HOLA MUNDO
});


// Ejemplo 2 con un temporizador
setTimeout(() => {
    console.log("Esto se ejecuta despues de 1 segundo");
}, 1000); // Aca el primer parametro es una funcion y el segundo define los milisegundos que demora en ejecutarse


/* En JavaScript las funciones son tratadas como "ciudadanos de primera clase" o "first class citizens", 
lo que significa que las funciones pueden:
    - Ser asignadas a variables
    - Ser pasadas como argumentos
    - Ser retornadas desde otras funciones
*/

// Ejemplo 3 asignando una funcion a una variable
let miCallback = function() {
    console.log("Callback ejecutado")
}

// Le pasamos esta funcion como argumenot
function ejecutarCallback(callback) { // nombrar callback al parametro que recibe una funcion es una convencion
    // Aca se ejecuta cualquier cosa

    // Finalmente, se ejecuta la otra funcion
    callback(); // Invocamos la funcion que imprime por consola "Callback ejecutado"
}

ejecutarCallback(miCallback); // Aca le pasamos nuestra funcion guardada en una variable, como argumento a otra funcion


// DESCOMENTEN ESTA LINEA PARA JUGAR Y COMPRENDER COMO FUNCIONA EL HILO PRINCIPAL DE EJECUCION
/*
// Callback sincrono -> Trabamos el hilo de ejecucion principal hasta que terminen 50.000 vueltas de bucle

function procesoPesado(callback) {

    console.log("Iniciando proceso"); // Paso 1

    // Simulamos un procesamiento pesado
    for (let i = 0; i < 3000; i++) {
        console.log("Iteracion"); // Paso 2 (lleva tiempo)
    }

    callback(); // Aca finalmente, se imprime (Proceso sincrono completado)
}


procesoPesado(function() { // Definimos la funcion que le pasamos como argumento a procesoPesado
    console.log("Proceso sincrono completado");
});


setTimeout(() => console.log("Esto se ejecuta despues de 3 segundos"), 3000);

// setInterval(() => console.log("Esto se ejecuta cada segundo"), 1000);
*/

// Callback asincrono -> NO detiene el hilo de ejecucion principal
function procesoAsincrono(callback) {
    console.log("Iniciando proceso asincrono..."); // Primer mensaje, se imprime de inmedianto

    setTimeout(function() { // Esta operacion asincronica (timer) se aparta del hilo principal y se corre en paralelo
        callback(); // Tercer mensaje, se imprime en la consola pasados 2 seugndos
    }, 2000); // Pasados 2 segundos, ejecuta la funcion que le pasamos como parametro
}

procesoAsincrono(function() {
    console.log("Proceso asincrono de 2 segundos completado");
});

console.log("Esto se ejecuta inmeditamente"); // Segundo mensaje, se imprime justo despues del primero


/*========================================
    Casos de uso comunes de callbacks
========================================*/

///////////////////////////////
// 1. Temporizadores o timers
// setTimeout (se ejecuta una sola vez)
setTimeout(() => {
    console.log("Esto se ejecuta despues de 3 segundos");
}, 3000);


// setInterval (se ejecuta repetidamente)
let contador = 0;
let intervalo = setInterval(function() {
    contador++;

    console.log(`Contador: ${contador}`);
    
    if(contador === 5) {
        clearInterval(intervalo);
    }
}, 500);


//////////////////////
// 2. Eventos del DOM
let miBoton = document.getElementById("miBoton");

miBoton.addEventListener("click", function(event) {
    console.log("Boton clickeado", event.target);
});


//////////////////////////////
// 3. Operaciones con arrays
let numeros = [1, 2, 3, 4, 5];

// forEach
numeros.forEach(function(numero, indice) {
    console.log(`Indice: ${indice}, valor: ${numero}`);
});


// map ->  numeros.map(numero => numero * 2)
let duplicados = numeros.map(function(numero) {
    return numero * 2;
});

console.log(duplicados);


// filter -> numeros.filter(numero => numero % 2 === 0);
let pares = numeros.filter(function(numero) {
    return numero % 2 === 0;
});
console.log(pares);


//////////////////////
// 4. Peticiones HTTP -> Ver los ejemplos con la api fetch()


//////////////////////////////////////
// 5. Lectura de archivos con Node.js -> Ejemplo con el modulo fs de Node.js


/* Problemas con los callbacks

    - Callback hell: Un anidamiento muy dificil de leer

    - Flujo de control: Dificil de seguir con operaciones complejas

    - Manejo de errores: Se hace complicado con callbacks anidados


/////////////////////////
Callback Hell
/////////////////////////

Ocurre cuando tenemos muchas funciones anidadas dentro de otras, especialmente al hacer tareas asincronicas. JavaScript maneja operaciones asincronicas con callbacks: funciones que se ejecutan despues de que otra funcion termina

El codigo se vuelve dificil de leer, dificil de mantener y facil de romper.

Si no lo manejamos bien, terminamos con una esctructura asi:

Ejemplo de Hadouken de Ryu o Pyramid of Doom
https://blog.da2k.com.br/uploads/2015/03/hadouken.jpg
*/

// Cada setTimeout depende del anterior. El codigo funciona pero es feo y poco manejable
setTimeout(() => {
    console.log("Paso 1");

    setTimeout(() => {
        console.log("Paso 2");

        setTimeout(() => {
            console.log("Paso 3");
            
            setTimeout(() => {
                console.log("Paso 4");
            }, 1000);

        }, 1000);

    }, 1000);

}, 1000);


/* Como solucionamos el callback hell y ordenamos el codigo asincrono?

Vamos a hacer que una cosa se ejecute ordenadamente despues de otra, usando alternativas modernas a los callbacks:

    - Promises
    - async/await (Promises modernas)
*/


// Vamos a consumir una API Rest con Promises, encadenando ordenadamente la operacion asincronica

// 1. Primero, traigo los datos JSON de esta URL
fetch("https://jsonplaceholder.typicode.com/users")

    // 2. Una vez obtenidos estos datos en crud, los transformamos a objetos JS
    .then(response => response.json())

    // 3. Ahora con estos datos ya convertidos, los imprimo por consola
    .then(data => console.table(data))

    // 4. En caso de saltar algun error en alguno de estos pasos previos, lo capturamos y lo mostramos aca
    .catch(error => console.error(error));





// Vamos a consumir otra API Rest con async/await, una sintaxis mas moderna para trabajar con promesas
async function obtenerDatos() {

    try {
        
        // 1. Traigo el choclo en texto plano JSON y DETENGO la ejecucion del codigo hasta que esto se resuelva o de error
        let response = await fetch("https://jsonplaceholder.typicode.com/posts");
        // Aca imprimimos la promesa
        // let response = await (fetch("https://jsonplaceholder.typicode.com/posts")).json();
        console.log(response);
        
        // 2. Obtenido el choclo JSON, lo transformo a objetos JavaScript
        let data = await response.json();
        
        // 3. Ya con el JSON parseado a Objectos JS, lo puedo manipular 
        console.table(data);
        
        
        // 4. En caso de haber error, salta y se captura acá, para mostrarse por consola
    } catch(error) {
        console.error(error);
    }
}

obtenerDatos();




/* TO DO: 

- Destructuring
- Spread operator
- Funciones anidadas
- Closures
- High Order Function
- Estudiar que son las HOF y su diferencia con los callbacks
- Web APIs
*/

/*===========================
    High Order Functions
=============================

Una High Order Function o Funcion de Alto Nivel es una funcion que cumple al menos una de estas dos condiciones
    1. Recibe una o mas funciones como argumentos (map, filter, reduce)
    2. Devuelve una funcion como resultado


Ventajas de las HOF

    - Reduccion de codigo repetitivo
    - Mayor legibilidad y expresividad
    - Composicion funcional: podemos encadenar transformaciones como map().filter().reduce()
*/

console.log("Funciones de Alto Nivel");


// Ejemplo 1: Recibe una funcion
// let numeros = [1, 2, 3, 4, 5];

const cuadrados = numeros.map(n => n* n);
console.log(cuadrados);


// Ejemplo 2: Devuelve una funcion
function multiplicador(factor) {
    return function (x) {
        return x * factor;
    }
}

const duplicar = multiplicador(2);
console.log(duplicar(5));


/* =================================
    Relacion entre Callbacks y HOF
====================================

    - Callback es la funcion que se pasa como argumento
    - HOF es la funcion que recibe o devuelve funciones
    - Ambas estan relacionadas pero no son equivalentes: Un callback es usando dentro de una HOF, pero no todas la HOF usan callbacks explicitamente (porque pueden devolver funciones en lugar de recibirlas)



=====================================
    Desmenuzando el ejemplo de map
=====================================

    let numeros = [1, 2, 3, 4, 5];

    const cuadrados = numeros.map(n => n* n);


1. map es un metodo de array y tambien es una High Order Function (HOF)
Se llama HOF porque recibe como argumento otra funcion

2. Esa funcion que recibe se ejecuta una vez por cada elemento del array
A esa funcion que recibe la llamamos callback


El callback de esta funcion es
    n => n * n

Es una funcion flecha con parametro "n"
Es el equivalente a escribirlo con function

    function(n) {
        return n * n
    }


Por dentro, map hace algo parecido a esto

function map(array, callback) {
    const nuevoArray = []
    // Recordemos las formas que teniamos de hacer estos metodos a mano tanto con for clasico como con forEach
}

Lo que termina resultando es

    - Iteracion 1 => 1 * 1 = 1
    - Iteracion 2 => 2 * 2 = 4

El callback en nuestro ejemplo es la funcion flecha 
    n => n * n

que map invoca internamente para cada elemento en el array
*/


// Ejemplo de HOF que acepta una funcion callback
function highOrderFunction(callback) {
    // Ejecuta x operaciones
    console.log("Ejecutando la funcion de alto nivel..");

    // Llama a la funcion callback
    callback();
}

function funcionCallback() {
    console.log("Ejecutando la funcion callback");
}

// Llamamos a la HOF con la funcion callback como argumento
highOrderFunction(funcionCallback);


// High Order Function comunes en JavaScript

// forEach: Recorre todos los elementos de un array y ejecuta una funcion sobre cada uno
numeros.forEach(function(num) {
    console.log(num * 2);
});

// map: Crea un nuevo array aplicando una funcion a cada elemento del array original
const alCuadrado = numeros.map(x => x ** 2);
console.log(alCuadrado);

// filter: Crea un nuevo array con los elementos que cumplen una condicion
const numerosPares = numeros.filter(n => n % 2 === 0);
console.log(numerosPares);