import User from '../models/user.js';
import mongoose from '../db/index.js';

//agregar usuario
export const agregarUsuario = async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

//obtener todos los usuarios
export const obtenerUsuarios = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

//obtener un usuario por id
export const obtenerUsuario = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
}

//actualizar un usuario por id
export const actualizarUsuario = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
}

//eliminar un usuario por id
export const eliminarUsuario = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
}



