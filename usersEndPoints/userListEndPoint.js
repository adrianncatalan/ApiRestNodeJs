//Creamos un endpoint y mostramos todos los usuarios registrados en la tabla de nuestra base de datos registro_usuarios
const lista_usuarios = (req, res, connection) => {

    //res.send('Lista de usuarios'); --> Código de prueba del funcionamiento del endpoint

    const sql = 'SELECT * FROM registro_usuarios';

    connection.query(sql, (error, results) => {

        if (error) throw error;

        if (results.length > 0) {

            return res.json(results);

        } else {

            return res.send('No hay registros de usuarios en la base de datos.')
        }

    });
}

//Exportamos el bloque de código que permite consultar y mostrar a todos los usuarios de la base de datos
module.exports.lista_usuarios = lista_usuarios;