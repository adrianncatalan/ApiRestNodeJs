//Creamos una función middleware para agregar vehiculos de nuestra tabla registro_vehiculos en nuestra base de datos
const agregar_vehiculo = (req, res, connection) => {

    const sql = 'insert into registro_vehiculos set ?';

    const vehiculo_obj = {

        id_usuario: req.body.id_usuario,

        marca: req.body.vehicle.marca,

        modelo: req.body.vehicle.modelo,

        placa: req.body.vehicle.placa,

        fecha_alta: req.body.vehicle.fecha_alta,

    };

    connection.query(sql, usuario_obj, error => {

        if (error) throw error;

        res.send('Vehículo creado exitosamente.');

    });

}

//Exportamos el bloque de código que permite agregar el vehículo
module.exports.agregar_vehiculo = agregar_vehiculo;