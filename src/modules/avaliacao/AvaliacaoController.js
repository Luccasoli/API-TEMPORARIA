const db = require("../../config/db");

const tableName = 'avaliacao'

class AvaliacaoController {
  async getAvaliacoes(req, res) {
    db.select()
      .table(tableName)
      .then(data => {
        res.status(200).json(data);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  }

  getAvaliacaoById(req, res) {
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

  insertAvaliacao(req, res) {
    const { autor, receita, nota } = req.body;

    db(tableName)
      .insert({ autor, receita, nota })
      .returning("*")
      .then(data => {
        res.status(200).json(data);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  }

  removeAvaliacaoById(req, res) {
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

  updateAvaliacao(req, res) {
    const id = parseInt(req.params.id);
    const { autor, receita, nota } = req.body;

    db(tableName)
      .where({ id })
      .update({ autor, receita, nota })
      .returning("*")
      .then(data => {
        res.status(200).json(data);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  }
}

module.exports = new AvaliacaoController();
