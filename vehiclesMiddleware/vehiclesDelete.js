//Creamos una función middleware para eliminar un vehículo filtrado por ID en la tabla registro_vehiculos de nuestra base de datos 
const eliminar_vehiculo = (req, res, connection) => {

    const { id } = req.params;

    const sql = `DELETE FROM registro_vehiculos WHERE id_usuario = "${id}"`;

    connection.query(sql, error => {

        if (error) throw error;

        res.send('Vehículo eliminado exitosamente.')

    });

}

//Exportamos el bloque de código que permite eliminar un determinado vehículo filtrado por ID
module.exports.eliminar_vehiculo = eliminar_vehiculo;