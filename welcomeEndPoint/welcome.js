//Creamos una constante que requiere el fichero  de la conexión a la base de datos 
const connection = require('../dataBaseConnection/connection.js');

//Ejecutamos nuestra constante y con la notación del '.' podemos accionar nuestra función que es la conexión a la base de datos
connection.dataBase();

//Creamos un endpoint para mostrar un saludo en la parte del cliente para comprobar que todo haya ido bien
const saludo = () => {

    app.get('/', (req, res) => {

        res.send('Bienvenid@s a mi API desarrollada en NodeJs');

    });

}