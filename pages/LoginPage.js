class LoginPage{

    selectorsList(){
        const selectors={
            userNameField: '[name="username"]',
            passwordField: '[name="password"]',
            buttonSubmit:'[type="submit"]',

    }
    
    return selectors
    }

    acessLoginPage(){
        cy.visit("/signin")

    }

    loginSucess(username,password){
        cy.get(this.selectorsList().userNameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().buttonSubmit).click()
    }

    loginFail(username,password){
        cy.get(this.selectorsList().userNameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().buttonSubmit).click()
    } 
}
export default LoginPage