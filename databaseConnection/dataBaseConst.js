function constantesBBDD() {

    //Creamos una constante para hacer un require a la dependencia express, nos permite conectarnos a la base de datos
    const express = require('express');

    //Creamos una constante para hacer un require a la dependencia MySql, ya que nuestra base de datos es de tipo MySql
    const mysql = require('mysql');

    //Creamos una constante para hacer un require a la dependencia Body-Parser, nos permite recibir información del front o de Postman
    const bodyParser = require('body-parser');

    //Un mensaje de bienvenida para probar la conexión a nuestra base de datos
    //const bienvenida = require("../welcomeEndPoint/welcome").saludo();

    //Creamos una constante para utilizar el puerto 3050
    const PORT = process.env.PORT || 3050;

    //Creamos una constante para ejecutar express
    const app = express();

    //Usamos nuestra conexión a la base de datos y al mismo tiempo usamos Body-Parser para ejecutar futuras consultas y nos devuelvan las respuestas en formato Json
    app.use(bodyParser.json());

}

module.exports.dataBaseConst = constantesBBDD;