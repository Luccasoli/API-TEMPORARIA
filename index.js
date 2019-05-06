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
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3001;
app.use(bodyParser.json());
app.use(cors({ credentials: true, origin: true }));
app.db = db;

app.use(initialize());

// Rotas
app.use(Sigin);

app.use(AutorRoutes);
app.use(AdminRoutes);
app.get("/", (req, res) => {
  res.status(200).send("Verifique o código fonte");
});
// app.use(authenticate());

/*
  Para as rotas a seguir, usar o Header:
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

app.set("json spaces", 4);

app.listen(port, () => {
  console.log(`Servidor disponível na porta ${port}`);
});
