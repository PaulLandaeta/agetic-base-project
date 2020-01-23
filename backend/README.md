
This repo is functionality complete

# Getting started

Corre el proyecto node localmente

- Instalar node. 
- `npm install` para instalar todas las dependencias requeridas.
- Instalar MySql ([instrucciones](https://www.digitalocean.com/community/tutorials/como-instalar-mysql-en-ubuntu-18-04-es)) y ejecutar `MySql`
- `npm run dev` para iniciar el servidor

## Application Structure

- `app.js` - The entry point to our application. This file defines our express server and connects it to MongoDB using mongoose. It also requires the routes and models we'll be using in the application.
- `config/` - This folder contains configuration for passport as well as a central location for configuration/environment variables.
- `routes/` - This folder contains the route definitions for our API.
- `models/` - This folder contains the schema definitions for our Mongoose models.
