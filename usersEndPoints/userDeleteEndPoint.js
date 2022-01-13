require("../databaseConnection/connection");

//Creamos un endpoint para eliminar un usuario en particular en la tabla registro_usuarios de nuestra base de datos 
app.delete('/eliminar_usuario/:id', (req, res) => {

    //res.send('Eliminar usuario'); --> Código de prueba del funcionamiento del endpoint

    const { id } = req.params;

    const sql = `DELETE FROM registro_usuarios WHERE id_usuario = "${id}"`;

    connection.query(sql, error => {

        if (error) throw error;

        res.send('Usuario eliminado.')

    });
    
});