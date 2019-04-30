const { authSecrets } = require("./.env");
const db = require("./db");
const passport = require("passport");
const passportJwt = require("passport-jwt");
const { Strategy, ExtractJwt } = passportJwt;

const params = {
    secretOrKey: authSecrets,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
};

const strategy = new Strategy(params, (payload, done) => {
    db("usuario")
        .where({ id: payload.id, is_admin: payload.is_admin, email: payload.email })
        .first()
        .then(user => {
            if (user) {
                done(null, {
                    id: user.id,
                    email: user.email,
                    nome: user.nome,
                    is_admin: user.is_admin
                });
            } else {
                done(null, false);
            }
        })
        .catch(err => error(err, false));
});

passport.use(strategy);

module.exports = {
    initialize: () => passport.initialize(),
    authenticate: () => passport.authenticate("jwt", { session: false })
};
