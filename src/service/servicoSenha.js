class ServicoSenha {

    static verificarSenha(senha) {
        return this.temTamanhoMinimo(senha) && this.temLetraMaiuscula(senha) && this.temLetraMinuscula(senha) && this.temNumero(senha);
    }

    static temTamanhoMinimo(senha) {
        return senha.length >= 8;
    }

    static temLetraMaiuscula(senha) {
        return /[A-Z]/.test(senha);
    }

    static temLetraMinuscula(senha) {
        return /[a-z]/.test(senha);
    }

    static temNumero(senha) {
        return /[0-9]/.test(senha);
    }
}

module.exports = { ServicoSenha };