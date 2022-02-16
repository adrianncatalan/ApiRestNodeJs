window.addEventListener("load", () => {
  const btnAdd = document.getElementById("btnAdd");

  btnAdd.addEventListener("click", () => {
    const id_usuario = document.getElementById("idUser");
// 10.192.240.4 192.168.1.161
    fetch(`http://10.192.240.4:3050/eliminar_vehiculo/${id_usuario.value}`, {
      method: "DELETE",
      mode: "cors",
      body: JSON.stringify(),
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
        text.textContent = `Error al eliminar el vehículo. Los datos ingresados son erroneos.`;
        text.className = "textDeleteError";
        fragment.append(text);
        document.getElementById("mensaje").append(fragment);
        window.location.reload();
      })

      // .then((response) => console.log("Success:", response));
      .then((response) => {
        let fragment = document.createDocumentFragment();
        let text = document.createElement("h2");
        text.textContent = `Vehículo eliminado exitosamente con ID ${id_usuario.value}`;
        text.className = "textDeleteConfirmar";
        fragment.append(text);
        document.getElementById("mensaje").append(fragment);
        id_usuario.value = "";
      });
  });
});
