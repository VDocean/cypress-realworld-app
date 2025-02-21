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
        register.acessRegister()
        register.FillDataUser(userData.RegisterNewUserSucess.firstName,userData.RegisterNewUserSucess.lastName,
            userData.RegisterNewUserSucess.userName)
            register.registerFail(userData.RegisterNewUserFail.passwordWrong,userData.RegisterNewUserSucess.password)
        
    });

    



    
});