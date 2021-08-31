function datos_clientes(datosEntrantes, respuesta) {
    //Convertimos los strings en json
    var entradastrings = JSON.stringify(datosEntrantes.body);
    var entrada = JSON.parse(entradastrings);

    //Creamos el sql con los datos del cliente para que sea insertado
    const sql = 'insert 
      into clientes (cedula, apellidos, nombres, direccion, telefono, correo electronico)
      values('${entrada['cedula']}', '${entrada['apellidos']}', '${entrada['nombres']}', '${entrada['direccion']}', '${entrada['telefono']}', '${entrada['correo electronico']}');
    try {
        //Ingresamos a la base de datos 
        database.query(sql).then((datos) => {
            //Creamos al cliente
            return respuesta.status(200).json({ "alerta": "Ubicar mensaje de cliente creado"});
        })
    } catch (error) {
        //Creamos un error en caso de no se llenen todos los campos
        return respuesta.status(400).send(error);
    }
}