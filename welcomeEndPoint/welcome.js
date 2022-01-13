//Creamos una constante que requiere el fichero  de la conexión a la base de datos 
const connection = require('../dataBaseConnection/connection.js');

//Ejecutamos nuestra constante y con la notación del '.' podemos accionar nuestra función que es la conexión a la base de datos
connection.dataBase();

const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {

    res.send('Bienvenid@s a mi API desarrollada en NodeJs');

});

module.exports = router;



