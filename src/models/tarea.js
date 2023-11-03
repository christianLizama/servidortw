import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const tareaSchema = new Schema({
    nombre: { type: String, required: [true, 'Nombre obligatorio'] },
    descripcion: { type: String, required: false },
    usuarioCreador: { type: Schema.Types.ObjectId, ref: 'Usuario' },
    fechaRegistro: { type: Date, default: Date.now },
    fechaTermino: { type: Date, default: Date.now },
    activo: { type: Boolean, default: true },
    usuariosAsignados: [{ type: Schema.Types.ObjectId, ref: 'Usuario' }],
});

// Convertir a modelo
const Tarea = mongoose.model('Tarea', tareaSchema);

export default Tarea;

