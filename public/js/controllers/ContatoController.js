angular.module("contatooh").controller('ContatoController', function($scope, $routeParams, Contato){

  $scope.salva = () => {
    $scope.contato.$save()
    .then(() => {
      $scope.mensagem = {texto: 'Salvo com sucesso.'}
      $scope.contato = new Contato();
      $scope.$broadcast('contatoSalvo');
    })
    .catch((e) => {
      $scope.mensagem = {texto: 'Não foi possivel salvar.'}
    });
  }

  Contato.query((contatos) => {
    $scope.contatos = contatos;
  });

  if($routeParams.contatoId){
    Contato.get({id: $routeParams.contatoId}, (contato) => {
        $scope.contato = contato;
    }, (e) => {
      $scope.mensagem = {texto:'Não possivel obter o contato.'};
      console.log(e);
    });
  } else {
    $scope.contato = new Contato();
  }
});
