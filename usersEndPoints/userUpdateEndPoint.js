//Creamos un endpoint para actualizar usuarios a nuestra tabla registro_usuarios de nuestra base de datos
const actualizar_usuario = (req, res, connection) => {

    //res.send('Actualizar usuario'); --> Código de prueba del funcionamiento del endpoint

    const { id } = req.params;

    const { telefono, email, contacto_emergencia } = req.body;

    const sql = `UPDATE registro_usuarios SET telefono = '${telefono}', email= '${email}', contacto_emergencia= '${contacto_emergencia}' WHERE id_usuario = '${id}'`;

    connection.query(sql, error => {

        if (error) throw error;

        res.send('Usuario actualizado exitosamente.')

    });

}

//Exportamos el bloque de código que permite consultar y mostrar a todos los usuarios de la base de datos
module.exports.actualizar_usuario = actualizar_usuario;