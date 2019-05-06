const db = require("../../config/db");

const tableName = 'receita'

class RecomendadoController{
    async getRecomendadoPrincipal(req, res) {
        db.select(
            "receita.nome",
            "receita.passos",
            "receita.qnt_porcoes",
            "tempo_preparo",
            "receita.imgs", 
            "autor.nome"
        )
            .join("autor", "autor", "=", "autor.id")
            .join("prato", "prato", "=", "prato.id")
            .table(tableName)
            .where("prato.tipo", "=", "Principal")
            .orderBy("random()", "LIMIT", 1)
            .then(data => {
                res.status(200).json(data);
              })
              .catch(err => {
                res.status(500).json(err);
              });
    }
}

module.exports = new RecomendadoController();