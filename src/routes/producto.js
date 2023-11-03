//crear rutas para producto
import express from 'express';
import {
    crearProducto,
    obtenerProductos,
    obtenerProducto,
    actualizarProducto,
    eliminarProducto
} from '../controllers/productoController.js';

const router = express.Router();

router.get('/getAll', obtenerProductos);
router.post('/add', crearProducto);
router.get('/get/:id', obtenerProducto);
router.put('/update/:id', actualizarProducto);
router.delete('/delete/:id', eliminarProducto);

export default router;

