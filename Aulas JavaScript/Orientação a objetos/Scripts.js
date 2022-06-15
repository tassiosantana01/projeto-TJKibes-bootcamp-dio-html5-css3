class ContaBancaria {
    constructor(agencia, numero, tipo) {
    this.agencia = agencia;
    this.numero = numero;
    this.tipo = tipo;
    this._saldo = 0;
    }

    get saldo() {
        return this._saldo;        
    }

    set saldo(valor) {
        this._saldo = valor;
    }

    sacar(valor) {
        if (valor > this._saldo) {
            return "Operação negada"
        }
        this.saldo = this._saldo - valor;

        return this.saldo;
    }

    depositar(valor) {
        this._saldo = this._saldo + valor;

        return this._saldo;
    }
}

class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, cartaoCredito) {
        super(agencia, numero);
        this.tipo = 'corrente';
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito() {
        this._cartaoCredito;
    }
    
    set cartaoCreito(valor) {
        this._cartaoCredito = valor;
    }
}

class ContaPoupança extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'poupança';       
    }
}

class ContaUniversitario extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'universitario';       
    }

    sacar(valor) {
        if (valor > 500) {
            return 'Operação Negada!';
        }

    this._saldo = this._saldo - valor;
    }
}
