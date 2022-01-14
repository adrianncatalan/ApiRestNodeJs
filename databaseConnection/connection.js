//Creamos una función para guardar nuestra conexión de la base de datos

function dataBaseConnection() {

    //Creamos una constante para hacer un require a la dependencia MySql, ya que nuestra base de datos es de tipo MySql
    const mysql = require('mysql');

    //Creamos una constante para almacenar los parametros de nuestra base de datos
    const connection = mysql.createConnection({

        host: 'localhost',

        user: 'root',

        password: '',

        database: 'db_taller',

        port: "3306"

    });

    //Check connect --> Chequeando conexión
    connection.connect((error) => {

        if (error) throw error;

        console.log('Servidor de base de datos en funcionamiento exitosamente.');
        
    });
    
    return connection;

}

//Exportamos nuestra modulo que contiene la conexión a la base de datos y así puede ser utilizado eo requerido en donde sea necesario
module.exports.dataBaseConnection = dataBaseConnection;