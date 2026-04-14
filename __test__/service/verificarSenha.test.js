const {ServicoSenha} = require("../../src/service/servicoSenha.js");
const {Senha} = require("../../src/model/senha.js");

describe("validar senha", () => {
    test('rejeitar senha com menos de 8 caracteres', () => {
        const senha = new Senha("123456");
        const resultado = ServicoSenha.verificarSenha(senha);
        expect(resultado).toBe(false);
    });
});