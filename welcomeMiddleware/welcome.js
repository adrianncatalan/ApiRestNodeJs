//Creamos nuestra primera función flecha con dos parámetros que realiza una petición y una respuesta
const welcome = (req, res) => {

    res.send('Bienvenid@s a mi API desarrollada con NodeJs');

}

//Exportamos nuestro bloque de código que muestra un mensaje de bienvenida
module.exports.welcome = welcome;