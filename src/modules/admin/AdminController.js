const db = require("../../config/db");

const { obterHash } = require("../../utils");
const tableName = "admin";

class AdminController {
    async getAdmins(req, res) {
        db.select()
            .table(tableName)
            .then(data => {
                res.status(200).json(data);
            })
            .catch(err => {
                res.status(500).json(err);
            });
    }

    getAdminById(req, res) {
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

    async insertAdmin(req, res) {
        const { nome, email, senha, foto_perfil } = req.body;

        const user = await db("usuario")
            .where({ email })
            .first();

        if (!user) {
            obterHash(senha, hash => {
                const senha = hash;

                db(tableName)
                    .insert({ nome, email, senha, foto_perfil, is_admin: true })
                    .returning("*")
                    .then(data => {
                        res.status(200).json(data);
                    })
                    .catch(err => {
                        res.status(500).json(err);
                    });
            });
        } else {
            res.status(500).send("email já cadastrado ");
        }
    }

    removeAdminById(req, res) {
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

    async updateAdmin(req, res) {
        const id = parseInt(req.params.id);
        const { nome, email, senha, foto_perfil } = req.body;

        const user = await db("usuario")
            .where({ email })
            .first();

        if (!user) {
            obterHash(senha, hash => {
                const senha = hash;

                db(tableName)
                    .where({ id })
                    .update({ nome, email, senha, foto_perfil, is_admin: true })
                    .returning("*")
                    .then(data => {
                        res.status(200).json(data);
                    })
                    .catch(err => {
                        res.status(500).json(err);
                    });
            });
        } else {
            res.status(500).send("email já cadastrado ");
        }
    }
}

module.exports = new AdminController();
