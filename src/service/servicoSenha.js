class ServicoSenha {

    static verificarSenha(senha) {
        return this.temTamanhoMinimo(senha) && 
        this.temPadrao(senha, /[A-Z]/) && 
        this.temPadrao(senha, /[a-z]/) && 
        this.temPadrao(senha, /[0-9]/) &&
        this.temPadrao(senha, /[!@#$%^&*(),.?":{}|<>]/);
    }

    static temTamanhoMinimo(senha) {
        return senha.length >= 8;
    }

    static temPadrao(senha, regex){
        return regex.test(senha);
    }

}

module.exports = { ServicoSenha };