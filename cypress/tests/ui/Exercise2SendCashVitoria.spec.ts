import userData from "../../fixtures/userData.json"
import LoginPage from "../../../pages/LoginPage"
import TransferPage from "../../../pages/TransferPage"

const login=new LoginPage()
const transfer=new TransferPage()

describe('Teste transferência bancária', () => {

    
    it('Transferência menor que o saldo', () => {
        login.acessLoginPage()
        login.loginSucess(userData.loginSucess.userName,userData.loginSucess.password)
        transfer.entryPageTransfer()
        transfer.SendTransfer(userData.Transfer.FewAmount,userData.Transfer.description)
        
    });

    it('Transferência maior que o saldo', () => {
        login.acessLoginPage()
        login.loginSucess(userData.loginSucess.userName,userData.loginSucess.password)
        transfer.entryPageTransfer()
        transfer.SendTransfer(userData.Transfer.MuchAmoutn,userData.Transfer.description)
        
    });
})