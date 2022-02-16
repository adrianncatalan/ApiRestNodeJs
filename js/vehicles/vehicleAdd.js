window.addEventListener("load", () => {
  const btnAdd = document.getElementById("btnAdd");

  btnAdd.addEventListener("click", () => {
    const id_usuario = document.getElementById("id_usuario");
    const marca = document.getElementById("marca");
    const modelo = document.getElementById("modelo");
    const placa = document.getElementById("placa");
    const fecha_alta = document.getElementById("date");
    
// 10.192.240.4 192.168.1.161
    fetch("http://10.192.240.4:3050/agregar_vehiculo", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify({
        id_usuario: id_usuario.value,
        marca: marca.value,
        modelo: modelo.value,
        placa: placa.value,
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
        text.textContent = `Error al insertar vehículo. El vehículo existe o los datos ingresados son erroneos.`;
        text.className = "textAddError";
        fragment.append(text);
        document.getElementById("mensaje").append(fragment);
        window.location.reload();
      })

      // .then((response) => console.log("Success:", response));
      .then((response) => {
        let fragment = document.createDocumentFragment();
        let text = document.createElement("h2");
        text.textContent = `Vehículo creado exitosamente con ID ${id_usuario.value}`;
        text.className = "textAddConfirmar";
        fragment.append(text);
        document.getElementById("mensaje").append(fragment);

        id_usuario.value = "";
        marca.value = "";
        modelo.value = "";
        placa.value = "";
        fecha_alta.value = "";
        
      });
  });
});