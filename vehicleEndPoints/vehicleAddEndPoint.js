//Creamos una constante que requiere el fichero  de la conexión a la base de datos 
const connection = require('../dataBaseConnection/connection.js');

//Ejecutamos nuestra constante y con la notación del '.' podemos accionar nuestra función que es la conexión a la base de datos
connection.dataBase();

//Creamos un endpoint para agregar usuarios a nuestra tabla registro_usuarios en nuestra base de datos
app.post('/agregar_vehiculo', (req, res) => {

    //res.send('Nuevo vehículo'); --> Código de prueba del funcionamiento del endpoint

    const sql = 'insert into registro_vehiculos set ?';

    const vehiculo_obj = {

        id_usuario: req.body.vehicle.idUser,

        marca: req.body.vehicle.brand,

        modelo: req.body.vehicle.model,

        placa: req.body.vehicle.enrollment,

        fecha_alta: req.body.vehicle.date,

    };

    connection.query(sql, usuario_obj, error => {

        if (error) throw error;

        res.send('Vehículo creado exitosamente.');

    });

}); 