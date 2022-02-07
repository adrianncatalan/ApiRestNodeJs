//Conexion bbdd
const connection = require('./databaseConnection/connection.js').dataBaseConnection();

//Creamos una constante para hacer un require a la dependencia express, nos permite conectarnos a la base de datos
const express = require('express');

//Creamos una constante para ejecutar express
const app = express();

//Nos permite registrar las peticiones que se realizan al servidor
const morgan = require('morgan');

//Creamos una constante para hacer un require a la dependencia Body-Parser, nos permite recibir información del front o de Postman
const bodyParser = require('body-parser');

//
const cors = require('../ApiRestNodeJs/node_modules/cors');

//Usamos nuestra conexión a la base de datos y al mismo tiempo usamos Body-Parser para ejecutar futuras consultas y nos devuelvan las respuestas en formato Json
app.use(bodyParser.json());

app.use(morgan('combined'));

//Creamos una constante para utilizar el puerto 3050
const PORT = process.env.PORT || 3050;

app.listen(PORT, () => {

    console.log(`Servidor haciendo uso del puerto ${PORT} exitosamente.`);

});

//Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

//-----------------------------------------------------Endpoint de bienvenida-------------------------------------------------------------------------

// Requiriendo el fichero de bienvenida

const welcome = require('./welcomeMiddleware/welcome.js').welcome;

//Creando el endpoint de bienvenida

app.get('/', (req, res) => welcome(req, res));

//-----------------------------------------------------Comienzo de los endpoints users----------------------------------------------------------------

//Requiriendo todos lo ficheros que permiten realizar consultas, modificaciones, actualizaciones y supresiones de los users

const data_user = require('./usersMiddleware/userData.js').data_user;

const lista_usuarios = require('./usersMiddleware/userList.js').lista_usuarios;

const agregar_usuario = require('./usersMiddleware/userAdd.js').agregar_usuario;

const actualizar_usuario = require('./usersMiddleware/userUpdate.js').actualizar_usuario;

const eliminar_usuario = require('./usersMiddleware/userDelete.js').eliminar_usuario;

const filtrar_id_usuario = require('./usersMiddleware/userID.js').filtrar_id_usuario;

//Creando los endpoints de los usuarios para poder realizar las peticiones

app.get('/data_user/:id', (req, res) => data_user(req, res, connection));

app.get('/lista_usuarios', (req, res) => lista_usuarios(req, res, connection));

app.post('/agregar_usuario', (req, res) => agregar_usuario(req, res, connection));

app.put('/actualizar_usuario/:id', (req, res) => actualizar_usuario(req, res, connection));

app.delete('/eliminar_usuario/:id', (req, res) => eliminar_usuario(req, res, connection));

app.get('/filtrar_id_usuario/:id', (req, res) => filtrar_id_usuario(req, res, connection));

//-----------------------------------------------------Comienzo de los endpoints services----------------------------------------------------------------

//Requiriendo todos lo ficheros que permiten realizar consultas, modificaciones, actualizaciones y supresiones de los servicios

const lista_servicios = require('./servicesMiddleware/servicesList.js').lista_servicios;

const agregar_servicio = require('./servicesMiddleware/servicesAdd.js').agregar_servicio;

const actualizar_servicio = require('./servicesMiddleware/servicesUpdate.js').actualizar_servicio;

const eliminar_servicio = require('./servicesMiddleware/servicesDelete.js').eliminar_servicio;

const filtrar_id_servicio = require('./servicesMiddleware/servicesID.js').filtrar_id_servicio;

//Creando los endpoints de los servicios para poder realizar las peticiones

app.get('/lista_servicios', (req, res) => lista_servicios(req, res, connection));

app.post('/agregar_servicio', (req, res) => agregar_servicio(req, res, connection));

app.put('/actualizar_servicio/:id', (req, res) => actualizar_servicio(req, res, connection));

app.delete('/eliminar_servicio/:id', (req, res) => eliminar_servicio(req, res, connection));

app.get('/filtrar_id_servicio/:id', (req, res) => filtrar_id_servicio(req, res, connection));

//-----------------------------------------------------Comienzo de los endpoints vehicles----------------------------------------------------------------

//Requiriendo todos lo ficheros que permiten realizar consultas, modificaciones, actualizaciones y supresiones de los vehículos

const lista_vehiculos = require('./vehiclesMiddleware/vehiclesList.js').lista_vehiculos;

const agregar_vehiculo = require('./vehiclesMiddleware/vehiclesAdd.js').agregar_vehiculo;

const actualizar_vehiculo = require('./vehiclesMiddleware/vehiclesUpdate.js').actualizar_vehiculo;

const eliminar_vehiculo = require('./vehiclesMiddleware/vehiclesDelete.js').eliminar_vehiculo;

const filtrar_id_vehiculo = require('./vehiclesMiddleware/vehiclesID.js').filtrar_id_vehiculo;

//Creando los endpoints de los vehículos para poder realizar las peticiones

app.get('/lista_vehiculos', (req, res) => lista_vehiculos(req, res, connection));

app.post('/agregar_vehiculo', (req, res) => agregar_vehiculo(req, res, connection));

app.put('/actualizar_vehiculo/:id', (req, res) => actualizar_vehiculo(req, res, connection));

app.delete('/eliminar_vehiculo/:id', (req, res) => eliminar_vehiculo(req, res, connection));

app.get('/filtrar_id_vehiculo/:id', (req, res) => filtrar_id_vehiculo(req, res, connection));

//-----------------------------------------------------Comienzo de los endpoints user - vehicles----------------------------------------------------------------

//Requiriendo el fichero que permite mostrar las información del usuario y su lista vehicular filtrado por ID

const filtrar_id_usuario_vehiculo = require('./usersVehiclesMiddleware/userVehiclesID.js').filtrar_id_usuario_vehiculo;

//Creando el endpoint para mostrar la información consultada

app.get('/filtrar_id_usuario_vehiculo/:id', (req, res) => filtrar_id_usuario_vehiculo(req, res, connection));

//-----------------------------------------------------Comienzo de los endpoints vehicles - services------------------------------------------------------------

//Requiriendo el fichero que permite mostrar las información vehicular y su lista de servicios filtrado por ID de usuario

const filtrar_id_vehiculo_servicio = require('./vehiclesServicesMiddleware/vehiclesServicesID.js').filtrar_id_vehiculo_servicio;

//Creando el endpoint para mostrar la información consultada

app.get('/filtrar_id_vehiculo_servicio/:id/:id_servicio', (req, res) => filtrar_id_vehiculo_servicio(req, res, connection));