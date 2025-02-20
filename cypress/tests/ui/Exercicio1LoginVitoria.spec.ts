import userData from "../../fixtures/userData.json"

describe('Testes Login com sucesso/Falha/Cadastro de usuarios', () => {

    const selectorList={
        userName: '[name="username"]',
        password: '[name="password"]',
        buttonSubmit:'[type="submit"]',
        registerLink:'[data-test="signup"]',
        firstNameReg:'#firstName',
        lastNameReg:'#lastName',
        userReg:'#username',
        passwordReg:"#password",
        confirmPassReg:'#confirmPassword',
        buttonSignUp:'[data-test="signup-submit"]'
        

    }
    
    it('Deve fazer login com um usuário válido', () => {
        cy.visit("/signin")
        cy.get(selectorList.userName).type(userData.loginSucess.userName)
        cy.get(selectorList.password).type(userData.loginSucess.password)
        cy.get(selectorList.buttonSubmit).click()

    });

    it('Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas', () => {
        cy.visit("/signin")
        cy.get(selectorList.userName).type(userData.loginFail.userName)
        cy.get(selectorList.password).type(userData.loginFail.password)
        cy.get(selectorList.buttonSubmit).click({force: true})
        cy.get('.MuiAlert-message')
    });

    it('Deve registrar um novo usuário com informações válidas', () => {
        cy.visit("/signin")
        cy.get(selectorList.registerLink).click()
        cy.location('pathname').should('equal','/signup')
        cy.get(selectorList.firstNameReg).type(userData.RegisterNewUserSucess.firstName)
        cy.get(selectorList.lastNameReg).type(userData.RegisterNewUserSucess.lastName)
        cy.get(selectorList.userName).type(userData.RegisterNewUserSucess.userName)
        cy.get(selectorList.passwordReg).type(userData.RegisterNewUserSucess.password)
        cy.get(selectorList.confirmPassReg).type(userData.RegisterNewUserSucess.password)
        cy.get(selectorList.buttonSignUp).click()

    });

    it('Deve exibir mensagens de erro ao tentar registrar um novo usuário sem preencher todas as informações obrigatórias', () => { 
        cy.visit("/signin")
        cy.get(selectorList.registerLink).click()
        cy.location('pathname').should('equal','/signup')
        cy.location('pathname').should('equal','/signup')
        cy.get(selectorList.firstNameReg).type(userData.RegisterNewUserSucess.firstName)
        cy.get(selectorList.lastNameReg).type(userData.RegisterNewUserSucess.lastName)
        cy.get(selectorList.userName).type(userData.RegisterNewUserSucess.userName)
        cy.get(selectorList.passwordReg).type(userData.RegisterNewUserSucess.password)
        cy.get(selectorList.confirmPassReg).type(userData.RegisterNewUserFail.passwordWrong)
        cy.get('#confirmPassword-helper-text')
<<<<<<< HEAD
        //
=======
        
>>>>>>> 76bf2fa (Exercicio 1 concluido)
    });


    
});