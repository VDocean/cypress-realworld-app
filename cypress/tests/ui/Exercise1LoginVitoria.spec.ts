import userData from "../../fixtures/userData.json"
import LoginPage from "../../../pages/LoginPage"
import RegisterPage from "../../../pages/RegisterPage"

const login=new LoginPage()
const register=new RegisterPage()

describe('Testes Login com sucesso/Falha/Cadastro de usuarios', () => {

    
    it('Deve fazer login com um usuário válido', () => {
        
        login.acessLoginPage()
        login.loginSucess(userData.loginSucess.userName,userData.loginSucess.password)
        

    });

    it('Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas', () => {
        
        login.acessLoginPage()
        login.loginFail(userData.loginFail.userName,userData.loginFail.password)
        
    });

    it('Deve registrar um novo usuário com informações válidas', () => {

        register.acessRegister()
        register.FillDataUser(userData.RegisterNewUserSucess.firstName,userData.RegisterNewUserSucess.lastName,
            userData.RegisterNewUserSucess.userName)
        register.registerSucess(userData.RegisterNewUserSucess.password)    

    });

    it('Deve exibir mensagens de erro ao tentar registrar um novo usuário sem preencher todas as informações obrigatórias', () => { 
<<<<<<< HEAD
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
=======
        register.acessRegister()
        register.FillDataUser(userData.RegisterNewUserSucess.firstName,userData.RegisterNewUserSucess.lastName,
            userData.RegisterNewUserSucess.userName)
            register.registerFail(userData.RegisterNewUserFail.passwordWrong,userData.RegisterNewUserSucess.password)
>>>>>>> c018e09 (pages login e registro)
        
>>>>>>> 76bf2fa (Exercicio 1 concluido)
    });

    



    
});