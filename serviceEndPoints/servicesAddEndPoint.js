//Creamos un endpoint para agregar usuarios a nuestra tabla registro_usuarios en nuestra base de datos
const agregar_servicio = (req, res) => {

    //res.send('Nuevo servicio'); --> Código de prueba del funcionamiento del endpoint

    const sql = 'INSERT INTO registro_servicios SET ?';

    const servicio_obj = {

        id_servicio: req.body.service.idService,

        placa: req.body.service.enrollment,

        tipo_servicio: req.body.service.type,

        descripcion: req.body.service.describe,

        fecha: req.body.service.date

    };

    connection.query(sql, servicio_obj, error => {

        if (error) throw error;

        res.send('Servicio creado exitosamente.');

    });

}

//Exportamos el bloque de código que permite agregar el servicio
module.exports.agregar_servicio = agregar_servicio;