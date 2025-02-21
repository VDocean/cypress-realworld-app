class TransferPage{

    selectorList(){
        const selectors={
            buttonTransfer:'[data-test="nav-top-new-transaction"]',
            PersonSendTransfer:'[data-test="user-list-item-GjWovtg2hr"]',
            AmountField:'#amount',
            DescriptionField:'#transaction-create-description-input',
            buttonPay:'[data-test="transaction-create-submit-payment"]'
        }
        return selectors

    }

    entryPageTransfer(){
        cy.get(this.selectorList().buttonTransfer).click()
        cy.get(this.selectorList().PersonSendTransfer).click()
        cy.location('pathname').should('equal','/transaction/new')
    }

    SendTransfer(amount,description){
        cy.get(this.selectorList().AmountField).type(amount)
        cy.get(this.selectorList().DescriptionField).type(description)
        cy.get(this.selectorList().buttonPay).click()
        cy.location('pathname').should('equal','/transaction/new')
        cy.get('.MuiAlert-message')
    }



    
}

export default TransferPage