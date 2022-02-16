//Creamos una función middleware y mostramos todos los vehículos en la tabla de nuestra base de datos registro_vehiculos
const lista_vehiculos = (req, res, connection) => {

    const sql = 'SELECT * FROM registro_vehiculos';

    connection.query(sql, (error, results) => {

        if (error) throw error;

        if (results.length > 0) {

            return res.json(results);

        } else {

            return res.send('No hay registros de vehiculos en la base de datos.')
        }

    });

}

//Exportamos el bloque de código que permite consultar y mostrar todos los vehículos de la base de datos
module.exports.lista_vehiculos = lista_vehiculos;