//Creamos una función middleware para agregar servicios a nuestra tabla registro_servicios en nuestra base de datos
const agregar_servicio = (req, res) => {

    const sql = 'INSERT INTO registro_servicios SET ?';

    const servicio_obj = {

        id_servicio: req.body.service.id_servicio,

        placa: req.body.service.placa,

        tipo_servicio: req.body.service.tipo_servicio,

        descripcion: req.body.service.descripcion,

        fecha: req.body.service.fecha

    };

    connection.query(sql, servicio_obj, error => {

        if (error) throw error;

        res.send('Servicio creado exitosamente.');

    });

}

//Exportamos el bloque de código que permite agregar el servicio
module.exports.agregar_servicio = agregar_servicio;