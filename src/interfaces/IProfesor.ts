import { Document } from "mongoose";

export interface IProfesor extends Document {
  name: string;
  email: string;
  password: string;
}
