"use strict";

function calculadora() {
  var operacao = Number(prompt('Escolha uma operação:\n 1 - Soma (+) \n 2 - Subtração (-) \n 3 - Multiplicação (*)\n 4 - Divisão real(/)\n 5 - Divisão Inteira (%)\n 6 - Potenciação (**)'));

  if (!operacao || operacao >= 7) {
    alert('Erro - Operação Inválida!');
    calculadora();
  } else {
    var _soma = function _soma() {
      resultado = n1 + n2;
      alert("".concat(n1, " + ").concat(n2, " = ").concat(resultado));
      novaOperacao();
    };

    var _subtracao = function _subtracao() {
      resultado = n1 - n2;
      alert("".concat(n1, " - ").concat(n2, " = ").concat(resultado));
      novaOperacao();
    };

    var _multiplicacao = function _multiplicacao() {
      resultado = n1 * n2;
      alert("".concat(n1, " * ").concat(n2, " = ").concat(resultado));
      novaOperacao();
    };

    var _divisaoReal = function _divisaoReal() {
      resultado = n1 / n2;
      alert("".concat(n1, " / ").concat(n2, " = ").concat(resultado));
      novaOperacao();
    };

    var _divisaoInteira = function _divisaoInteira() {
      resultado = n1 % n2;
      alert("O resto da divis\xE3o entre ".concat(n1, " e ").concat(n2, " \xE9 igual a  ").concat(resultado));
      novaOperacao();
    };

    var _potenciacao = function _potenciacao() {
      resultado = Math.pow(n1, n2);
      alert("".concat(n1, " elevado a ").concat(n2, "\xAA \xE9 igual a ").concat(resultado));
      novaOperacao();
    };

    var novaOperacao = function novaOperacao() {
      var opcao = prompt('Deseja fazer outra operação?\n 1 - Sim\n 2 - Não');

      if (opcao == 1) {
        calculadora();
      } else if (opcao == 2) {
        alert('Fim da Execução!');
      } else {
        alert('Opção invalida!');
        novaOperacao();
      }
    };

    var n1 = Number(prompt('Insira o primeiro valor:'));
    var n2 = Number(prompt('Insira o segundo valor:'));
    var resultado;
  }
  /* if (operacao == 1) {
      soma();
  } else if (operacao == 2) {
      subtracao();
  } else if (operacao == 3) {
      multiplicacao();
  } else if (operacao == 4) {
      divisaoReal();
  } else if (operacao == 5) {
      divisaoInteira();
  } else if (operacao == 6) {
      potenciacao();
   } */


  switch (operacao) {
    case 1:
      soma();
      break;

    case 2:
      subtracao();
      break;

    case 3:
      multiplicacao();
      break;

    case 4:
      divisaoReal();
      break;

    case 5:
      divisaoInteira();
      break;

    case 6:
      potenciacao();
      break;
  }
}

calculadora();