# IFTS16_25Cuatri2_Frontend

## Avisos cursada -> **Fechas presenciales de la materia**
- **12 noviembre**. Presentacion Portfolio, TPO
    - *Mostrar alguna pagina o idea de referencia (idealmente)* con la que armaron un portfolio HTML, CSS y con JS opcional
    - Idealmente diseñar algo propio y original o copiar algo que nos gustó
    

- **19 noviembre**. Presentacion TP Grupal
    - En grupos de 4-5 personas, presentar una pagina que consuma informacion de una API Rest
    - Busquen informacion de una API Rest, clima, cotizaciones, eventos culturales, ble
    - Tambien, opcional, pueden scrapear una web, usando, por ejemplo Axios

---

## Notas cursada
- Chusmear `Call Stack` y `Event Loop`!

---

### Tareas EXTRA -> Conocer conceptual y teoricamente como funciona internet

1. [Playlist de web de Todocode](https://www.youtube.com/watch?v=lC6JOQLIgp0&list=PLQxX2eiEaqbxx6Ds5bd1F6LZJo7_OnZhV)
    - Arquitectura cliente servidor
    - Protocolo HTTP
    - Opcional, librerias y frameworks
    - Que es JSON
    - Que son las APIs

2. [Protocolo HTTP y lenguaje HTML](https://www.youtube.com/watch?v=l6oF_RpBf64)

---

### EXTRA, consumiendo una API Rest

#### Que es `fetch()`?
Es una funcion incorporada en los navegadores modernos que permite realizar peticiones HTTP, de forma asincrona y utilizando promesas

- Devuelve un objeto Promise que se resuelve con un objeto Response
- Utiliza el estandar HTTP con metodos como GET, POST, PUT, DELETE
- Funciona muy bien con async/await
- Es mas limpia que el viejo metodo XMLHTTPRequest
- Soporta CORS, cabeceras, envio de JSON y mas

```js
fetch(url, options) // Envia una solicitud HTTP
    .then(response => response.json) // Maneja la respuesta "cruda" del servidor y la convierte a objetos JS
    .then(data => console.log(data))
    .catch(error => console.error(error));


/*==============================================
    Consumiendo informacion de una API Rest
==============================================*/


// OPCION 1: Utilizando Promesas y encadenando con .then

// Hacemos una solicitud a esta URL para traer todo el choclo de datos en JSON
fetch("https://jsonplaceholder.typicode.com/users")

    // Convertimos el texto plano JSON en objetos JavaScript
    .then(response => response.json()) 

    // Una vez que tenemos procesados nuestros datos, los mostramos por consola
    .then(data =>  {
        console.table(data);
        
    });

// OPCION 2: Usar la sintaxis mas moderna para trabajar con promesas

```
---

## JavaScript VIII EXTRA / Consumiendo una API Rest y renderizando los resultados por pantalla
```js
// Variables globales
let contenedorApi = document.getElementById("contenedorApi");
let contenedorAlbums = document.getElementById("contenedorAlbums")

/*==============================================
    Consumiendo informacion de una API Rest
==============================================*/

// OPCION 1: Trabajando con promesas y encadenando con .then()

// Hacemos una solicitud a esta URL para traer todo el choclo de datos en JSON
fetch("https://jsonplaceholder.typicode.com/users")

    // Convertimos el texto plano JSON en objetos JavaScript
    .then(response => response.json()) 

    // Una vez que tenemos procesados nuestros datos, los mostramos por consola
    .then(data => {
        console.table(data)
        
        let cartaPersona = ``;

        data.forEach(p => {
            cartaPersona += `
                <ul class="lista-data">
                    <li>Nombre: ${p.name}</li>
                    <li>Apodo: ${p.username}</li>
                    <li>Correo: ${p.email}</li>
                    <li>Celu: ${p.phone}</li>
                </ul>
            `;
        });

        console.log(cartaPersona); // Una vez que creamos dinamicamente este HTML nuevo con los datos de la API, vamos a renderizarlo en la pagina

        contenedorApi.innerHTML = cartaPersona
    })

    .catch(error => console.log(error));


// OPCION 2: Utilizando una solucion mas moderna, async/await
async function obtenerAlbumes() {

    // El codigo que puede fallar, como el de una peticion HTTP, lo metemos en el bloque try
    try {
        // Hacemos una solicitud a esta URL para traer todo el choclo de datos en JSON
        const res = await fetch("https://jsonplaceholder.typicode.com/albums"); // Aca el codigo se detiene hasta que esto se resuelva

        // Convertimos el texto plano JSON en objetos JavaScript
        const data = await res.json();

        // Una vez que tenemos procesados nuestros datos, los mostramos por consola
        console.log(data);

        mostrarAlbums(data);

    } catch(error) {
        console.error("Se produjo un error", error);
    }
}

obtenerAlbumes();


function mostrarAlbums(data) {
    let htmlAlbums = "";

    data.forEach(album => {
        htmlAlbums += `
            <ul class="lista-data album">
                <li>Id: ${album.id}</li>
                <li>Titulo: ${album.title}</li>
            </ul>
        `;
    });

    contenedorAlbums.innerHTML = htmlAlbums;   
}
```

---


## JavaScript VII / High order functions, destructuring, spread operator, closures, funciones anidadas, callbacks, web apis
```js
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
```

---

## JavaScript VI / Manipulacion del DOM en JavaScript y Eventos

### [Que es el DOM en Javascript?](https://www.w3schools.com/whatis/whatis_htmldom.asp)
- DOM (Document Object Model) o Modelo de Objeto de Documento es una representacion en memoria de la estructura de una pagina web

- Cada etiqueta html es un nodo en el DOM

- El DOM permite que JavaScript modifique el contenido, la estructura y el estilo de una pagina

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Document</title>
    </head>
    
    <body>
        <h1>Bienvenidos</h1>
        <p>Esto es un parrafo</p>
    </body>
</html>

<!-- En el DOM, esta pagina se representaria con el siguiente diagrama

- document
    - html
        - head
            - title
        - body
            - h1
            - p
 -->
```

#### `document` es un objeto global
- El objeto global `document` es la representacion en JavaScript del documento HTML cargado en el navegador, acutando como punto de entrada al contenido de la pagina web y al arbol del Modelo de Objetos del Documento DOM.

- Este objeto proporciona funcionalidad global para el documento, permitiendo acceder y manipular elementos, propiedades y metodos relacionados con la pagina, como obtener la URL del documento, o crear nuevos elementos.

- JavaScript puede acceder y modificar cualquier elemento del DOM utilizando el objeto global `document`, esto es gracias a las Web APIs (que veremos en JavaScript VII). JavaScript puede
    - Modificar el contenido (textos, atributos, clases)
    - Añadir o eliminar elementos del DOM
    - Escuchar eventos del usuario (clicks, teclas, etc)


```js
console.log(document);
console.log(console);

/*===================
    getElementById
=====================
- Este metodo selecciona un unico elemento por su ID.
- Solo selecciona el primer elemento que coincida con el ID
*/

let titulo = document.getElementById("titulo");
console.log(titulo); // <h1 id="titulo">Introduccion a JavaScript</h1>
console.log(titulo.textContent); //Introduccion a JavaScript


/*===================
    querySelector
=====================

- querySelector: Selecciona el primer elemento que coincida con un selector CSS (.clase, #id o etiqueta)
- querySelectorAll: Selecciona TODOS los elementos que coincida con un selector CSS (.clase, #id o etiqueta). Devuelve algo parecido a un array, una NodeList (array de nodos), interno del DOM
*/

let primerParrafo = document.querySelector(".mensaje");
console.log(primerParrafo.textContent); // Primer parrafo

let parrafos = document.querySelectorAll(".mensaje");
console.log(parrafos); // NodeList(2) [p.mensaje, p.mensaje]

parrafos.forEach(parrafo => console.log(parrafo.textContent));


/*=====================================
    Modificar contenido y atributos
=======================================

- textContent: Modificar el texto dentro de un elemento

- innerHTML: Modificar el contenido HTML dentro de un elmento

- setAttribute(): Modifica los atributos de un elemento

- style: Permite cambiar el estilo CSS en linea de un elemento
*/

let miParrafo = document.getElementById("miParrafo");

// Cambiamos el texto
miParrafo.textContent = "Soy el nuevo texto creado desde JS";

// Modificar el contenido HTML introduciendo etiquetas
miParrafo.innerHTML = "<strong>Texto en negrita</strong>";



let miBoton = document.getElementById("miBoton");
// Cambiar el atributo id
miBoton.setAttribute("id", "nuevoId");

miBoton.style.backgroundColor = "green";
miBoton.style.color = "white";
miBoton.style.padding = "5px";



/*=====================================
    Eventos en JavaScript
=======================================
Los eventos en JavaScript permiten a los desarrolladores detectar interacciones del usuario con la pagina web, como hacer click en un boton, mover el mouse, escribir en un campo de texto, etc

Los eventos son clave para que la pagina web sea interactiva

Tecnicamente un evento es una señal que se envia cuando ocurre una interaccion o cambio en el documento. JavaScript permite escuchar estos eventos y ejecutar funciones especificas cuando ocurren

    - Eventos de mouse: click, dbclick, mouseover, mouseout, mousemove
    
    - Eventos de teclado: keydown, keyup, keypress (deprecado)

    - Eventos de formulario: submit, change, input, focus

    - Eventos de ventana: resize, scroll, load, unload


Para manejar eventos, tenemos que "escuchar" estas interacciones.
Para esto, tenemos el metodo addEventListener() que le adjunta una funcion a un evento especifico en un elemento. Este es un proceso que queda permanentemente escuchando (ejecutandose)




*/

miBoton.addEventListener("click", function() {
    console.log("Hiciste click!");
});

// Aca mostramos por consola el valor de un campo de texto cuando termino de escribir un caracter
let input = document.getElementById("input");
input.addEventListener("keyup", function() {
    console.log(input.value); 
});

// Escuchar el evento de pulsacion de tecla 
let nuevoInput = document.getElementById("nuevoInput");
nuevoInput.addEventListener("keydown", function(event) { // -> event lo incluiremos en la funcion cuando necesitemos informacion o metodos del evento

    // event es un objeto que contiene todos los datos del evento que ocurrio: que tecla, que boton, etc

    console.log(`Tecla presionada: ${event.key}`);
    console.log(`Codigo de tecla: ${event.code}`);
});



/*=============================
    Propagacion de eventos
===============================

Cuando ocurre un evento, este se propaga a traves del DOM en dos fases:

    - Fase de captura (de arriba hacia abajo)
    - Fase de burbuja (de abajo hacia arriba)

Podemos detener la propagacion de un evento usando el metodo event.stopPropagation()
*/

let padre = document.querySelector("#padre");
let hijo = document.getElementById("hijo");


// Vamos a escuchar el click en el div padre
padre.addEventListener("click", function() {
    console.log("Se hizo click en el div padre");
});

// Vamos a escuchar el click en el boton hijo
hijo.addEventListener("click", function(event) {
    event.stopPropagation(); // Detengo la propagacion
    console.log("Se hizo click en el boton hijo");
});


let miForm = document.getElementById("miForm");
miForm.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Formulario no enviado!");
});
```

---


## JavaScript V / Objetos globales. Almacenamiento persistente, iteracion en arrays, iteracion en objetos e iteracion en arrays de objetos

```js
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

