import userData from "../../fixtures/userData.json"
import LoginPage from "../../../pages/LoginPage"


const login=new LoginPage()

const datalist={

    userTransactions:'[data-test="nav-personal-tab"]',
    NoTransactionWarning:'.MuiTypography-gutterBottom',
    userTransactionStory:'.TransactionTitle-titleName'

}

describe('Visualizar histórico de transações com sucesso', () => {
    
    
    it('Deve exibir o histórico de transações de um usuário corretamente', () => {
      // Implemente os passos do caso de teste aqui
        login.acessLoginPage()
        login.loginSucess(userData.loginSucess.userName,userData.loginSucess.password)
        cy.get(datalist.userTransactions).click()
        cy.get(datalist.userTransactionStory)


    });

    
    it('Quando sem transações deve exibir mensagem', () => {
        login.acessLoginPage()
        login.loginSucess(userData.loginSucess.userName,userData.loginSucess.password)
        cy.get(datalist.NoTransactionWarning).eq(2)
    });




});