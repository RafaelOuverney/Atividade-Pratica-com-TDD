class ServicoSenha {

    static verificarSenha(senha) {
        if (senha.length >= 8) {
            return true;
        } else {
            return false;
        }
    }
}

module.exports = { ServicoSenha };