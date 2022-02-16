window.addEventListener("load", () => {
  const btnAdd = document.getElementsByClassName("button_submit")[0];
console.log(btnAdd)
  btnAdd.addEventListener("click", () => {
    const id_servicio = document.getElementsByClassName("form_input")[0];
// 10.192.240.4 192.168.1.161
    fetch(`http://10.192.240.4:3050/eliminar_servicio/${id_servicio.value}`, {
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
        text.textContent = `Error al eliminar el servicio. Los datos ingresados son erroneos.`;
        text.className = "textDeleteError";
        fragment.append(text);
        document.getElementById("mensaje").append(fragment);
        window.location.reload();
      })

      // .then((response) => console.log("Success:", response));
      .then((response) => {
        let fragment = document.createDocumentFragment();
        let text = document.createElement("h2");
        text.textContent = `Servicio eliminado exitosamente con ID ${id_servicio.value}`;
        text.className = "textDeleteConfirmar";
        fragment.append(text);
        document.getElementById("mensaje").append(fragment);
        id_usuario.value = "";
      });
  });
});
