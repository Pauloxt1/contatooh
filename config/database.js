'use strict';

const mongoose = require('mongoose');

module.exports = (uri) => {
  mongoose.connect(uri);

  mongoose.connection.on('connected', () => {
    console.log('Mongoose conectado em '+uri);
  });

  mongoose.connection.on('disconnected', () => {
    console.log('Mongoose desconectado de '+uri);
  });

  mongoose.connection.on('error', () => {
    console.log('Mongoose! Erro na conexão: '+uri);
  });

  process.on('SIGINT', () => {
    mongoose.connection.close(() => {
        console.log('Mongoose! Desconectado pelo termino da apliação');
        process.exit(0);
    });
  });
}
