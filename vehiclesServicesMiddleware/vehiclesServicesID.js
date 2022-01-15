//Creamos una función middleware para mostrar la información vehícular y servicios filtrado por ID de usuario de nuestra tabla registro_vehiculos y registro_servicios 
const filtrar_id_vehiculo_servicio = (req, res, connection) => {

    const { id, id_servicio } = req.params;

    const sql = `SELECT * FROM registro_vehiculos regVeh, registro_servicios regServ WHERE regVeh.id_usuario = '${id}' AND regServ.id_servicio = ${id_servicio}`;

    connection.query(sql, (error, result) => {

        if (error) throw error;

        if (result.length > 0) {

            res.json(result);

        } else {

            res.send('No hay registros en la base de datos con ese ID de usuario.')
        }

    });

}

//Exportamos el bloque de código que permite mostrar la información vehícular y servicio filtrado por ID de usuario
module.exports.filtrar_id_vehiculo_servicio = filtrar_id_vehiculo_servicio;


