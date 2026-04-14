class ServicoSenha {

    static verificarSenha(senha) {
        if (senha.length < 8) {
            return false;
        }
        if (!/[A-Z]/.test(senha)) {
            return false;
        }
        else {
            return true;
        }
    }
}

module.exports = { ServicoSenha };