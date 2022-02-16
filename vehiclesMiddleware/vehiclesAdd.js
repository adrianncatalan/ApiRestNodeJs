//Creamos una función middleware para agregar vehiculos de nuestra tabla registro_vehiculos en nuestra base de datos
const agregar_vehiculo = (req, res, connection) => {

    const sql = 'insert into registro_vehiculos set ?';

    console.log(req.body.id_usuario)
    const vehiculo_obj = {

        id_usuario: req.body.id_usuario,

        marca: req.body.marca,

        modelo: req.body.modelo,

        placa: req.body.placa,

        fecha_alta: req.body.fecha_alta,

    };

    const result = vehiculo_obj;

    connection.query(sql, vehiculo_obj, error => {

        if (error) throw error;

        // res.send('Vehículo creado exitosamente.');

        res.json(result);

    });

}

//Exportamos el bloque de código que permite agregar el vehículo
module.exports.agregar_vehiculo = agregar_vehiculo;