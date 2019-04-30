const db = require("../../config/db");

const tableName = 'editar_receita'

class EditarReceitaController {
  async getEditarReceita(req, res) {
    db.select()
      .table(tableName)
      .then(data => {
        res.status(200).json(data);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  }

  getEditarReceitaById(req, res) {
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

  insertEditarReceita(req, res) {
    const { autor, receita, admin, aprovacao, tipo } = req.body;

    db(tableName)
      .insert({ autor, receita, admin, aprovacao, tipo })
      .returning("*")
      .then(data => {
        res.status(200).json(data);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  }

  removeEditarReceitaById(req, res) {
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

  updateEditarReceita(req, res) {
    const id = parseInt(req.params.id);
    const { autor, receita, admin, aprovacao, tipo } = req.body;

    db(tableName)
      .where({ id })
      .update({ autor, receita, admin, aprovacao, tipo })
      .returning("*")
      .then(data => {
        res.status(200).json(data);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  }
}

module.exports = new EditarReceitaController();
