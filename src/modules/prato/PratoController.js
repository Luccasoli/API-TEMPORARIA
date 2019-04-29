const db = require("../../config/db");

class PratoController {
  async getPratos(req, res) {
    db.select()
      .table("prato")
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
      .table("prato")
      .where({ id })
      .then(Prato => {
        res.status(200).json(Prato);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  }

  insertPrato(req, res) {
    const { nome, email, senha, foto_perfil, tipo } = req.body;

    db("Prato")
      .insert({ nome, email, senha, foto_perfil, tipo })
      .returning("*")
      .then(Prato => {
        res.status(200).json(Prato);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  }

  removePratoById(req, res) {
    const id = parseInt(req.body.id);

    db("Prato")
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
    const { nome, email, senha, foto_perfil, tipo } = req.body;

    db("Prato")
      .where({ id })
      .update({ nome, email, senha, foto_perfil, tipo })
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
