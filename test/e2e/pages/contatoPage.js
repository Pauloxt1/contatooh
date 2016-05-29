'use strict';
const ContatoPage = function(){

  this.visitar = function(){
    browser.get('http://localhost:3000/#/contato');
  };

  this.digitarNome = function(nome){
    element(by.model('contato.nome')).sendKeys(nome);
  };
  this.digitarEmail = function(email){
    element(by.model('contato.email')).sendKeys(email);
  };
  this.salvar = function(){
    element(by.css('.btn-primary')).click();
  };
  this.obterMensagem = function(){
    return element(by.binding('mensagem.texto')).getText();
  };
}

module.exports = ContatoPage;