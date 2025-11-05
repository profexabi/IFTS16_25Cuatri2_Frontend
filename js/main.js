/*======================
    Callbacks
========================

1. Los callbacks son funciones que se pasan como argumentos a otras funciones 
2. y se ejecutan despues de que ocurra algun evento o se complete alguna operacion 
*/

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



/*=====================
    Destructuring
=======================

El destructuring o desestructuracion es una sintaxis que permite extraer valores de arrays o propiedades de objetos y asignaros a variables de forma concisa

Es una forma de descomponer estructuras de datos como arrays y objetos en variables individuales sin necesidad de acceder manualmente a cada elemento o propiedad

Entre sus ventajas destacamos
    - Mejora la legibilidad del codigo
    - Facilita el acceso rapido a datos de estructuras complejas
    - Reduce la verbosidad (menos lineas para obtener exactamente lo mismo)
    - Nos permite escribir codigo mas limpio, mas corto y mas claro
*/

// Con arrays
// Sin destructuring
let nums = [1, 2, 3];
let uno = nums[0];
let dos = nums[1];

// Con destructuring
let [primero, segundo] = nums;
console.log(primero); // 1
console.log(segundo); // 2


// Con objetos
// Sin destructuring
let persona = {nombre: "Marcos", edad: 30};
let nom = persona.nombre;
let ed = persona.edad;

// Con destructuring
// let persona = {nombre: "Marcos", edad: 30};
let { nombre, edad } = persona;
console.log(nombre); // Marcos
console.log(edad); // 30

// Usando destructuring en parametros de funcion
function saludar({nombre, edad}) {
    console.log(`Hola ${nombre}, tenes ${edad} años`);
}

saludar(persona); // Hola Marcos, tenes 30 años


// Destructuring con valores omitidos
let [prim, ,terc] = [10, 20, 30];
console.log(prim, terc); // 10 30


/*======================
    Spread operator
========================

El Spread Operator o Operador de propagacion "..."
Es una sintaxis introducida en ES6 que permite descomponer elementos iterables como arrays, strings y objetos en elementos individuales

Su principal funcion es copiar, combinar o expandir estructuras de datos de forma eficiente
*/

// Copia superficial o Shallow Copy
let original = [1, 2, 3];
let copia = [...original];
console.log(copia); // [1, 2, 3]

/* Shallow Copy o Copia superficial en JavaScript

Una copia superficial en JavaScript crea un nuevo objeto o matriz que copia las propiedades de nivel superior del original, pero los objetos o matrices anidados dentro de él siguen haciendo referencia a las mismas ubicaciones de memoria que el original. Esto significa que los cambios en las propiedades anidadas de la copia afectarán al objeto original, ya que comparten las mismas referencias. Métodos comunes como la sintaxis de propagación (`... `), `Object.assign()`, `Array.prototype.slice()`, `Array.prototype.concat()` y `Array.from()` producen copias superficiales

    - Las copias superficiales solo duplican las propiedades de nivel superior; los objetos o matrices anidados no se copian de forma recursiva, por lo que sus referencias siguen siendo compartidas

    - Reasignar propiedades de nivel superior en la copia no afecta al objeto original, pero modificar propiedades de objetos anidados en la copia reflejará los cambios en el original

    - Este comportamiento puede provocar efectos secundarios no deseados, especialmente en estructuras de datos complejas o en la gestión de estados, lo que hace necesarias las copias profundas cuando se requiere una independencia completa entre objetos

    - Aunque la copia superficial es más rápida y utiliza menos memoria, no es adecuada para situaciones en las que la inmutabilidad de los datos es fundamental
*/

// Concatenacion de arrays, mas eficiente que .concat()
let arr1 = [1, 2];
let arr2 = [3, 4];
let combinado = [...arr1, ...arr2];
console.log(combinado); // [1, 2, 3, 4]


// Convertimos strings en arrays sin usar split('')
let string = "Holis";
let caracteres = [...string];
console.log(caracteres); // (5) ['H', 'o', 'l', 'i', 's']


// Combinacion de objetos
let defaults = { tema: "oscuro", fontSize: 14 };
let userSettings = { fontSize: 18 };
let finalConfig = {...defaults, ...userSettings };
console.log(finalConfig);


/*========================
    Funciones anidadas
==========================

Una funcion anidada es simplemente una funcion definida dentro de otra funcion
Es decir, mas tecnicamente, una funcion interna que vive en el ambito lexico (scope) de una funcion externa. Es decir, una funcion anidada es una funcion que:

    - Se declara dentro de otra funcion
    - Tiene acceso a TODAS las variables y parametros de su funcion externa
    - Puede ser utilizada para organizar mejor el codigo, modularizar la logica o crear closures

Las funciones anidadas heredan el entorno lexico (lexical scope) de la funcion que las contiene. Heredan las variables de la funcion externa
*/

// Ejemplo 1
function saluditos(nombre) {
    function construirMensaje() {
        return `Hola holiiita, ${nombre}`;
    }

    return construirMensaje();
}

console.log(saluditos("veciniiito")); // Hola holiiita veciniiito


// Ejemplo 2, agrupando llamadas iniciales
function obtenerData() {
    console.log("Recibiendo data con un fetch");
}

function haciendoAlgo() {
    console.log("Haciendo una cosa");
}

function calculandoCoso() {
    console.log("Calculando el indice de lkajsdlkqj ldkjas");
}

// La funcion init centraliza todas las llamadas iniciales de una app en una llamada unica
function init() {
    obtenerData();
    haciendoAlgo();
    calculandoCoso();
}

init(); // De esta forma solo hacemos una unica llamada


// Ejemplo 3, organizando el codigo, para que en lugar de hacer una gran funcion, definamos sub-funciones internas para modularizar la logica
function procesarTexto(texto) {

    function limpiar(t) {
        return t.trim().toLowerCase();
    }

    function contarPalabras(t) {
        return t.split(/\s+/).length; // Este REGEX nos permite contar todos los espacios, sean de uno, dos, tres o mas espacios
    }

    let textoLimpiado = limpiar(texto);

    return contarPalabras(textoLimpiado);
}

console.log(procesarTexto("        Hola   holiiita veciniiito               como       va?          "));


// TO DO, ejemplo de 2. Funciones "helper" privadas. 

// TO DO, ejemplo 3: Generacion de Closures


/* TO DO: 
- Closures
- Estudiar que son las HOF y su diferencia con los callbacks
- Web APIs
*/