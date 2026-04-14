class ServicoSenha {

    static verificarSenha(senha) {
        return this.temTamanhoMinimo(senha) && this.temLetraMaiuscula(senha) && this.temLetraMinuscula(senha);
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
}

module.exports = { ServicoSenha };