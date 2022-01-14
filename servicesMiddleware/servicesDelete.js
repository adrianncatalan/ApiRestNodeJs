//Creamos una función middleware para eliminar un servicio en particular en la tabla registro_servicios de nuestra base de datos 
const eliminar_servicio = (req, res, connection) => {

    const { id } = req.params;

    const sql = `DELETE FROM registro_servicios WHERE id_servicio = '${id}'`;

    connection.query(sql, error => {

        if (error) throw error;

        res.send('Servicio eliminado exitosamente.')

    });

}

//Exportamos el bloque de código que permite eliminar un determinado servicio filtrado por ID
module.exports.eliminar_servicio = eliminar_servicio;