"use strict";

function comparaNumeros(num1, num2) {
  if (!num1 || !num2) return 'Digite dos valores!';
  var primeiraFrase = criaPrimeiraFrase(num1, num2);
  var segundaFrase = criaSegundaFrase(num1, num2);
  return "".concat(primeiraFrase, " ").concat(segundaFrase);
}

function criaPrimeiraFrase(num1, num2) {
  var saoIguais = '';

  if (num1 !== num2) {
    saoIguais = 'Não';
  }

  return " Os n\xFAmeros ".concat(num1, " e ").concat(num2, " ").concat(saoIguais, " s\xE3o iguais. ");
}

;

function criaSegundaFrase(num1, num2) {
  var soma = num1 + num2;
  var resultado10 = 'menor';
  var resultado20 = 'menor';
  var compara10 = soma > 10;
  var compara20 = soma > 20;

  if (compara10) {
    resultado10 = 'maior';
  }

  if (compara20) {
    resultado20 = 'maior';
  }

  return "Sua soma \xE9 ".concat(soma, ", que \xE9 ").concat(resultado10, " que 10 e ").concat(resultado20, " que 20.");
}

console.log(comparaNumeros(20, 20));