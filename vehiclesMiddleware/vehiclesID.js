//Creamos una función middleware para mostrar un vehículo filtrado por ID de nuestra tabla registro_vehiculos de nuestra base de datos
const filtrar_id_vehiculo = (req, res, connection) => {

    const { id } = req.params;

    const sql = `SELECT * FROM registro_vehiculos WHERE id_usuario = "${id}"`;

    connection.query(sql, (error, result) => {

        if (error) throw error;

        if (result.length > 0) {

            res.json(result);

        } else {

            res.send('No hay registros en la base de datos con ese ID de usuario.')
        }

    });

}

//Exportamos el bloque de código que permite mostrar un vehículo filtrado por ID
module.exports.filtrar_id_vehiculo = filtrar_id_vehiculo;