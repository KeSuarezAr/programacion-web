import mongoose from "mongoose";
import { IEstudiante } from "../interfaces/IEstudiante";
import estudianteSchema from "../schemas/estudianteSchema";

export const Estudiante = mongoose.model<IEstudiante>(
  "Estudiante",
  estudianteSchema
);
