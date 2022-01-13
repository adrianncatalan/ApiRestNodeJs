//Creamos una constante que requiere el fichero  de la conexión a la base de datos 
const connection = require('../dataBaseConnection/connection.js');

//Ejecutamos nuestra constante y con la notación del '.' podemos accionar nuestra función que es la conexión a la base de datos
connection.dataBase();

//Creamos un endpoint para agregar usuarios a nuestra tabla registro_usuarios en nuestra base de datos
app.post('/agregar_usuario', (req, res) => {

    //res.send('Nuevo usuario'); --> Código de prueba del funcionamiento del endpoint

    const sql = 'insert into registro_usuarios set ?';

    const usuario_obj = {

        id_usuario: req.body.id_usuario,

        nombre: req.body.nombre,

        apellido: req.body.apellido,

        telefono: req.body.telefono,

        email: req.body.email,

        clave: req.body.clave,

        contacto_emergencia: req.body.contacto_emergencia,

        fecha_alta: req.body.fecha_alta,

        cantidad_vehiculos: req.body.cantidad_vehiculos,

        departamento: req.body.departamento,

        cargo: req.body.cargo,

        administrador: req.body.administrador
    };

    connection.query(sql, usuario_obj, error => {

        if (error) throw error;

        res.send('Usuario creado.');

    });

}); 