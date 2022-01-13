 //Creamos un endpoint para mostrar un usuario en particular filtrado por ID de nuestra tabla registro_usuarios de nuestra base de datos
app.get('/registro_usuarios/:id', (req, res) => {

    //res.send('Tomar usuario por ID'); --> Código de prueba del funcionamiento del endpoint
    const { id } = req.params;

    const sql = `SELECT * FROM registro_usuarios WHERE id_Usuario = "${id}"`;

    connection.query(sql, (error, result) => {

        if (error) throw error;

        if (result.length > 0) {

            res.json(result);

        } else {

            res.send('No hay registros en la base de datos con ese ID de usuario.')
        }

    });

});
