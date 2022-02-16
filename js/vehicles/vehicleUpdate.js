window.addEventListener("load", () => {
  const btnAdd = document.getElementById("btnAdd");

  btnAdd.addEventListener("click", () => {
    // const id_usuario = document.getElementById("idUser");
    const placa = document.getElementById("placa");
    const marca = document.getElementById("marca");
    const modelo = document.getElementById("modelo");
    // 10.192.240.4 192.168.1.161
    fetch(`http://10.192.240.4:3050/actualizar_vehiculo/${placa.value}`, {
      method: "PUT",
      mode: "cors",
      body: JSON.stringify({
        placa: placa.value,
        marca: marca.value,
        modelo: modelo.value,
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
        text.textContent = `Error al modificar el vehículo. Los datos ingresados son erroneos.`;
        text.className = "textUpdateError";
        fragment.append(text);
        document.getElementById("mensaje").append(fragment);
        window.location.reload();
      })

      // .then((response) => console.log("Success:", response));
      .then((response) => {
        let fragment = document.createDocumentFragment();
        let text = document.createElement("h2");
        text.textContent = `Vehículo modificado exitosamente con ID ${placa.value}`;
        text.className = "textUpdateConfirmar";
        fragment.append(text);
        document.getElementById("mensaje").append(fragment);
        // id_usuario.value = "";
        placa.value = "";
        marca.value = "";
        modelo.value = "";
      });
  });
});