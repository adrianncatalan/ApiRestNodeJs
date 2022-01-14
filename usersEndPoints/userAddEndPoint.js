//Creamos una constante que requiere el fichero  de la conexión a la base de datos 
const connection = require('../dataBaseConnection/connection.js');

//Ejecutamos nuestra constante y con la notación del '.' podemos accionar nuestra función que es la conexión a la base de datos
connection.dataBase();

//Creamos un endpoint para agregar usuarios a nuestra tabla registro_usuarios en nuestra base de datos
app.post('/agregar_usuario', (req, res) => {

    //res.send('Nuevo usuario'); --> Código de prueba del funcionamiento del endpoint

    const sql = 'insert into registro_usuarios set ?';

    const usuario_obj = {

        id_usuario: req.body.user.idUser,

        nombre: req.body.user.name,

        apellido: req.body.user.surname,

        telefono: req.body.user.phone,

        email: req.body.user.email,

        clave: req.body.user.password,

        contacto_emergencia: req.body.user.emergencyContactPhone,

        fecha_alta: req.body.user.date,

        cantidad_vehiculos: req.body.user.numbersVehicles,

        departamento: req.body.user.department,

        cargo: req.body.user.position,

        administrador: req.body.user.admin
    };

    connection.query(sql, usuario_obj, error => {

        if (error) throw error;

        res.send('Usuario creado exitosamente.');

    });

}); 