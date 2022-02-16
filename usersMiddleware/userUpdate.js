//Creamos una función middleware para actualizar usuarios a nuestra tabla registro_usuarios de nuestra base de datos
const actualizar_usuario = (req, res, connection) => {
  const { id } = req.params;

  const { telefono, email, contacto_emergencia } = req.body;

  const result = req.body;

  const sql = `UPDATE registro_usuarios SET telefono = '${telefono}', email = '${email}', contacto_emergencia= '${contacto_emergencia}' WHERE id_usuario = '${id}'`;

  connection.query(sql, (error) => {
    if (error) throw error;

    // res.send('Usuario actualizado exitosamente.');

    res.json(result);
    
  });
};

//Exportamos el bloque de código que permite consultar y mostrar a todos los usuarios de la base de datos
module.exports.actualizar_usuario = actualizar_usuario;
