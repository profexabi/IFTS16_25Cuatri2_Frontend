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