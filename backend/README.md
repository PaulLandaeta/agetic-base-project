# Pasos de instalacion

Correr el proyecto node localmente: 

- Instalar node. 
- `npm install` para instalar todas las dependencias requeridas.
- Instalar MySql ([instrucciones](https://www.digitalocean.com/community/tutorials/como-instalar-mysql-en-ubuntu-18-04-es)) y ejecutar `MySql`.
- `npm run dev` para iniciar el servidor.

## Structura del proyecto

- `app.js` - Este file inicializa el servidor
- `config/` - Este folder se encarga de almacenar todas las configuraciones del proyecto
- `routes/` - Este folder contiene las rutas definidas para nuestro API.
- `models/` - Este folder contiene la definicion de los esquemas de MySql.
- `controller/` - Este folder contiene los controladores para el uso de la base de datos.
- `services/` - Este folder contiene la logica de negocios del proyecto.
- `database/` - Este file se encarga de la conexion a la base de datos.
