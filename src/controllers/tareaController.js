import Tarea from "../models/tarea.js";
import mongoose from "../db/index.js";

// Agregar una tarea
export const agregarTarea = async (req, res) => {
  try {
    const tarea = new Tarea(req.body);
    await tarea.save();
    res.status(201).json(tarea);
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};

// Obtener todas las tareas
export const obtenerTareas = async (req, res) => {
  try {
    const tareas = await Tarea.find();
    if (!tareas) {
      res.status(404).json({ mensaje: "No hay tareas" });
      return;
    }
    res.status(200).json(tareas);
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};

// Obtener una tarea por su ID

export const obtenerTareaPorId = async (req, res) => {
  try {
    const tarea = await Tarea.findById(req.params.id);
    if (!tarea) {
      res.status(404).json({ mensaje: "La tarea no existe" });
      return;
    }
    res.status(200).json(tarea);
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};

// Actualizar una tarea por su ID
export const actualizarTareaPorId = async (req, res) => {
  try {
    // Obtener la tarea desde la base de datos y actualizarla
    const tarea = await Tarea.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    // Si no se encuentra la tarea, enviar un 404
    if (!tarea) {
      res.status(404).json({ mensaje: "La tarea no existe" });
      return;
    }
    // Si la tarea existe y se actualiza, enviarla en la respuesta
    res.status(200).json(tarea);
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};
