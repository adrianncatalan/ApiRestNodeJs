//Creamos una función middleware para mostrar un servicio en particular filtrado por ID de nuestra tabla registro_servicios de nuestra base de datos
const filtrar_id_servicio = (req, res, connection) => {

    const { id } = req.params;

    const sql = `SELECT * FROM registro_servicios WHERE id_servicio = "${id}"`;

    connection.query(sql, (error, result) => {

        if (error) throw error;

        if (result.length > 0) {

            res.json(result);

        } else {

            res.send('No hay registros en la base de datos con ese ID de usuario.')
        }

    });

}

//Exportamos el bloque de código que permite mostrar un servicio filtrado por ID
module.exports.filtrar_id_servicio = filtrar_id_servicio;
