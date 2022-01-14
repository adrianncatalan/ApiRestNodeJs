//Creamos una función middleware para mostrar un usuario en particular filtrado por ID de nuestra tabla registro_usuarios de nuestra base de datos
const filtrar_id_usuario = (req, res, connection) => {

    const { id } = req.params;

    const sql = `SELECT * FROM registro_usuarios WHERE id_usuario = "${id}"`;

    connection.query(sql, (error, result) => {

        if (error) throw error;

        if (result.length > 0) {

            res.json(result);

        } else {

            res.send('No hay registros en la base de datos con ese ID de usuario.')
        }

    });

}

//Exportamos el bloque de código que permite consultar y mostrar a un usuario filtrado por ID de la base de datos
module.exports.filtrar_id_usuario = filtrar_id_usuario;