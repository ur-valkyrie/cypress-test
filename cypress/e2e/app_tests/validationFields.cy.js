describe('Validation fields Test', () => {
    it('Checks the validation fields on the register page', () => {
        cy.visit('/auth/register');
        cy.get('#input-name').clear().type('123');
        cy.get('body').click();
        cy.get('.caption.status-danger').first().should('contain.text', ' Full name should contains from 4 to 50 characters ');
        cy.get('#input-password').clear().type('123');
        cy.get('#input-email').click();
        cy.get('.caption.status-danger').last().should('contain.text', ' Password should contain from 4 to 50 characters ');
    });
});
