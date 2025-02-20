describe('Teste transferência bancária', () => {
    
    it('Transferência menor que o saldo', () => {
        cy.visit("http://localhost:3000/signin")
        cy.get('#username').type("Heath93")
        cy.get('#password').type("s3cret")
        cy.get('[data-test="signin-submit"]').click()
        cy.location('pathname')
        cy.get('[data-test="nav-top-new-transaction"]').click()
        cy.location('pathname').should('equal','/transaction/new')
        cy.get('[data-test="user-list-item-GjWovtg2hr"] > .MuiListItemText-root > .MuiTypography-body2 > :nth-child(1) > .MuiGrid-container > :nth-child(1)').click()
        cy.location('pathname').should('equal','/transaction/new')
        cy.get('#amount').type(100)
        cy.get('#transaction-create-description-input').type('For Kristian')
        cy.get('[data-test="transaction-create-submit-payment"]').click()
        cy.location('pathname').should('equal','/transaction/new')

    });

    it('Transferência maior que o saldo', () => {
        cy.visit("http://localhost:3000/signin")
        cy.get('#username').type("Heath93")
        cy.get('#password').type("s3cret")
        cy.get('[data-test="signin-submit"]').click()
        cy.get('[data-test="nav-top-new-transaction"]').click()
        cy.location('pathname').should('equal','/transaction/new')
        cy.get('[data-test="user-list-item-GjWovtg2hr"] > .MuiListItemText-root > .MuiTypography-body2 > :nth-child(1) > .MuiGrid-container > :nth-child(1)').click()
        cy.location('pathname').should('equal','/transaction/new')
        cy.get('#amount').type(10000)
        cy.get('#transaction-create-description-input').type('For Kristian')
        cy.get('[data-test="transaction-create-submit-payment"]').click()
        cy.get('.MuiAlert-message')

        
        


    });
})