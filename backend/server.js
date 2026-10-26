import express from "express";
import cors from "cors";
import jsonFile from "./assets/data.json" with { type: "json" };

const app = express();
const PORT = 8080;

app.listen(PORT, () => {
  console.log("Server runs on port: " + PORT);
});

app.use(cors());

app.get("/products", (req, res) => {
  res.send(jsonFile.produkte);
});
