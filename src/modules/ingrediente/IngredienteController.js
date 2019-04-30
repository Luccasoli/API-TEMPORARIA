const db = require("../../config/db");

const tableName = 'ingrediente'

class IngredienteController {
  async getIngredientes(req, res) {
    db.select()
      .table(tableName)
      .then(data => {
        res.status(200).json(data);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  }

  getIngredienteById(req, res) {
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

  insertIngrediente(req, res) {
    const { nome, calorias, img } = req.body;

    db(tableName)
      .insert({ nome, calorias, img })
      .returning("*")
      .then(data => {
        res.status(200).json(data);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  }

  removeIngredienteById(req, res) {
    const id = parseInt(req.params.id);

    db(tableName)
      .where({ id })
      .del()
      .then(num => {
        res.status(200).send();
      })
      .catch(err => {
        res.status(500).json(err);
      });
  }

  updateIngrediente(req, res) {
    const id = parseInt(req.params.id);
    const { nome, calorias, img } = req.body;

    db(tableName)
      .where({ id })
      .update({ nome, calorias, img })
      .returning("*")
      .then(data => {
        res.status(200).json(data);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  }
}

module.exports = new IngredienteController();
