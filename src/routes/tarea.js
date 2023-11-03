import express from 'express';
import {agregarTarea, obtenerTareas, obtenerTareaPorId, actualizarTareaPorId} from '../controllers/tareaController.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('¡Hola, desde tareas!');
});

//Rutas
router.post('/add', agregarTarea);
router.get('/getAll', obtenerTareas);
router.get('/get/:id', obtenerTareaPorId);
router.put('/update/:id', actualizarTareaPorId);

export default router;