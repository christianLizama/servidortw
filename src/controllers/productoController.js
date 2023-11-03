//Crea controller para producto
import Producto from '../models/producto.js';
import mongoose from '../db/index.js';

//crea producto
export const crearProducto = async (req, res) => {
    try {
        const producto = new Producto(req.body);
        await producto.save();
        res.status(200).json(producto);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

//obtiene todos los productos
export const obtenerProductos = async (req, res) => {
    try {       
        const productos = await Producto.find();
        res.status(200).json(productos);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

//obtiene un producto por id
export const obtenerProducto = async (req, res) => {
    try {
        const producto = await Producto.findById(req.params.id);
        res.status(200).json(producto);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

//actualiza un producto por id
export const actualizarProducto = async (req, res) => {
    try {
        const producto = await Producto.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).json(producto);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

//elimina un producto por id
export const eliminarProducto = async (req, res) => {
    try {
        const producto = await Producto.findByIdAndDelete(req.params.id);
        res.status(200).json(producto);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};




