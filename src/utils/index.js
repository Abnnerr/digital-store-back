const jwt = require('jsonwebtoken')

function rotaProtegida(req, res, next) {
    const token = req.headers.authorization;

    if (!token) {
        res.send({
            tipo: "warning",
            mensagem: "Não autorizado"
        });
    }

    jwt.verify(token.split(" ")[1], process.env.SEGREDO, (error) => {
        if (error) {
            res.send ({
                tipo: "warning",
                mensagem: "token invalido"
                // mensagem: error.message
            })
        }
        next()
    });


}
module.exports = {
    rotaProtegida
}