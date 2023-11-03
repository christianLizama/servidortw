import express from 'express';
//importar controlador users
import {
    agregarUsuario,
    obtenerUsuarios,
    obtenerUsuario,
    actualizarUsuario,
    eliminarUsuario
} from '../controllers/usersController.js';

const router = express.Router();

//crear rutas para users
router.get('/getAll', obtenerUsuarios);
router.post('/add', agregarUsuario);
router.get('/get/:id', obtenerUsuario);
router.put('/update/:id', actualizarUsuario);
router.delete('/delete/:id', eliminarUsuario);

export default router;
