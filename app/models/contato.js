'use strict';
const mongoose = require('mongoose');

const Schema = mongoose.Schema({
  nome:{type: String, required: true},
  email:{type: String, required: true, index:{unique:true}},
  emergencia:{type: mongoose.Schema.ObjectId, ref:'Contato'}
});

module.exports = mongoose.model('Contato', Schema);
