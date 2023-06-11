/* ************************************************************************** */
/* /src/index.js - Punto de entrada principal para la ejecución de la aplicación
/* ************************************************************************** */

/* Importar el módulo 'express' para crear y configurar la aplicación del servidor */
const express = require('express');

/* Importar el módulo 'path' para trabajar con rutas de archivos y directorios */
const path = require('path');

/* Importar el módulo 'express-handlebars' para configurar Handlebars */
const expressHandlebars = require('express-handlebars');

/* Importar el módulo 'socket.io' para configurar Socket.io */
const socketIO = require('socket.io');

/* Importar el módulo de rutas definido en './routes' */
const routes = require('./routes');

/* Definir el puerto en el que se ejecutará el servidor */
const PORT = 8080;

/* Definir la clase 'Server' */
class Server {
  constructor() {
    /* Crear una nueva instancia de la aplicación de Express */
    this.app = express();

    /* Llamar al método 'settings' para configurar la aplicación */
    this.settings();

    /* Llamar al método 'routes' para definir las rutas de la aplicación */
    this.routes();

    /* Llamar al método 'socket' para configurar Socket.io */
    this.socket();
  }

  /* Configurar la aplicación */
  settings() {
    /* Utilizar el middleware de Express para el manejo de JSON */
    this.app.use(express.json());

    /* Utilizar el middleware de Express para el manejo de datos codificados en la URL */
    this.app.use(
      express.urlencoded({
        extended: true,
      })
    );

    /* Configurar Handlebars como motor de plantillas */
    const handlebars = expressHandlebars.create({
      defaultLayout: 'main',
    });

    // Establecer la ruta de las vistas como la carpeta 'views'
    this.app.set('views', path.join(__dirname, 'views'));
    this.app.engine('handlebars', handlebars.engine);
    this.app.set('view engine', 'handlebars');

    // Establecer de manera estática la carpeta 'public'
    this.app.use(express.static(path.join(__dirname, '/public')));
  }

  /* Definir las rutas de la aplicación */
  routes() {
    /* Llamar a la función de enrutamiento definida en el módulo de rutas */
    routes(this.app);
  }

  /* Configurar Socket.io */
  socket() {
    const server = require('http').createServer(this.app);
    const io = socketIO(server);

    io.on('connection', (socket) => {
      console.log('Cliente conectado');

      socket.on('newProduct', (product) => {
        io.emit('newProduct', product);
      });

      socket.on('deleteProduct', (id) => {
        io.emit('deleteProduct', id);
      });

      socket.on('disconnect', () => {
        console.log('Cliente desconectado');
      });
    });

    this.app.io = io;
  }

  /* Iniciar el servidor */
  listen() {
    const server = this.app.listen(PORT, () => {
      /* Mostrar un mensaje en la consola indicando la URL de acceso */
      console.log(`Servidor en ejecución en http://localhost:${PORT}`);
    });

    /* Pasar el servidor HTTP de Express a Socket.io */
    this.app.io.attach(server);
  }
}

/* Exportar una instancia de la clase Server para su uso en otros archivos */
module.exports = new Server();
