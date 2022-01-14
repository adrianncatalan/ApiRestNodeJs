//Creamos una constante que requiere el fichero  de la conexión a la base de datos 
const connection = require('../dataBaseConnection/connection.js');

//Ejecutamos nuestra constante y con la notación del '.' podemos accionar nuestra función que es la conexión a la base de datos
connection.dataBase();

//Creamos un endpoint para agregar usuarios a nuestra tabla registro_usuarios en nuestra base de datos
app.post('/agregar_servicio', (req, res) => {

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

}); 