'use strict';
const ContatosPage = new require('./pages/contatosPage.js');

describe('Pagina principal', function(){

  const pagina = new ContatosPage();

  beforeEach(function(){
      browser.get('http://localhost:3000/#/contatos');
  });

  it('Deve estar logado', function(){
    pagina.obtemUsuarioLogado().then(function(texto){
      expect(texto.trim().length).toBeGreaterThan(0)
    });
  });

  it('Deve remover um contato da lista', function(){
    const totalAntes = pagina.obterTotalDeItensDaLista();
    pagina.removerPrimeiroItemDaLista();
    const totalDepois = pagina.obterTotalDeItensDaLista();
    expect(totalDepois).toBeLessThan(totalAntes);
  });
  //
  // it('Deve remover um contato da lista', function(){
  //   var totalAntes = element.all(by.repeater('contato in contatos')).count();
  //   element.all(by.repeater('contato in contatos').row(0)).element(by.css('.btn')).click();
  //   var totalDepois = element.all(by.repeater('contato in contatos')).count();
  //   expect(totalDepois).toBeLessThan(totalAntes);
  // });
});
