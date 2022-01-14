//Creamos una constante que requiere el fichero  de la conexión a la base de datos 
const connection = require('../dataBaseConnection/connection.js');

//Ejecutamos nuestra constante y con la notación del '.' podemos accionar nuestra función que es la conexión a la base de datos
connection.dataBase();

//Creamos un endpoint y mostramos todos los usuarios registrados en la tabla de nuestra base de datos registro_usuarios
app.get('/lista_servicios', (req, res) => {

    //res.send('Lista de servicios'); --> Código de prueba del funcionamiento del endpoint
    const sql = 'SELECT * FROM registro_servicios';

    connection.query(sql, (error, results) => {

        if (error) throw error;

        if (results.length > 0) {

            res.json(results);

        } else {

            res.send('No hay registros de usuarios en la base de datos.')
        }

    });

});