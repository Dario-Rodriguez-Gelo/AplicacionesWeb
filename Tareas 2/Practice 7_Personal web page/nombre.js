// Primero miramos si existe el nombre, si no existe lo pedimos y guardamos, si si existe lo ignoramos.
let nombre = sessionStorage.getItem("name");
        if (!nombre){
            nombre = prompt("Hi! Please, enter your name");
            sessionStorage.setItem("name", nombre);
        }

// Esto crea una pequeña lista que pilla todos los userName que haya en la página, y los reemplaza por nombre
    let todos = document.querySelectorAll(".userName");
    todos.forEach(todos => {
        todos.textContent=nombre;
    })

// La etiqueta <span class="userName"></span> es la que lo integra en html. Lo que hace la etiqueta span es integrar script de javascript, y userName es la class