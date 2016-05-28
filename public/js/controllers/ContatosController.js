angular.module('contatooh').controller('ContatosController', function($scope, Contato){
  'use strict';

  function buscarContatos(){
    Contato.query((contatos) => {
      $scope.contatos = contatos;
      $scope.mensagem = {};
    },
    (e) => {
      console.log('Não foi possivel obter a lista de contatos');
      console.log(e);
      $scope.mensagem = {
        texto: 'Não foi possivel obter a lista'
      };
    });
  }

  buscarContatos();

  $scope.remove = (contato) => {
    Contato.delete({id: contato._id},
      buscarContatos,
      (e) => {
        console.log('Não foi possivel remover o contato');
        console.log(e);
        $scope.mensagem = {
          texto: 'Não foi possivel obter a lista'
        };
      });
  }

});
