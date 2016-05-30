'use strict';
describe('meuBotaoAviso', () => {
  let $scope;
  let element;

  beforeEach(() => {
    module('meusComponentes');

    inject(($rootScope, $compile) => {
      $scope = $rootScope.$new();
      element = angular.element('<meu-botao-aviso nome="Remover" acao="remove()">');

      $compile(element)($scope);
      $scope.$digest();
    });
  });

  it('deve criar um botao de aviso com texto e função', () => {
    expect(element.text()).toContain('Remover');
    expect(element.attr('acao')).toBe('remove()');
  });

});

describe('meuFocus', () => {
  let $scope;
  let element;
  let evento = 'contatoSalvo';

  beforeEach(() => {
    module('meusComponentes');

    inject(($rootScope, $compile) => {
      $scope = $rootScope.$new();
      element = angular.element('<button meu-focus evento="'+evento+'">Voltar</button>');

      $compile(element)($scope);
      $scope.$digest();
    });
  });

  it('Deve focar o botão', () => {
    angular.element(document.body).append(element);
    $scope.$broadcast(evento);
    expect(angular.element(document.activeElement).text()).toBe('Voltar');
  });

});

describe('meuPainel', () => {
  let $scope;
  let element;

  beforeEach(() => {
    module('meusComponentes');
    module('templates');
    inject(($rootScope, $compile) => {
      $scope = $rootScope.$new();
      element = angular.element('<meu-painel titulo="Principal"><p>Oi</p></meu-painel>');

      $compile(element)($scope);
      $scope.$digest();
    });
  });

  it('Deve conter o titulo e o conteudo no painel', () => {
      expect(element.text()).toContain('Principal');
      expect(element.text()).toContain('Oi');
  });
});
