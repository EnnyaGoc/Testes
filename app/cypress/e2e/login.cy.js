describe('Fluxo de Login', () => {
    //é um bloco de testes – só pra organização. Esse aqui diz que estamos testando o "Fluxo de Login".
        it('deve permitir login com credenciais válidas', () => {
        //é o teste em si. O que está sendo testado aqui é: "deve permitir login com credenciais válidas" ✅
          cy.visit('/login');
          //Acessa a página de login (/login)
          cy.get('#usuario').type('neilton');
          //Seleciona o campo com ID usuario e digita 'neilton'
          cy.get('#senha').type('senha123');
          //Seleciona o campo com ID senha e digita 'senha123'
          cy.get('#entrar').click();
          //Clica no botão com ID entrar
          cy.contains('Bem-vindo, Neilton');
          //Verifica se a página contém o texto Bem-vindo, Neilton. Isso serve pra confirmar que o login foi bem-sucedido.
        });
      });