const express = require("express");
const bodyParser = require("body-parser");
const db = require("./src/config/db");

const AutorRoutes = require("./src/modules/autor/AutorRoutes");
const PratoRoutes = require("./src/modules/prato/PratoRoutes");
const ReceitaRoutes = require("./src/modules/receita/ReceitaRoutes");
const IngredienteRoutes = require("./src/modules/ingrediente/IngredienteRoutes");
const AvaliacaoRoutes = require("./src/modules/avaliacao/AvaliacaoRoutes");
const EditarReceitaRoutes = require("./src/modules/editar_receita/EditarReceitaRoutes");
const AdminRoutes = require("./src/modules/admin/AdminRoutes");
const IngredientesReceita = require("./src/modules/ingredientes_receita/IngredientesReceitaRoutes");
const TipoPrato = require("./src/modules/tipo_prato/TipoPratoRoutes");
const TiposPrato = require("./src/modules/tipos_prato/TiposPratoRoutes");
const Sigin = require("./src/modules/auth/SigninRoutes");
const { initialize, authenticate } = require("./src/config/passport");

const app = express();
const port = process.env.PORT || 3001;
const domain = "localhost";

app.db = db;

app.use(bodyParser.json());

app.use(initialize());

// Rotas
app.use(Sigin);

app.use(AutorRoutes);
app.use(authenticate());
app.use(AdminRoutes);

/*
  Usar o Header:
    Authorization: Bearer <token>
*/

app.use(PratoRoutes);
app.use(ReceitaRoutes);
app.use(IngredienteRoutes);
app.use(AvaliacaoRoutes);
app.use(EditarReceitaRoutes);
app.use(IngredientesReceita);
app.use(TipoPrato);
app.use(TiposPrato);

app.get("/", (req, res) => {
    res.status(200).send("Hello World");
});

app.set("json spaces", 4);

app.listen(port, () => {
    console.log(`Servidor disponível na porta ${port}`);
});
