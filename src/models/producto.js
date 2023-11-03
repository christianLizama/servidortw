import mongoose from "mongoose";
import { Schema } from "mongoose";

const productoSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  fechaLlegada: {
    type: Date,
    default: Date.now,
    required: true,
  },
  fechaSalida: {
    type: Date,
    required: false,
  },
  dimensiones: {
    alto: {
      type: Number,
      required: true,
    },
    ancho: {
      type: Number,
      required: true,
    },
    largo: {
      type: Number,
      required: true,
    },
  },
  peso: {
    type: Number,
    required: true,
  },
});

//convertir a modelo de mongoose
const Producto = mongoose.model("Producto", productoSchema);

export default Producto;