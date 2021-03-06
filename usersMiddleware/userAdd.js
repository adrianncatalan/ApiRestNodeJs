//Creamos una función middleware para agregar usuarios a nuestra tabla registro_usuarios en nuestra base de datos
const agregar_usuario = (req, res, connection) => {
  const sql = "INSERT INTO registro_usuarios SET ?";

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

    administrador: req.body.administrador,
  };

  const result = usuario_obj;

  connection.query(sql, usuario_obj, (error) => {
    if (error) throw error;

    // res.send('Usuario creado exitosamente.');

    res.json(result);
  });
};

//Exportamos el bloque de código que permite agregar al usuario
module.exports.agregar_usuario = agregar_usuario;
