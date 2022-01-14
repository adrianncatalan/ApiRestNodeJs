//Creamos una constante para hacer un require a la dependencia express, nos permite conectarnos a la base de datos
const express = require('express');

//Creamos una constante para ejecutar express
const app = express();

//Nos permite registrar las peticiones que se realizan al servidor
const morgan = require('morgan');

const connection = require('./databaseConnection/connection.js').dataBaseConnection();

//Creamos una constante para hacer un require a la dependencia Body-Parser, nos permite recibir información del front o de Postman
const bodyParser = require('body-parser');

//Usamos nuestra conexión a la base de datos y al mismo tiempo usamos Body-Parser para ejecutar futuras consultas y nos devuelvan las respuestas en formato Json
app.use(bodyParser.json());

app.use(morgan('combined'));

//Creamos una constante para utilizar el puerto 3050
const PORT = process.env.PORT || 3050;

app.listen(PORT, () => {

    console.log(`Servidor haciendo uso del puerto ${PORT} exitosamente.`);

});

//-----------------------------------------------------Comienzo de los endpoints users----------------------------------------------------------------

//Requiriendo todos lo ficheros que permiten realizar consultas, modificaciones, actualizaciones y supresiones de los users

const lista_usuarios = require('./usersEndPoints/userListEndPoint.js').lista_usuarios;

const agregar_usuario = require('./usersEndPoints/userAddEndPoint.js').agregar_usuario;

const actualizar_usuario = require('./usersEndPoints/userUpdateEndPoint.js').actualizar_usuario;

const eliminar_usuario = require('./usersEndPoints/userDeleteEndPoint.js').eliminar_usuario;

const filtrar_id_usuario = require('./usersEndPoints/userFilterIdEndPoint.js').filtrar_id_usuario;

//Creando los endpoints de los usuarios para poder realizar las peticiones

app.get('/lista_usuarios', (req, res) => lista_usuarios(req, res, connection));

app.post('/agregar_usuario', (req, res) => agregar_usuario(req, res, connection));

app.put('/actualizar_usuario/:id', (req, res) => actualizar_usuario(req, res, connection));

app.delete('/eliminar_usuario/:id', (req, res) => eliminar_usuario(req, res, connection));

app.get('/filtrar_id_usuario/:id', (req, res) => filtrar_id_usuario(req, res, connection));

//-----------------------------------------------------Comienzo de los endpoints services----------------------------------------------------------------

//Requiriendo todos lo ficheros que permiten realizar consultas, modificaciones, actualizaciones y supresiones de los servicios

const lista_servicios = require('./serviceEndPoints/servicesListEndPoint.js').lista_servicios;

const agregar_servicio = require('./serviceEndPoints/servicesAddEndPoint.js').agregar_servicio;

const actualizar_servicio = require('./serviceEndPoints/servicesUpdateEndPoint.js').actualizar_servicio;

const eliminar_servicio = require('./serviceEndPoints/servicesDeleteEndPoint.js').eliminar_servicio;

const filtrar_id_servicio = require('./serviceEndPoints/servicesFilterIdEndPoint.js').filtrar_id_servicio;

//Creando los endpoints de los servicios para poder realizar las peticiones

app.get('/lista_servicios', (req, res) => lista_servicios(req, res, connection));

app.post('/agregar_servicio', (req, res) => agregar_servicio(req, res, connection));

app.put('/actualizar_servicio/:id', (req, res) => actualizar_servicio(req, res, connection));

app.delete('/eliminar_servicio/:id', (req, res) => eliminar_servicio(req, res, connection));

app.get('/filtrar_id_servicio/:id', (req, res) => filtrar_id_servicio(req, res, connection));

//-----------------------------------------------------Comienzo de los endpoints vehicles----------------------------------------------------------------

//Requiriendo todos lo ficheros que permiten realizar consultas, modificaciones, actualizaciones y supresiones de los vehículos

const lista_vehiculos = require('./vehicleEndPoints/vehicleListEndPoint.js').lista_vehiculos;

const agregar_vehiculo = require('./vehicleEndPoints/vehicleAddEndPoint.js').agregar_vehiculo;

const actualizar_vehiculo = require('./vehicleEndPoints/vehicleUpdateEndPoint.js').actualizar_vehiculo;

const eliminar_vehiculo = require('./vehicleEndPoints/vehicleDeleteEndPoint.js').eliminar_vehiculo;

const filtrar_id_vehiculo = require('./vehicleEndPoints/vehicleFilterIdEndPoint.js').filtrar_id_vehiculo;

//Creando los endpoints de los vehículos para poder realizar las peticiones

app.get('/lista_vehiculos', (req, res) => lista_vehiculos(req, res, connection));

app.post('/agregar_vehiculo', (req, res) => agregar_vehiculo(req, res, connection));

app.put('/actualizar_vehiculo/:id', (req, res) => actualizar_vehiculo(req, res, connection));

app.delete('/eliminar_vehiculo/:id', (req, res) => eliminar_vehiculo(req, res, connection));

app.get('/filtrar_id_vehiculo/:id', (req, res) => filtrar_id_vehiculo(req, res, connection));
