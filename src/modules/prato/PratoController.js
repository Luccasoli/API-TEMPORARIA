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
    const { nome, imgs, tipo } = req.body;

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
    const { nome, imgs, tipo } = req.body;

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

  getRecomendadoPrincipal(req, res) {
    db(tableName)
    .join('receita', 'receita.codPrato')
    .select('receita.nome', 'receita.passos', 'receita.tempo_preparo', 
    'receita.qnt_porcoes')
    .where('tipo', '=','principal') 
  }
}

module.exports = new PratoController();
