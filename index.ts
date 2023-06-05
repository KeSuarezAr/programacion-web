import express from "express";
import mongoose from "mongoose";
import router from "./src/router";
import { Profesor } from "./src/model/Profesor";
import { Estudiante } from "./src/model/Estudiante";

var mongoUri = "mongodb://127.0.0.1:27017/proyectoweb";
const port = 3000;
const app = express();

app.use("/", router);

app.listen(port, () => {
  console.log(`Server is running: http://localhost:${port}/`);
});

mongoose.connect(mongoUri, {});

mongoose.connection.on("error", (err) => {
  console.log(`Mongoose connection error: ${err}`);
  process.exit(1);
});

mongoose.connection.on("connected", () => {
  console.log(`Mongoose is connected: ${mongoUri}`);
});

const estudiante = new Estudiante({
  name: "Kevin Suarez",
  email: "kevin@gmail.com",
  password: "password",
});

const profesor = new Profesor({
  name: "Juan Perez",
  email: "juan@gmail.com",
  password: "password",
});

estudiante.save();
profesor.save();
