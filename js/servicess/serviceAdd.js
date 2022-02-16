window.addEventListener("load", () => {
  const btnAdd = document.getElementById("btnAdd");

  btnAdd.addEventListener("click", () => {
    const id_servicio = document.getElementById("id_servicio");
    const placa = document.getElementById("placa");
    const tipo_servicio = document.getElementById("tipo_servicio");
    const descripcion = document.getElementById("descripcion");
    const fecha_alta = document.getElementById("date");
// 10.192.240.4 192.168.1.161
    fetch("http://10.192.240.4:3050/agregar_servicio", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify({
        id_servicio: id_servicio.value,
        placa: placa.value,
        tipo_servicio: tipo_servicio.value,
        descripcion: descripcion.value,
        fecha_alta: fecha_alta.value,
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
        text.textContent = `Error al insertar el servicio. El servicio existe o los datos ingresados son erroneos.`;
        text.className = "textAddError";
        fragment.append(text);
        document.getElementById("mensaje").append(fragment);
        window.location.reload();
      })

      // .then((response) => console.log("Success:", response));
      .then((response) => {
        let fragment = document.createDocumentFragment();
        let text = document.createElement("h2");
        text.textContent = `Servicio creado exitosamente con ID ${id_servicio.value}`;
        text.className = "textAddConfirmar";
        fragment.append(text);
        document.getElementById("mensaje").append(fragment);

        id_servicio.value = "";
        placa.value = "";
        tipo_servicio.value = "";
        descripcion.value = "";
        fecha_alta.value = "";
      });
  });
});