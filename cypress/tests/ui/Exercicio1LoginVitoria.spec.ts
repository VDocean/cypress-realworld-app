
describe('Testes Login com sucesso/Falha/Cadastro de usuarios', () => {
    it.only('Deve fazer login com um usuário válido', () => {
        cy.visit("http://localhost:3000/signin")
        cy.get('#username').type("Heath93")
        cy.get('#password').type("s3cret")
        cy.get('[data-test="signin-submit"]').click()

    });

    it('Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas', () => {
        cy.visit("http://localhost:3000/signin")
        cy.get('#username').type("adm")
        cy.get('#password').type("adm123")
        cy.get('[data-test="signin-submit"]').click({force: true})
        cy.get('.MuiAlert-message')
    });

    it('Deve registrar um novo usuário com informações válidas', () => {
        cy.visit("http://localhost:3000/signin")
        cy.get('[data-test="signup"]').click()
        cy.location('pathname').should('equal','/signup')
        cy.get('#firstName').type('Bob')
        cy.get('#lastName').type('Ross')
        cy.get('#username').type('PainterJoy90')
        cy.get('#password').type('s3cret')
        cy.get('#confirmPassword').type('s3cret')
        cy.get('[data-test="signup-submit"]').click()

    });

    it('Deve exibir mensagens de erro ao tentar registrar um novo usuário sem preencher todas as informações obrigatórias', () => { 
        cy.visit("http://localhost:3000/signin")
        cy.get('[data-test="signup"]').click()
        cy.location('pathname').should('equal','/signup')
        cy.get('#firstName').type('Bob')
        cy.get('#lastName').type('Ross')
        cy.get('#username').type('PainterJoy90')
        cy.get('#password').type('s3cret')
        cy.get('#confirmPassword').type('secret')
        cy.get('#confirmPassword-helper-text')
<<<<<<< HEAD
        //
=======
        
>>>>>>> 76bf2fa (Exercicio 1 concluido)
    });


    
});