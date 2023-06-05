import { Schema } from "mongoose";
import { IEstudiante } from "../interfaces/IEstudiante";

const estudianteSchema = new Schema<IEstudiante>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

export default estudianteSchema;
