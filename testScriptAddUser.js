const crear = () => {
  let form = document.getElementById("form_crear");
  fetch("http://127.0.0.1:3000/create_user", {
    method: "POST",
    mode: "cors",
    body: JSON.stringify({
      nombre: form.nombre.value,
      apel: form.apellidos.value,
      dni: form.dni.value,
      pass: form.pass.value,
    }),
    headers: { Accept: "application/json", "Content-Type": "application/json" },
  })
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    })
    .then((res) => res.json())
    .catch((error) => console.error("Error:", error))
    .then((response) => console.log("Success:", response));
};
