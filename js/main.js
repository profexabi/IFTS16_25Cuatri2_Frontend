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
    {nombre: "Juan", edad: 30, ocupacion: "chofer"},
    {nombre: "Carla", edad: 35, ocupacion: "arquitecta"},
    {nombre: "Lautaro", edad: 35, ocupacion: "diseñador"}
];

// Ejemplo de iteracion

personas.forEach(persona => console.log(persona));