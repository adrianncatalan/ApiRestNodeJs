//Creamos un endpoint para eliminar un usuario en particular en la tabla registro_usuarios de nuestra base de datos 
const eliminar_usuario = (req, res, connection) => {

    //res.send('Eliminar usuario'); --> Código de prueba del funcionamiento del endpoint

    const { id } = req.params;

    const sql = `DELETE FROM registro_usuarios WHERE id_usuario = "${id}"`;

    connection.query(sql, error => {

        if (error) throw error;

        res.send('Usuario eliminado exitosamente.')

    });
    
}

//Exportamos el bloque de código que permite consultar y mostrar a todos los usuarios de la base de datos
module.exports.eliminar_usuario = eliminar_usuario;