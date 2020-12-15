const controller = require('./controller');

module.exports = (app) => {
    app.get('/tipos-de-cliente', controller.buscarTodos);
    app.get('/tipos-de-cliente/:id', controller.buscarPorId);
    app.post('/tipos-de-cliente/', controller.inserir);
    app.put('/tipos-de-cliente/:id', controller.alterar);
    app.delete('/tipos-de-cliente/:id', controller.remover);
}