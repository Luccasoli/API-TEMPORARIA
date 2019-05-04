const db = require("../../config/db");

const tableName = "ingredientes_receita";

class IngredientesReceitaController {
  async getIngredientesReceita(req, res) {
    db.select()
      .table(tableName)
      .then(data => {
        res.status(200).json(data);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  }

  getIngredientesReceitaById(req, res) {
    const id = parseInt(req.params.id);
    db.select()
      .table(tableName)
      .where({ id })
      .then(data => {
        res.status(200).json(data);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  }

  insertIngredientesReceita(req, res) {
    const { ingrediente, receita, quantidade } = req.body;

    db(tableName)
      .insert({ ingrediente, receita, quantidade })
      .returning("*")
      .then(data => {
        res.status(200).json(data);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  }

  removeIngredientesReceitaByPK(req, res) {
    const { ingrediente, receita } = req.body;

    db(tableName)
      .where({ ingrediente, receita })
      .del()
      .then(num => {
        res.status(200).send();
      })
      .catch(err => {
        res.status(500).json(err);
      });
  }

  updateIngredientesReceita(req, res) {
    const id = parseInt(req.params.id);
    const { ingrediente, receita, quantidade } = req.body;

    db(tableName)
      .where({ id })
      .update({ ingrediente, receita, quantidade })
      .returning("*")
      .then(data => {
        res.status(200).json(data);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  }
}

module.exports = new IngredientesReceitaController();
