//Creamos una constante que requiere el fichero  de la conexión a la base de datos 
const connection = require('../dataBaseConnection/connection.js');

//Ejecutamos nuestra constante y con la notación del '.' podemos accionar nuestra función que es la conexión a la base de datos
connection.dataBase();

//Creamos un endpoint para actualizar usuarios a nuestra tabla registro_usuarios de nuestra base de datos
app.put('/actualizar_vehiculo/:id', (req, res) => {

    //res.send('Actualizar usuario'); --> Código de prueba del funcionamiento del endpoint

    const { id } = req.params;

    const { marca, modelo } = req.body;

    const sql = `UPDATE registro_vehiculos SET marca = "${marca}", modelo= "${modelo}" WHERE id_usuario = "${id}"`;

    connection.query(sql, error => {

        if (error) throw error;

        res.send('Vehículo actualizado exitosamente.')

    });

});