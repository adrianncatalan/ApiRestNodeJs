//Creamos una función middleware y mostramos todos los servicios registrados en la tabla de nuestra base de datos registro_servicios
const lista_servicios = (req, res, connection) => {

    const sql = 'SELECT * FROM registro_servicios';

    connection.query(sql, (error, results) => {

        if (error) throw error;

        if (results.length > 0) {

            res.json(results);

        } else {

            res.send('No hay registros de usuarios en la base de datos.')
        }

    });

}

//Exportamos el bloque de código que permite consultar y mostrar todos los servicios de la base de datos
module.exports.lista_servicios = lista_servicios;