 ////Creamos un endpoint para actualizar usuarios a nuestra tabla registro_usuarios de nuestra base de datos
app.put('/actualizar_usuario/:id', (req, res) => {

    //res.send('Actualizar usuario'); --> Código de prueba del funcionamiento del endpoint

    const { id } = req.params;

    const { nombre, apellido } = req.body;

    const sql = `UPDATE registro_usuarios SET nombre = "${nombre}", apellido= "${apellido}" WHERE id_usuario = "${id}"`;

    connection.query(sql, error => {

        if (error) throw error;

        res.send('Usuario actualizado.')

    });

});