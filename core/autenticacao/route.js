const controller = require('./controller');

module.exports = (app) => {
    app.post('/login', controller.logar);
}