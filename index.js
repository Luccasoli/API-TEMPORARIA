const express = require("express");
const bodyParser = require('body-parser')
const db = require("./src/config/db");

const AutorRoutes = require("./src/modules/autor/AutorRoutes");
const PratoRoutes = require("./src/modules/prato/PratoRoutes");

const app = express();
const port = process.env.PORT || 3001;
const domain = "localhost";

app.db = db;

app.use(bodyParser.json())

// Rotas
app.use(AutorRoutes);
app.use(PratoRoutes);

app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

app.set("json spaces", 4);

app.listen(port, () => {
  console.log(`Servidor disponível na porta ${port}`);
});

