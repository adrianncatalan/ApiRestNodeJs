window.addEventListener('load', () => {

    const btnIdUser = document.getElementsByClassName('button_submit')[0];

    btnIdUser.addEventListener('click', () => {
        
        // 10.192.240.4
        fetch('http://192.168.1.161:3050/lista_servicios')

            .then(response => response.ok ? Promise.resolve(response) : Promise.reject(response))

            .then(response => response.json())

            .then(response => {

                const table = document.getElementById('tBody');

                const fragment = document.createDocumentFragment();

                for (let i = 0; i < response.length; i++) {

                    const tr = document.createElement('tr');

                    for (const dataUsers in response[i]) {

                        if (dataUsers != 'clave') {

                            const td = document.createElement('td');

                            td.textContent = `${response[i][dataUsers]}`;

                            tr.append(td);

                            fragment.append(tr)
                        }

                        table.prepend(fragment);

                    }

                }

                btnIdUser.value = "Cerrar lista de usuarios";

            });

    });

    btnIdUser.addEventListener('click', () => {

        if (btnIdUser.value === "Cerrar lista de usuarios") {

            window.location.reload();
        }
    })

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




