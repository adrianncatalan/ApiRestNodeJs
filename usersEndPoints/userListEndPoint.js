//Creamos un endpoint y mostramos todos los usuarios registrados en la tabla de nuestra base de datos registro_usuarios
app.get('/lista_usuarios', (req, res) => {

    //res.send('Lista de usuarios'); --> Código de prueba del funcionamiento del endpoint
    const sql = 'SELECT * FROM registro_usuarios';

    connection.query(sql, (error, results) => {

        if (error) throw error;

        if (results.length > 0) {

            res.json(results);

        } else {

            res.send('No hay registros de usuarios en la base de datos.')
        }

    });

});