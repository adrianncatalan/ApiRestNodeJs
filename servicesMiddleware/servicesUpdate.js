//Creamos una función middleware para actualizar un servicio de nuestra tabla registro_servicios de nuestra base de datos
const actualizar_servicio = (req, res, connection) => {

    const { id } = req.params;

    const { tipo_servicio, descripcion } = req.body;

    const result = req.body;

    const sql = `UPDATE registro_servicios SET tipo_servicio = "${tipo_servicio}", descripcion= "${descripcion}" WHERE id_servicio = "${id}"`;

    connection.query(sql, error => {

        if (error) throw error;

        // res.send('Servicio actualizado exitosamente.');

        res.json(result);

    });

}

//Exportamos el bloque de código que permite actualizar los servicios de la base de datos
module.exports.actualizar_servicio = actualizar_servicio;