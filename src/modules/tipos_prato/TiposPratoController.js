const db = require("../../config/db");

const tableName = 'tipos_prato'

class TiposPratoController {
  async getTiposPrato(req, res) {
    db.select()
      .table(tableName)
      .then(data => {
        res.status(200).json(data);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  }

  getTiposPratoById(req, res) {
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

  insertTiposPrato(req, res) {
    const { prato, tipo_prato } = req.body;

    db(tableName)
      .insert({ prato, tipo_prato })
      .returning("*")
      .then(data => {
        res.status(200).json(data);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  }

  removeTiposPratoById(req, res) {
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

  updateTiposPrato(req, res) {
    const id = parseInt(req.params.id);
    const { prato, tipo_prato } = req.body;

    db(tableName)
      .where({ id })
      .update({ prato, tipo_prato })
      .returning("*")
      .then(data => {
        res.status(200).json(data);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  }
}

module.exports = new TiposPratoController();
