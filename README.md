# DESAFÍO ENTREGABLE - Websockets - Coderhouse/Backend

Este repositorio contiene el desafío entregable "Websockets" del curso de Backend de Coderhouse. El proyecto utiliza Node.js y Express.js para crear una API RESTful que permite administrar productos y carritos de compras.

El desafío consiste en la implementación de "[Handlebars](https://handlebarsjs.com/) y [Websockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)". Se crea una vista “realTimeProducts.handlebars”, la cual vive en el endpoint “/realtimeproducts” en nuestro views router, ésta contiene la lista de productos pero trabaja con websockets.
Al trabajar con websockets, cada vez que creamos un producto nuevo, o bien cada vez que eliminamos un producto, se actualiza automáticamente la lista en dicha vista.

## Estructura de Carpetas y Archivos

El código está organizado en las siguientes carpetas y archivos:

- `/src/components/carts`: Contiene el controlador de los carritos de compra (`cartsController.js`).
- `/src/components/products`: Contiene el controlador de los productos (`productsController.js`).
- `/src/components/handlebars`: Contiene el controlador del motor de plantillas (`handlebarsController.js`).
- `/data`: Contiene los archivos JSON utilizados para almacenar los datos de productos (`productos.json`) y carritos de compra (`carrito.json`).
- `/src/routes`: Contiene las definiciones de rutas para los productos, carritos de compra y [Handlebars](https://handlebarsjs.com/).
- `/src/uploads/productos`: Contiene las imágenes subidas por medio de [Multer](https://www.npmjs.com/package/multer).
- `/src/utils/`: Contiene la configuración de [Multer](https://www.npmjs.com/package/multer)(`utilsMulter.js`),
- `/src/views/`: Almacena los archivos de plantillas (templates) de [Handlebars](https://handlebarsjs.com/) que se utilizarán para generar las vistas de la aplicación.
- `/src`: Contiene el archivo principal de la aplicación (`index.js`) que inicia el servidor y configura las rutas.
- `/index.js`: Archivo principal de la aplicación.

## Rutas del desafío

La aplicación expone las siguientes rutas para cumplir con el desafío:

- `GET /`: Obtiene la lista estática de productos agregados hasta el momento. (Vista de `/src/views/home.handlebars`).

- `GET /realtimeproducts`: Obtiene la lista dinámica de productos con la implementación de Websocket.(Vista de `/src/views/realTimeProducts.handlebars`).

## Video Test Websockets

## Instalación

1. Clona este repositorio en tu máquina local:

   ```shell
   git clone https://github.com/lisandrojm/primera_pre-entrega
   ```

2. Navega al directorio del proyecto:

   ```shell
   cd primera_pre-entrega

   ```

3. Instala las dependencias del proyecto:

   ```shell
   npm install
   ```

## Uso

### Ejecutar la aplicación

Para iniciar la aplicación, ejecuta el siguiente comando:

```shell
npm start
```

Esto iniciará el servidor en el puerto 8080.
Si deseas visualizar los cambios en la ruta `GET /` al actualizar al página una vez agregado o eliminado un producto debes ejecutar la aplicación en "modo de desarrollo".

### Ejecutar en modo de desarrollo

Si deseas ejecutar la aplicación en modo de desarrollo, puedes utilizar el siguiente comando:

```shell
npm run dev
```

Esto iniciará el servidor utilizando Nodemon, lo que significa que la aplicación se reiniciará automáticamente cuando detecte cambios en los archivos.

## Dependencias

El proyecto utiliza las siguientes dependencias:

- Express.js (v4.18.2): Framework de Node.js para construir aplicaciones web.
- UUID (v9.0.0): Biblioteca para generar identificadores únicos.

## DevDependencies

El proyecto utiliza las siguientes devDependencies:

- Nodemon (v2.0.22): Utilidad que monitoriza cambios en los archivos y reinicia automáticamente la aplicación.
