//Creamos una constante que requiere el fichero  de la conexión a la base de datos 
const connection = require('../dataBaseConnection/connection.js');

//Ejecutamos nuestra constante y con la notación del '.' podemos accionar nuestra función que es la conexión a la base de datos
connection.dataBase();

//Creamos un endpoint y mostramos todos los usuarios registrados en la tabla de nuestra base de datos registro_usuarios
app.get('/lista_vehiculos', (req, res) => {

    //res.send('Lista de usuarios'); --> Código de prueba del funcionamiento del endpoint
    const sql = 'SELECT * FROM registro_vehiculos';

    connection.query(sql, (error, results) => {

        if (error) throw error;

        if (results.length > 0) {

            res.json(results);

        } else {

            res.send('No hay registros de vehiculos en la base de datos.')
        }

    });

});