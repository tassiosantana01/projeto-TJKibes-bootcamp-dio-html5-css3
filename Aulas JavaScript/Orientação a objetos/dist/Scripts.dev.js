"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ContaBancaria =
/*#__PURE__*/
function () {
  function ContaBancaria(agencia, numero, tipo) {
    _classCallCheck(this, ContaBancaria);

    this.agencia = agencia;
    this.numero = numero;
    this.tipo = tipo;
    this._saldo = 0;
  }

  _createClass(ContaBancaria, [{
    key: "sacar",
    value: function sacar(valor) {
      if (valor > this._saldo) {
        return "Operação negada";
      }

      this.saldo = this._saldo - valor;
      return this.saldo;
    }
  }, {
    key: "depositar",
    value: function depositar(valor) {
      this._saldo = this._saldo + valor;
      return this._saldo;
    }
  }, {
    key: "saldo",
    get: function get() {
      return this._saldo;
    },
    set: function set(valor) {
      this._saldo = valor;
    }
  }]);

  return ContaBancaria;
}();

var ContaCorrente =
/*#__PURE__*/
function (_ContaBancaria) {
  _inherits(ContaCorrente, _ContaBancaria);

  function ContaCorrente(agencia, numero, cartaoCredito) {
    var _this;

    _classCallCheck(this, ContaCorrente);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ContaCorrente).call(this, agencia, numero));
    _this.tipo = 'corrente';
    _this._cartaoCredito = cartaoCredito;
    return _this;
  }

  _createClass(ContaCorrente, [{
    key: "cartaoCredito",
    get: function get() {
      this._cartaoCredito;
    }
  }, {
    key: "cartaoCreito",
    set: function set(valor) {
      this._cartaoCredito = valor;
    }
  }]);

  return ContaCorrente;
}(ContaBancaria);

var ContaPoupança =
/*#__PURE__*/
function (_ContaBancaria2) {
  _inherits(ContaPoupança, _ContaBancaria2);

  function ContaPoupança(agencia, numero) {
    var _this2;

    _classCallCheck(this, ContaPoupança);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(ContaPoupança).call(this, agencia, numero));
    _this2.tipo = 'poupança';
    return _this2;
  }

  return ContaPoupança;
}(ContaBancaria);

var ContaUniversitario =
/*#__PURE__*/
function (_ContaBancaria3) {
  _inherits(ContaUniversitario, _ContaBancaria3);

  function ContaUniversitario(agencia, numero) {
    var _this3;

    _classCallCheck(this, ContaUniversitario);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(ContaUniversitario).call(this, agencia, numero));
    _this3.tipo = 'universitario';
    return _this3;
  }

  _createClass(ContaUniversitario, [{
    key: "sacar",
    value: function sacar(valor) {
      if (valor > 500) {
        return 'Operação Negada!';
      }

      this._saldo = this._saldo - valor;
    }
  }]);

  return ContaUniversitario;
}(ContaBancaria);