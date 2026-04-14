const {ServicoSenha} = require("../../src/service/servicoSenha.js");
const {Senha} = require("../../src/model/senha.js");

describe("validar senha", () => {
    test('rejeitar senha com menos de 8 caracteres', () => {
        const senha = new Senha("abcde");
        const resultado = ServicoSenha.verificarSenha(senha.senha);
        expect(resultado).toBe(false);  
    });

    test('aceitar senha com 8 ou mais caracteres', () => {
        const senha = new Senha("Abcdefgh");
        const resultado = ServicoSenha.verificarSenha(senha.senha);
        expect(resultado).toBe(true);  
    });

    test('rejeitar senha sem letra Maiúscula', ()=> {
        const senha = new Senha("abcdefgh");
        const resultado = ServicoSenha.verificarSenha(senha.senha);
        expect(resultado).toBe(false);
    })

    test('aceitar senha com letra Maiúscula', ()=> {
        const senha = new Senha("Abcdefgh");
        const resultado = ServicoSenha.verificarSenha(senha.senha);
        expect(resultado).toBe(true);
    });

    test('rejeitar sem letra minúscula', ()=> {
        const senha = new Senha("ABCDEFGH");
        const resultado = ServicoSenha.verificarSenha(senha.senha);
        expect(resultado).toBe(false);
    });

});