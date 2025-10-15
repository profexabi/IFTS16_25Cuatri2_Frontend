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

    - Eventos de formulario: sumbit, change, input, focus

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

// TODO: proxima clase terminamos de ver la propagacion de eventos
// TODO: Hacer muestra para consumir datos de una API Rest y crear un HTML dinamico en JavaScript y renderizarlo en el documento