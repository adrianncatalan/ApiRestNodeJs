//Creamos una función middleware para mostrar los datos del usuario según ID
const data_user = (req, res, connection) => {

    const { id } = req.params;

    const sql = `SELECT * FROM registro_usuarios where id_usuario = '${id}'`;

    connection.query(sql, (error, result) => {

        if (error) throw error;

        if (result.length > 0) {

            res.json(result);

        } else {

            res.send('No hay registros en la base de datos con ese ID de usuario.')
        }

    });

}

//Exportamos el bloque de código que permite mostrar los datos del usuario
module.exports.data_user = data_user;