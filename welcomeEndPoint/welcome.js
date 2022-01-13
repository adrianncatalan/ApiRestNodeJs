require("../databaseConnection/connection").connection;

//Creamos un endpoint de bienvenida para probar nuestra conexión
const saludo = () => {

    return 'Bienvenid@s a mi API desarrollada en NodeJs';

}

exports.saludo = saludo;

// app.get('/', (req, res) => {

//     res.send('Bienvenid@s a mi API desarrollada en NodeJs')

// });