class RegisterPage{

    selectorList(){
        const selectors={

        registerLink:'[data-test="signup"]',
        firstNameReg:'#firstName',
        lastNameReg:'#lastName',
        userReg:'#username',
        passwordReg:"#password",
        confirmPassReg:'#confirmPassword',
        buttonSignUp:'[data-test="signup-submit"]'

        }
        return selectors

    }

    acessRegister(){
        cy.visit("/signin")
        cy.get(this.selectorList().registerLink).click()
        cy.location('pathname').should('equal','/signup')
    }

    FillDataUser(firstName,lastName,userName){

        cy.get(this.selectorList().firstNameReg).type(firstName)
        cy.get(this.selectorList().lastNameReg).type(lastName)
        cy.get(this.selectorList().userReg).type(userName)
        
        
    }

    registerSucess(password){
        cy.get(this.selectorList().passwordReg).type(password)
        cy.get(this.selectorList().confirmPassReg).type(password)
        cy.get(this.selectorList().buttonSignUp).click()

    }

    registerFail(passwordWrong,password){
        cy.get(this.selectorList().passwordReg).type(password)
        cy.get(this.selectorList().confirmPassReg).type(passwordWrong)
        cy.get('#confirmPassword-helper-text')

    }

}
export default RegisterPage