const bodyParser = require('body-parser');  // ler o json que vai entrar
const person = require('./person');

module.exports = (app) => {
    app.use(
        bodyParser.json(),
        person
    )
}