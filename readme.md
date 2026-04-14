# Atividade Prática com TDD - módulo de validação de senhas

Este repositório contém a implementação de um módulo de validação de senhas como parte do desenvolvimento do conteúdo de Teste de Software. O projeto foi desenvolvido com foco estrito na metodologia **TDD (Test-Driven Development)**, garantindo a entrega de um código limpo, modular e coberto por testes.

## Tecnologias e Execução

- **Linguagem:** JavaScript (Node.js)
- **Testes:** Jest

**Como rodar localmente:**
1. Clone o repositório.
2. Instale as dependências: `npm install`
3. Execute o arquivo de testes: `npx jest __test__/service/verificarSenha.test.js`

## Critérios para Aceitação da Senha
Uma senha é **válida** se atender a **TODOS** os critérios:
- ✓ Mínimo 8 caracteres
- ✓ Pelo menos 1 LETRA MAIÚSCULA
- ✓ Pelo menos 1 letra minúscula  
- ✓ Pelo menos 1 NÚMERO
- ✓ Pelo menos 1 caractere especial (!@#$%^&*...)
- ✓ Sem espaços em branco

## Evolução via TDD

**Fase 1:** Validar tamanho mínimo
**Fase 2:** Validar letra maiúscula  
**Fase 3:** Validar letra minúscula
**Fase 4:** Validar números
**Fase 5:** Validar caracteres especiais
**Fase 6:** Validar ausência de espaços

## Cobertura de Testes

------------------|---------|----------|---------|---------|-------------------
File              | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
------------------|---------|----------|---------|---------|-------------------
All files         |     100 |      100 |     100 |     100 |                   
 model            |     100 |      100 |     100 |     100 |                   
  senha.js        |     100 |      100 |     100 |     100 |                   
 service          |     100 |      100 |     100 |     100 |                   
  servicoSenha.js |     100 |      100 |     100 |     100 |                   
------------------|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
Tests:       18 passed, 18 total
Snapshots:   0 total

A cobertura de testes pode ser verificada usando o comando:
`npx jest __test__/service/verificarSenha.test.js --coverage`

## Decisões Arquiteturais

- **Expressões Regulares (Regex):** Optei por utilizar Regex (ex: `/[A-Z]/`, `/[0-9]/`) em vez de criar laços de repetição para varrer a string. Isso permitiu que a fase *Green* fosse resolvida com o código mínimo necessário, mantendo a performance e a legibilidade.
- **Utilização de um Model para Senha** O uso de um Model para senha, foi uma escolha focada em aprender como utilizar por meio dele, para esse tipo de implementação não se faz necessario.
- **Testes similares** A estrutura similar dos testes foi escolhida para fixação e aprendizado, o mesmo poderia ter sido realizado de maneiras diferentes.
- **Estrutura do Projeto** A estrutura do projeto segue a que foi mostrada em aula, desde a organização das pastas até a escrita dos testes, o que diferencia é a aplicação em service para garantir o que os testes passem.

## Desafios Encontrados

- **Texto para teste** Ao formular a senha, não pensei na questão incremental do código, sendo assim, com a adição de novas barreiras os testes anteriores falhavam, não pela escrita do teste, mas pela senha passada não atender a condição de outro teste, devolvendo assim um valor incorreto.
- **Isolamento de Cenários de Falha:** Aprendi que os testes precisam falhar pelo motivo correto. Ao criar o teste para a ausência de números, por exemplo, este teste não pode falhar pela falta de um caractere especial.
- **Impossibilidade da aplicação do Refactor no início do projeto** Por ter pouco código, o mesmo se faz facilmente legivel e compreensivel de sua função, não sendo necessario o refactor, algo que mudou com o decorrer do desenvolvimento, e com a adição de novos parametros para o aceite da senha.
