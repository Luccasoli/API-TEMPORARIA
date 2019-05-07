const db = require("../../config/db");

const tableName = "receita";

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

  getReceitasByIngrediente(req, res) {
    const id_ingrediente = parseInt(req.params.id);

    db.select(
      "receita.id",
      "receita.nome",
      "receita.passos",
      "receita.qnt_porcoes",
      "tempo_preparo",
      "receita.imgs",
      "receita.autor",
      "receita.prato"
    )
      .table(tableName)
      .innerJoin(
        "ingredientes_receita",
        "ingredientes_receita.receita",
        `${tableName}.id`
      )
      .innerJoin(
        "ingrediente",
        "ingredientes_receita.ingrediente",
        "ingrediente.id"
      )
      .where("ingrediente.id", "=", id_ingrediente)
      .then(data => {
        res.status(200).json(data);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  }

  getReceitasByAutor(req, res) {
    const id_autor = parseInt(req.params.id);

    db.select(
      "receita.id",
      "receita.nome",
      "receita.passos",
      "receita.qnt_porcoes",
      "tempo_preparo",
      "receita.imgs",
      "receita.autor",
      "receita.prato"
    )
      .table(tableName)
      .innerJoin("autor", "receita.autor", "autor.id")
      .where("autor.id", "=", id_autor)
      .then(data => {
        res.status(200).json(data);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  }

  getReceitasByPrato(req, res) {
    const id_prato = parseInt(req.params.id);

    db.select(
      "receita.id",
      "receita.nome",
      "receita.passos",
      "receita.qnt_porcoes",
      "tempo_preparo",
      "receita.imgs",
      "receita.autor",
      "receita.prato"
    )
      .table(tableName)
      .innerJoin("prato", "receita.prato", "prato.id")
      .where("prato.id", "=", id_prato)
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
    let {
      nome,
      passos,
      qnt_porcoes,
      tempo_preparo,
      imgs,
      autor,
      prato
    } = req.body;

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
    let {
      nome,
      passos,
      qnt_porcoes,
      tempo_preparo,
      imgs,
      autor,
      prato
    } = req.body;

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


  getRecomendado(req, res){
    const tipo = req.params.tipo.toString();
    db.innerJoin(
        "prato",
        `${tableName}.prato`,
        "prato.id"
      )
      .select("prato.nome","tempo_preparo","qnt_porcoes")
      .table(tableName)
      .where("prato.tipo", "LIKE",  tipo)
      .orderBy("RAND()", "LIMIT", 1)
      .then(data => {
        res.status(200).json(data);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  }
}

module.exports = new ReceitaController();
