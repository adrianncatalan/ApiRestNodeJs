//Creamos una constante que requiere el fichero  de la conexión a la base de datos 
const connection = require('../dataBaseConnection/connection.js');

//Ejecutamos nuestra constante y con la notación del '.' podemos accionar nuestra función que es la conexión a la base de datos
connection.dataBase();

//Creamos un endpoint para agregar usuarios a nuestra tabla registro_usuarios en nuestra base de datos
app.post('/agregar_vehiculo', (req, res) => {

    //res.send('Nuevo usuario'); --> Código de prueba del funcionamiento del endpoint

    const sql = 'insert into registro_vehiculos set ?';

    const vehiculo_obj = {

        id_usuario: req.body.id_usuario,

        marca: req.body.marca,

        modelo: req.body.modelo,

        placa: req.body.placa,

        fecha_alta: req.body.fecha_alta,

    };

    connection.query(sql, usuario_obj, error => {

        if (error) throw error;

        res.send('Usuario creado.');

    });

}); 