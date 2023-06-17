/* ************************************************************************** */
/* /src/components/handlebars/handlebarscontroller/handlebarsController.js 
 - controlador de handlebars */
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
  }

  getHome = async (req, res) => {
    try {
      if (!fs.existsSync(productosFilePath)) {
        /* Verificar si el archivo de productos no existe */
        /* Devolver una respuesta de error si no existe */
        return res.status(404).json({ status: 'error', error: 'Archivo productos.json no encontrado' });
      }

      const productosData = require(productosFilePath);

      const productos = productosData.map((producto) => ({
        /* Mapear los datos de los productos a un nuevo formato */
        id: producto.id,
        title: producto.title,
        description: producto.description,
        code: producto.code,
        price: producto.price,
        stock: producto.stock,
        category: producto.category,
      }));

      /* Renderizar la plantilla 'home' con los productos y el estilo 'index.css' */
      return res.status(200).render('home', { productos, style: 'index.css' });
    } catch (error) {
      /* Capturar y manejar cualquier error que ocurra durante el procesamiento */
      return res.status(500).json({ status: 'error', error: 'Error Handlebars' });
    }
  };

  getRealTimeProducts = async (req, res) => {
    try {
      if (!fs.existsSync(productosFilePath)) {
        /* Verificar si el archivo de productos no existe */
        /* Devolver una respuesta de error si no existe */
        return res.status(404).json({ status: 'error', error: 'Archivo productos.json no encontrado' });
      }

      const productosData = require(productosFilePath);

      const productos = productosData.map((producto) => ({
        /* Mapear los datos de los productos a un nuevo formato */
        id: producto.id,
        title: producto.title,
        description: producto.description,
        code: producto.code,
        price: producto.price,
        stock: producto.stock,
        category: producto.category,
      }));

      /* Renderizar la plantilla 'realTimeProducts' con los productos y el estilo 'index.css' */
      return res.status(200).render('realTimeProducts', { productos, style: 'index.css' });
    } catch (error) {
      /* Capturar y manejar cualquier error que ocurra durante el procesamiento */
      return res.status(500).json({ status: 'error', error: 'Error Handlebars' });
    }
  };
}

module.exports = new HandlebarsRouter();
