describe("validar senha", () => {
    test('rejeitar senha com menos de 8 caracteres', () => {
        const senha = new Senha("testesenha");
        const resultado = senha.verificarSenha();
        expect(resultado).toBe(false);
    });
});