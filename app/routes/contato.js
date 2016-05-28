'use strict';

const verificarAutenticacao = require('../../config/auth');

module.exports = (app) => {
  const controller = require('../controllers/contato');

  app.route('/contatos')
    .get(verificarAutenticacao, controller.listaContatos)
    .post(verificarAutenticacao, controller.salvarContato);

  app.route('/contatos/:id')
    .get(verificarAutenticacao, controller.obtemContato)
    .delete(verificarAutenticacao, controller.removeContato);

}
