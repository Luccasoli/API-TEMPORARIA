const db = require("../../config/db");

class AutorController {
  async getAutores(req, res) {
    db.select()
      .table("autor")
      .then(autores => {
        res.status(200).json(autores);
      })
      .catch(err => {
        throw err;
      });
  }

  getAutorById(req, res) {
    const id = parseInt(req.params.id);
    db.select()
      .table("autor")
      .where({ id })
      .then(autor => {
        res.status(200).json(autor);
      })
      .catch(err => {
        throw err;
      });
  }

  insertAutor(req, res) {
    const { nome, email, senha, foto_perfil, tipo } = req.body;

    db("autor")
      .insert({ nome, email, senha, foto_perfil, tipo })
      .returning("*")
      .then(autor => {
        res.status(200).json(autor);
      })
      .catch(err => {
        throw err;
      });
  }

  removeAutorById(req, res) {
    const id = parseInt(req.body.id);

    db("autor")
      .where({ id })
      .del()
      .then(num => {
        res.status(200).send();
      })
      .catch(err => {
        throw err;
      });
  }

  updateAutor(req, res) {
    const id = parseInt(req.params.id);
    const { nome, email, senha, foto_perfil, tipo } = req.body;

    db("autor")
      .where({ id })
      .update({ nome, email, senha, foto_perfil, tipo })
      .returning("*")
      .then(autor => {
        res.status(200).json(autor);
      })
      .catch(err => {
        throw err;
      });
  }
}

module.exports = new AutorController();
