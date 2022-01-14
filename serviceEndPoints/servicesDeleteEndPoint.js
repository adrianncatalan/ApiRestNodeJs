//Creamos una constante que requiere el fichero  de la conexión a la base de datos 
const connection = require('../dataBaseConnection/connection.js');

//Ejecutamos nuestra constante y con la notación del '.' podemos accionar nuestra función que es la conexión a la base de datos
connection.dataBase();

//Creamos un endpoint para eliminar un usuario en particular en la tabla registro_usuarios de nuestra base de datos 
app.delete('/eliminar_servicio/:id', (req, res) => {

    //res.send('Eliminar servicio'); --> Código de prueba del funcionamiento del endpoint

    const { id } = req.params;

    const sql = `DELETE FROM registro_servicios WHERE id_servicio = '${id}'`;

    connection.query(sql, error => {

        if (error) throw error;

        res.send('Servicio eliminado exitosamente.')

    });

});