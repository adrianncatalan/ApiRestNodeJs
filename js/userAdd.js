window.addEventListener('load', () => {

    const btnIdUser = document.getElementsByClassName('button_submit')[0];

    const idUser = document.getElementById('idUser')
    const nombre = document.getElementById('nombre');
    const apellido = document.getElementById('apellido');
    const telefono = document.getElementById('telefono');
    const email = document.getElementById('email');
    const clave = document.getElementById('clave');
    const contEmer = document.getElementById('contEmer');
    const fecha = document.getElementById('date');
    const cantVeh = document.getElementById('cantVeh');
    const depa = document.getElementById('depa');
    const cargo = document.getElementById('cargo');
    const admin = document.getElementById('admin');

    btnIdUser.addEventListener('click', () => {

        console.log(idUser.value)

        let obj = {
            idUser: idUser.value,
            nombre: nombre.value,
            apellido: apellido.value,
            telefono: telefono.value,
            email: email.value,
            clave: clave.value,
            contEmer: contEmer.value,
            fecha: fecha.value,
            catch: cantVeh.value,
            depa: depa.value,
            cargo: cargo.value,
            admin: admin.value
        }

        fetch('http://192.168.56.1:3050/agregar_usuario/obj', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json; charset-UTF-8'
            },
            body: JSON.stringify(obj)

        })

            .then(response => response.ok ? Promise.resolve(response) : Promise.reject(response))

            .then(response => response.json())

            .then(response => {

                console.log(response)

                // const table = document.getElementById('tBody');

                // const fragment = document.createDocumentFragment();

                // for (let i = 0; i < response.length; i++) {

                //     const tr = document.createElement('tr');

                //     for (const dataUsers in response[i]) {

                //         const td = document.createElement('td');

                //         td.textContent = `${response[i][dataUsers]}`;

                //         tr.append(td);

                //         fragment.append(tr)

                //     }

                // }

                // table.prepend(fragment);

                // btnIdUser.value = "Cerrar lista de usuarios";

            });

    });

    // btnIdUser.addEventListener('click', () => {

    //     if (btnIdUser.value === "Cerrar lista de usuarios") {

    //         window.location.reload();
    //     }
    // })

});