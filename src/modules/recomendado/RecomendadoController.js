const db = require("../../config/db");

const tableName = 'receita'

class RecomendadoController{
    /*(async getRecomendadoPrincipal(req, res) {
        db.join("prato", "receita.autor", "=", "prato.id")
            .select("receita.nome", "prato.tipo")
            .table(tableName)
            .where("prato.tipo", "=", "Principal")
            //.orderBy("random()", "LIMIT", 1)
            .then(data => {
                res.status(200).json(data);
              })
              .catch(err => {
                res.status(500).json(err);
              });
    }*/
    async getReceitas(req, res) {
        db.select()
          .table(tableName)
          .then(data => {
            res.status(200).json(data);
          })
          .catch(err => {
            res.status(500).json(err);
          });
      }
}

module.exports = new RecomendadoController();