//Creamos un endpoint de bienvenida para probar nuestra conexión
app.get('/', (req, res) => {

    res.send('Bienvenid@s a mi API desarrollada en NodeJs')

});