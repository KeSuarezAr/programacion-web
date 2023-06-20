import express from "express";
import { Turno } from "./mongo/turno";

const router = express.Router();

router.get("/turnos", async (req, res) => {
  const turnos = await Turno.find().exec();
  res.status(200).json(turnos);
});

router.get("/turno/:id", async (req, res) => {
  const id = req.params.id;

  const turno = await Turno.findById(id).exec();
  res.status(200).json(turno);
});

router.post("/turno", async (req, res) => {
  const turno = new Turno({
    cliente: req.body.cliente,
    fecha: Date.now(),
    servicio: req.body.servicio,
  });

  await turno.save();
  res.status(200).json(turno);
});

router.delete("/turno/:id", async (req, res) => {
  const id = req.params.id;

  await Turno.findByIdAndDelete(id).exec();
  res.status(200).json("Turno eliminado");
});

router.patch("/turno/fecha/:id", async (req, res) => {
  const id = req.params.id;
  const fecha = req.body.fecha;

  await Turno.findByIdAndUpdate(id, { fecha: fecha }).exec();
  res.status(200).json("Fecha actualizada");
});

export default router;
