'use strict';
const Contato = require('../models/contato');
const sanitize = require('mongo-sanitize');

exports.listaContatos = (req, res) => {
  Contato.find().populate('emergencia').exec()
  .then(
    (contatos) => {
      res.json(contatos);
    }, (erro) => {
    console.log(erro);
    res.status(500).json(erro);
  });
}

exports.obtemContato = (req, res) => {
  const _id = req.params.id;
  Contato.findById(_id).exec().then((contato) => {
    if(!contato) throw new Error("Contato não encontrado");
    res.json(contato);
  }, (erro) => {
    console.log(erro);
    res.status(404).json(erro);
  });
}

exports.removeContato = (req, res) => {
  const _id = sanitize(req.params.id);
  Contato.remove({_id}).exec().then(
    () => {
      res.end();
  }, (erro) => {
    return console.error(erro);
  });
}

exports.salvarContato = (req, res) => {
 const _id = req.body._id;
 const dados = {
   nome: req.body.nome,
   email: req.body.email,
   emergencia: req.body.emergencia || null
 };

 if(_id){
   Contato.findByIdAndUpdate(_id, dados).exec()
   .then(
    (contato) => {
     res.json(contato)
   }, (erro) => {
     console.log(erro);
     res.status(500).json(erro);
   });
 } else {
   Contato.create(dados).then(
     (contato) => {
       res.status(201).json(contato);
   }, (erro) => {
     console.log(erro);
     res.status(500).json(erro);
   });
 }
}
