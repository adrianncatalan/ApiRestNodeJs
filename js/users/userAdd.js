window.addEventListener("load", () => {
  const btnAdd = document.getElementById("btnAdd");

  btnAdd.addEventListener("click", () => {
    const id_usuario = document.getElementById("idUser");
    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellido");
    const telefono = document.getElementById("telefono");
    const email = document.getElementById("email");
    const clave = document.getElementById("clave");
    const contacto_emergencia = document.getElementById("contEmer");
    const cantidad_vehiculos = document.getElementById("cantVeh");
    const fecha_alta = document.getElementById("date");
    const departamento = document.getElementById("depa");
    const cargo = document.getElementById("cargo");
    const administrador = document.getElementById("admin");
// 10.192.240.4
    fetch("http://192.168.1.161:3050/agregar_usuario", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify({
        id_usuario: id_usuario.value,
        nombre: nombre.value,
        apellido: apellido.value,
        telefono: telefono.value,
        email: email.value,
        clave: clave.value,
        contacto_emergencia: contacto_emergencia.value,
        fecha_alta: fecha_alta.value,
        cantidad_vehiculos: cantidad_vehiculos.value,
        departamento: departamento.value,
        cargo: cargo.value,
        administrador: administrador.value,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText());
        }

        return response;
      })
      .then((res) => res.json())
      // .catch((error) => console.error("Error:", error))
      .catch((error) => {
        
        let fragment = document.createDocumentFragment();
        let text = document.createElement("h2");
        text.textContent = `Error al insertar usuario. El usuario existe o los datos ingresados son erroneos.`;
        text.className = "textAddError";
        fragment.append(text);
        document.getElementById("mensaje").append(fragment);
        window.location.reload();
      })

      // .then((response) => console.log("Success:", response));
      .then((response) => {
        let fragment = document.createDocumentFragment();
        let text = document.createElement("h2");
        text.textContent = `Usuario creado exitosamente con ID ${id_usuario.value}`;
        text.className = "textAddConfirmar";
        fragment.append(text);
        document.getElementById("mensaje").append(fragment);

        id_usuario.value = "";
        nombre.value = "";
        apellido.value = "";
        telefono.value = "";
        email.value = "";
        clave.value = "";
        contacto_emergencia.value = "";
        cantidad_vehiculos.value = "";
        fecha_alta.value = "";
        departamento.value = "";
        cargo.value = "";
        administrador.value = "";
      });
  });
});