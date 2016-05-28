'use strict';
const mongoose = require('mongoose');
const findOrCreate = require('mongoose-findorcreate');

const schema = mongoose.Schema({
  login:{
    type: String,
    required: true,
    index:{
      unique:true
    }},
    nome:{
      type: String,
      required: true
    },
    inclusao:{
      type: Date,
      default: Date.now
    }
});

schema.plugin(findOrCreate);

module.exports = mongoose.model('Usuario', schema);
