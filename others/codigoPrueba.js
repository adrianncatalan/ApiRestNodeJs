// function dataBaseConnection() {

//     //Creamos una constante para hacer un require a la dependencia MySql, ya que nuestra base de datos es de tipo MySql
//     const mysql = require('mysql');

//     //Creamos una constante para almacenar los parametros de nuestra base de datos
//     const connection = mysql.createConnection({

//         host: 'localhost',

//         user: 'root',

//         password: '',

//         database: 'db_taller',
//         port: "3050"

//     });

//     //Check connect --> Chequeando conexión
//     connection.connect((error) => {

//         if (error) throw error;

//         console.log('Servidor de base de datos en funcionamiento');
        
//     });
    
//     return connection;

// }

// dataBaseConnection();

// //Exportamos nuestra modulo que contiene la conexión a la base de datos y así puede ser utilizado eo requerido en donde sea necesario
// module.exports.dataBase = dataBaseConnection;

// const conexion = () => {
//     let mysql = require('mysql');

//     let con = mysql.createConnection({
//     host: "localhost",
//     port: "3306",
//     user: "root",
//     password: "",
//     database : 'db_taller'
//     });

//     con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     });

//     return con;
// }

// exports.conexion = conexion 