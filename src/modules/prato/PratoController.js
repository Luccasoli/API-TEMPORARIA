const db = require("../../config/db");

const tableName = 'prato'

class PratoController {
  async getPratos(req, res) {
    db.select()
      .table(tableName)
      .then(pratos => {
        res.status(200).json(pratos);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  }

  getPratoById(req, res) {
    const id = parseInt(req.params.id);
    db.select()
      .table(tableName)
      .where({ id })
      .then(Prato => {
        res.status(200).json(Prato);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  }

  insertPrato(req, res) {
    let { nome, imgs, tipo } = req.body;

    imgs = imgs.replace(/'/g, '"')
    imgs = JSON.parse(imgs)

    db(tableName)
      .insert({ nome, imgs, tipo })
      .returning("*")
      .then(Prato => {
        res.status(200).json(Prato);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  }

  removePratoById(req, res) {
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

  updatePrato(req, res) {
    const id = parseInt(req.params.id);
    let { nome, imgs, tipo } = req.body;

    imgs = imgs.replace(/'/g, '"')
    imgs = JSON.parse(imgs)

    db(tableName)
      .where({ id })
      .update({ nome, imgs, tipo })
      .returning("*")
      .then(Prato => {
        res.status(200).json(Prato);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  }
}

module.exports = new PratoController();
