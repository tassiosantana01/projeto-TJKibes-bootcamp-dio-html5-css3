"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// tipos primitivos
// boolean
var vOuf = false;
console.log(_typeof(vOuf)); // number

var numeroQualquer = 1;
console.log(_typeof(numeroQualquer)); //string

var nome = 'diana';
console.log(_typeof(nome)); //function

var funcao = function funcao() {};

console.log(_typeof(funcao));