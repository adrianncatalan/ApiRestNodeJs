//Creamos una función middleware para agregar servicios a nuestra tabla registro_servicios en nuestra base de datos
const agregar_servicio = (req, res, connection) => {

    const sql = 'INSERT INTO registro_servicios SET ?';

    console.log(req.body.id_servicio)
    const servicio_obj = {

        id_servicio: req.body.id_servicio,

        placa: req.body.placa,

        tipo_servicio: req.body.tipo_servicio,

        descripcion: req.body.descripcion,

        fecha: req.body.fecha,

    };

    const result = servicio_obj;

    connection.query(sql, servicio_obj, error => {

        if (error) throw error;

        // res.send('Servicio creado exitosamente.');
        
        res.json(result);

    });

}

//Exportamos el bloque de código que permite agregar el servicio
module.exports.agregar_servicio = agregar_servicio;