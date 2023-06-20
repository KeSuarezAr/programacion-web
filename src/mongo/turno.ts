import { Schema, model } from "mongoose";

interface ITurno {
  cliente: string;
  fecha: string;
  servicio: string;
}

const turnoSchema = new Schema<ITurno>({
  cliente: { type: String, required: true },
  fecha: { type: String, required: true },
  servicio: { type: String, required: true },
});

export const Turno = model<ITurno>("Turno", turnoSchema);
