describe('Register Within Test', () => {
    it('Checks the Register page with Within', () => {
        cy.visit('/auth/register');
        cy.get('.form-control-group').parent().within(() => {
            cy.get('#input-name').clear().type('Vitaliia Palamarchuk');
            cy.get('#input-email').clear().type('test@gmail.com');
            cy.get('#input-password').clear().type('fyguy24Dhhj!');
            cy.get('#input-re-password').clear().type('fyguy24Dhhj!');
            cy.get('[type="checkbox"]').check({ force: true }).should('be.checked');
            cy.get('[type="password"]').should('have.value', 'fyguy24Dhhj!');
            cy.contains(' Register ').click();
        })
    });
});