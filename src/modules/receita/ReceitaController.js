const db = require("../../config/db");

const tableName = 'receita'

class ReceitaController {
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

  getReceitaById(req, res) {
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

  insertReceita(req, res) {
    const { nome, passos, qnt_porcoes, tempo_preparo, imgs, autor, prato } = req.body;

    db(tableName)
      .insert({ nome, passos, qnt_porcoes, tempo_preparo, imgs, autor, prato })
      .returning("*")
      .then(data => {
        res.status(200).json(data);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  }

  removeReceitaById(req, res) {
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

  updateReceita(req, res) {
    const id = parseInt(req.params.id);
    const { nome, passos, qnt_porcoes, tempo_preparo, imgs, autor, prato } = req.body;

    db(tableName)
      .where({ id })
      .update({ nome, passos, qnt_porcoes, tempo_preparo, imgs, autor, prato })
      .returning("*")
      .then(data => {
        res.status(200).json(data);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  }
}

module.exports = new ReceitaController();
