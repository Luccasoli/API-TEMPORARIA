const { authSecrets } = require("../../config/.env");
const jwt = require("jwt-simple");
const bcrypt = require("bcrypt");
const db = require("../../config/db");

const signin = async (req, res) => {
    if (!req.body.email || !req.body.senha) {
        return res.status(400).send("Dados incompletos");
    }

    const user = await db("usuario")
        .where({ email: req.body.email })
        .first();

    if (user) {
        bcrypt.compare(req.body.senha, user.senha, (err, isMatch) => {
            if (err || !isMatch) {
                return res.status(401).send();
            }

            const payload = { id: user.id, is_admin: user.is_admin, email: user.email };
            res.json({
                nome: user.nome,
                email: user.email,
                token: jwt.encode(payload, authSecrets),
                is_admin: user.is_admin
            });
        });
    } else {
        res.status(400).send("Usuário não cadastrado");
    }
};

module.exports = { signin };
