window.addEventListener('load', () => {

    var url = 'http://10.192.240.4:3050/data_user/acd0004';

    fetch(url, {

        method: 'GET',

        mode: 'cors',

        headers: {

            'Accept': 'application/json',

            'Content-Type': 'application/json'
                 
        }

    })

        .then(response => response.json())

        .then(dataUser => mostrarDataUser(dataUser))

        .catch(error => console.error(error))

    const mostrarDataUser = (dataUser) => {

        console.log(dataUser[0].nombre);

    }

});

// fetch("http://192.168.56.1:3000/usuarios", {
//             method: 'GET',
//             mode: 'cors',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json'
//             }
//         })
//             .then(response => {
//                 if (!response.ok) {
//                     throw Error(response.statusText);
//                 }
//                 return response;
//             })
//             .then(response => {
//                 return response.json()
//             })
//             .then(listaUsuarios => {
//                 let divUsuarios = document.getElementById("divUsuarios");
//                 listaUsuarios.forEach(usuario => {
//                     let tabla = document.createElement("table");
//                     for (const key in usuario) {
//                         if (key != "pass") {
//                             let fila = document.createElement("tr");
//                             let columna = document.createElement("td");
//                             columna.textContent = usuario[key];
//                             fila.appendChild(columna);
//                             tabla.appendChild(fila);
//                         }
//                     }
//                     divUsuarios.appendChild(tabla)
//                 });

//              });