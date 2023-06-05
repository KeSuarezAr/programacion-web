import { Schema } from "mongoose";
import { IProfesor } from "../interfaces/IProfesor";

const profesorSchema = new Schema<IProfesor>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

export default profesorSchema;
