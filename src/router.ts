import express from "express";
import { Estudiante } from "./model/Estudiante";
import { Profesor } from "./model/Profesor";

const router = express.Router();

router.get("/estudiantes", async (req, res) => {
  try {
    const estudiantes = await Estudiante.find();
    res.json(estudiantes);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

router.post("/estudiantes", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const estudiante = new Estudiante({ name, email, password });
    await estudiante.save();
    res.json(estudiante);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

router.get("/profesores", async (req, res) => {
  try {
    const profesores = await Profesor.find();
    res.json(profesores);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

router.post("/profesores", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const profesor = new Profesor({ name, email, password });
    await profesor.save();
    res.json(profesor);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

export default router;
