//Creamos una función middleware para actualizar un servicio de nuestra tabla registro_servicios de nuestra base de datos
const actualizar_usuario = (req, res, connection) => {

    const { id } = req.params;

    const { tipo_servicio, descripcion } = req.body;

    const sql = `UPDATE registro_servicios SET nombre = "${tipo_servicio}", apellido= "${descripcion}" WHERE id_servicio = "${id}"`;

    connection.query(sql, error => {

        if (error) throw error;

        res.send('Servicio actualizado exitosamente.')

    });

}

//Exportamos el bloque de código que permite actualizar los servicios de la base de datos
module.exports.actualizar_usuario = actualizar_usuario;