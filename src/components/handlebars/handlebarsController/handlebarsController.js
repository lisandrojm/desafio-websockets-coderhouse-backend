/* ************************************************************************** */
/* /src/components/handlebars/handlebarscontroller/handlebarsController.js -  controlador de
handlebars */
/* ************************************************************************** */

/* Importar el módulo 'express' para crear y configurar el enrutador */
const express = require('express');
const fs = require('fs');
const path = require('path');

const productosFilePath = path.join(__dirname, '../../../data/productos.json');

class HandlebarsRouter {
  constructor() {
    /* Crear una instancia del enrutador de Express */
    this.router = express.Router();
    this.router.get('/', this.getHandlebars);
    this.router.get('/realtimeproducts', this.getRealTimeProducts);
  }

  getHandlebars = async (req, res) => {
    try {
      if (!fs.existsSync(productosFilePath)) {
        // El archivo no existe, se puede esperar o realizar alguna acción
        // como crear un archivo nuevo, lanzar una excepción, etc.
        // En este caso, simplemente devolvemos una respuesta de error.
        return res.status(404).json({ status: 'error', error: 'Archivo productos.json no encontrado' });
      }

      const productosData = require(productosFilePath);

      const productos = productosData.map((producto) => ({
        id: producto.id,
        title: producto.title,
        description: producto.description,
        code: producto.code,
        price: producto.price,
        stock: producto.stock,
        category: producto.category,
      }));

      return res.status(200).render('home', { productos, style: 'index.css' });
    } catch (error) {
      return res.status(500).json({ status: 'error', error: 'Error Handlebars' });
    }
  };
  getRealTimeProducts = async (req, res) => {
    try {
      if (!fs.existsSync(productosFilePath)) {
        // El archivo no existe, se puede esperar o realizar alguna acción
        // como crear un archivo nuevo, lanzar una excepción, etc.
        // En este caso, simplemente devolvemos una respuesta de error.
        return res.status(404).json({ status: 'error', error: 'Archivo productos.json no encontrado' });
      }

      const productosData = require(productosFilePath);

      const productos = productosData.map((producto) => ({
        id: producto.id,
        title: producto.title,
        description: producto.description,
        code: producto.code,
        price: producto.price,
        stock: producto.stock,
        category: producto.category,
      }));

      return res.status(200).render('realTimeProducts', { productos, style: 'index.css' });
    } catch (error) {
      return res.status(500).json({ status: 'error', error: 'Error Handlebars' });
    }
  };
}

module.exports = new HandlebarsRouter();
