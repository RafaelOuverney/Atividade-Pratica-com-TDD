const {ServicoSenha} = require("../../src/service/servicoSenha.js");
const {Senha} = require("../../src/model/senha.js");

describe("validar senha", () => {
    test('rejeitar senha com menos de 8 caracteres', () => {
        const senha = new Senha("12345");
        const resultado = ServicoSenha.verificarSenha(senha.senha);
        expect(resultado).toBe(false);  
    });

    test('aceitar senha com 8 ou mais caracteres', () => {
        const senha = new Senha("12345678");
        const resultado = ServicoSenha.verificarSenha(senha.senha);
        expect(resultado).toBe(true);  
    });
});