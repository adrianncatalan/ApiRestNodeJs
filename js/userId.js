window.addEventListener('load', () => {

    const btnIdUser = document.getElementsByClassName('button_submit')[0];

    const idUser = document.getElementsByClassName('form_input')[0];

    btnIdUser.addEventListener('click', () => {

        fetch('http://192.168.56.1:3050/filtrar_id_usuario/' + idUser.value)

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

                btnIdUser.value = "Cerrar información del usuario";

            });

    });

    btnIdUser.addEventListener('click', () => {

        if (btnIdUser.value === "Cerrar información del usuario") {

            window.location.reload();
        }
        
    });

});