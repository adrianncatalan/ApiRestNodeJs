//Creamos una función middleware para mostrar un usuario y su información vehícular filtrado por ID de nuestra tabla registro_usuarios y registro_vehiculos
const filtrar_id_usuario_vehiculo = (req, res, connection) => {

    const { id } = req.params;

    // const sql = `SELECT * FROM registro_usuarios users,  FULL JOIN registro_vehiculos vehiculos ON "users.id_usuario" && "vehiculos.id_usuario" = '${id}'`;

    // const sql = `SELECT * FROM registro_usuarios WHERE "registro_usuarios.id_usuario" = ${id}`;

    const sql = `SELECT * FROM registro_usuarios, registro_vehiculos WHERE registro_usuarios.id_usuario  AND registro_vehiculos.id_usuario = "${id}"`;

    connection.query(sql, (error, result) => {

        if (error) throw error;

        if (result.length > 0) {

            res.json(result);

        } else {

            res.send('No hay registros en la base de datos con ese ID de usuario.')
        }

    });

}

//Exportamos el bloque de código que permite mostrar un usuario con su información vehícular
module.exports.filtrar_id_usuario_vehiculo = filtrar_id_usuario_vehiculo;