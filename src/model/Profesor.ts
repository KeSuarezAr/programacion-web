import { Model, model } from "mongoose";
import { IProfesor } from "../interfaces/IProfesor";
import profesorSchema from "../schemas/profesorSchema";

export const Profesor: Model<IProfesor> = model<IProfesor>(
  "Profesor",
  profesorSchema
);
