class ServicoSenha {

    static verificarSenha(senha) {
        return this.temTamanhoMinimo(senha) && this.temLetraMaiuscula(senha);
    }

    static temTamanhoMinimo(senha) {
        return senha.length >= 8;
    }

    static temLetraMaiuscula(senha) {
        return /[A-Z]/.test(senha);
    }
}

module.exports = { ServicoSenha };