/* De fondo estamos haciendo esto

let numerosCuadrados = [];
numeros.map(function(num) {
    numerosCuadrados.push(num * num)
})
*/

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

/*==================
    for...of
====================

    for (const elemento of array) {
        console.log(elemento)
        if(elemento === "stop") {
            break;
        }
    }

    - Ventajas: Sintaxis limpia, permite break y continue
    - Desventajas: No provee indice automatico
*/


const empleados = [
    { nombre: "Ana", salario: 3000, rol: "user" },
    { nombre: "Nico", salario: 3500, rol: "admin"   },
    { nombre: "Yamila", salario: 4000, rol: "user"  }
];

for (let emp of empleados) {
    if(emp.salario > 3500) {
        console.log(`${emp.nombre} cobra mas de 3500`);
        break; // for...of nos permite salir el bucle al encontrar el primer empleado con esa condicion
    } 
}

/*==========================
    some() y every()
============================

    const algunoCumple = array.some(elemento => elemento > 0);
    const todosCumple = array.every(elemento => elemento > 0);

- Proposito: Verifican si alguno/todos cumplen una condicion
- Retorna: Booleano
*/

let existeAdmin = empleados.some(empleado => empleado.rol === "admin");
console.log(existeAdmin); // true

let todosArribaTresLucas = empleados.every(empleado => empleado.salario > 3000);
console.log(todosArribaTresLucas); // false
```

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
// Documentacion: https://www.w3schools.com/jsref/jsref_splice.asp
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

