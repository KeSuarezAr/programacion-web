import express from "express";
import mongoose from "mongoose";
import router from "./src/router";

const hostname = "127.0.0.1";
const port = 3000;

mongoose.connect("mongodb://127.0.0.1:27017/turnos");

mongoose.connection.on("error", (err) => {
  console.log("err", err);
});

mongoose.connection.on("connected", (err, res) => {
  console.log("Mongoose is connected");
});

const app = express();

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

app.use(express.json());
app.use("/", router);
