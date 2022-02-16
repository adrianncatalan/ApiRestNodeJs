window.addEventListener("load", () => {
  const btnAdd = document.getElementById("btnAdd");

  btnAdd.addEventListener("click", () => {
    const id_servicio = document.getElementById("id_servicio");
    const tipo_servicio = document.getElementById("tipo_servicio");
    const descripcion = document.getElementById("descripcion");
// 10.192.240.4
    fetch(`http://192.168.1.161:3050/actualizar_servicio/${id_servicio.value}`, {
      method: "PUT",
      mode: "cors",
      body: JSON.stringify({
        tipo_servicio: tipo_servicio.value,
        descripcion: descripcion.value,
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
        text.textContent = `Error al modificar el servicio. Los datos ingresados son erroneos.`;
        text.className = "textUpdateError";
        fragment.append(text);
        document.getElementById("mensaje").append(fragment);
        window.location.reload();
      })

      // .then((response) => console.log("Success:", response));
      .then((response) => {
        let fragment = document.createDocumentFragment();
        let text = document.createElement("h2");
        text.textContent = `Servicio modificado exitosamente con ID ${id_servicio.value}`;
        text.className = "textUpdateConfirmar";
        fragment.append(text);
        document.getElementById("mensaje").append(fragment);
        id_servicio.value = "";
        tipo_servicio.value = "";
        descripcion.value = "";
      });
  });
});