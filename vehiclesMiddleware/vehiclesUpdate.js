//Creamos una función middleware para actualizar los vehículos de nuestra tabla registro_vehiculos de nuestra base de datos
const actualizar_vehiculo = (req, res, connection) => {

    const { id } = req.params;

    const { marca, modelo } = req.body;

    const result = req.body;

    const sql = `UPDATE registro_vehiculos SET marca = "${marca}", modelo = "${modelo}" WHERE placa = "${id}"`;

    connection.query(sql, error => {

        if (error) throw error;

        // res.send('Vehículo actualizado exitosamente.');

        res.json(result);

    });

}

//Exportamos el bloque de código que permite actualizar los vehículos de la base de datos
module.exports.actualizar_vehiculo = actualizar_vehiculo;