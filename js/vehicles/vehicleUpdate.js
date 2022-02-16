window.addEventListener("load", () => {
  const btnAdd = document.getElementById("btnAdd");

  btnAdd.addEventListener("click", () => {
    const id_usuario = document.getElementById("idUser");
    const telefono = document.getElementById("telefono");
    const email = document.getElementById("email");
    const contacto_emergencia = document.getElementById("contEmer");

    fetch(`http://10.192.240.4:3050/actualizar_usuario/${id_usuario.value}`, {
      method: "PUT",
      mode: "cors",
      body: JSON.stringify({
        telefono: telefono.value,
        email: email.value,
        contacto_emergencia: contacto_emergencia.value,
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
        text.textContent = `Error al modificar usuario. Los datos ingresados son erroneos.`;
        text.className = "textUpdateError";
        fragment.append(text);
        document.getElementById("mensaje").append(fragment);
        window.location.reload();
      })

      // .then((response) => console.log("Success:", response));
      .then((response) => {
        let fragment = document.createDocumentFragment();
        let text = document.createElement("h2");
        text.textContent = `Usuario modificado exitosamente con ID ${id_usuario.value}`;
        text.className = "textUpdateConfirmar";
        fragment.append(text);
        document.getElementById("mensaje").append(fragment);
        id_usuario.value = "";
        telefono.value = "";
        email.value = "";
        contacto_emergencia.value = "";
      });
  });
});