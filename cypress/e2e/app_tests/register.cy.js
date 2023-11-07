describe('Register Test', () => {
    it('Checks the Register page', () => {
        cy.visit('/auth/register');
        cy.get('#input-name').clear().type('Vitaliia Palamarchuk');
        cy.get('#input-email').clear().type('test@gmail.com');
        cy.get('#input-password').clear().type('fyguy24Dhhj!');
        cy.get('#input-re-password').clear().type('fyguy24Dhhj!');
        cy.get('[type="checkbox"]').check({ force: true }).should('be.checked');
        cy.get('[type="password"]').should('have.value', 'fyguy24Dhhj!');
        cy.contains(' Register ').click();
        // cy.xpath("//input[@id='input-name']").clear().type('Vitaliia Palamarchuk');
    });
});
