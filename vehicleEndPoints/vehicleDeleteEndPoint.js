//Creamos una constante que requiere el fichero  de la conexión a la base de datos 
const connection = require('../dataBaseConnection/connection.js');

//Ejecutamos nuestra constante y con la notación del '.' podemos accionar nuestra función que es la conexión a la base de datos
connection.dataBase();

//Creamos un endpoint para eliminar un usuario en particular en la tabla registro_usuarios de nuestra base de datos 
app.delete('/eliminar_vehicle/:id', (req, res) => {

    //res.send('Eliminar vehículo'); --> Código de prueba del funcionamiento del endpoint

    const { id } = req.params;

    const sql = `DELETE FROM registro_vehiculos WHERE id_usuario = "${id}"`;

    connection.query(sql, error => {

        if (error) throw error;

        res.send('Vehículo eliminado exitosamente.')

    });
    
});