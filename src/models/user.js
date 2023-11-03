import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
    nombre: { type: String, required: [true, 'Nombre obligatorio'] },
    apellido: { type: String, required: [true, 'Apellido obligatorio'] },
    email: { type: String, required: [true, 'Email obligatorio'] },
    password: { type: String, required: [true, 'Password obligatorio'] },
    fechaRegistro: { type: Date, default: Date.now },
    activo: { type: Boolean, default: true },
    rol: { type: String, required: true ,default: 'USER' },
});

// Convertir a modelo
const User = mongoose.model('User', userSchema);

export default User;