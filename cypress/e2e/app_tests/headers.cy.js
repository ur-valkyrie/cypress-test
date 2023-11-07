describe('Headers Test', () => {
    it('Checks the Headers on the page', () => {
        cy.visit('/auth/register');
        cy.get('#title').should('contain.text', 'Register');
        cy.get('[for="input-name"]').should('contain.text', 'Full name:');
        cy.get('[for="input-email"]').should('contain', 'Email address:');
        cy.get('[for="input-password"]').should('have.text', 'Password:');
        cy.get('[for="input-re-password"]').should('include.text', 'Repeat password:');
        cy.get('.text').should('contain.text', 'Agree to');
        cy.get('.github.with-icon').should('have.css', 'background-color', 'rgba(0, 0, 0, 0)');
        cy.get('.facebook.with-icon').should('exist');
        cy.get('.twitter.with-icon').should('have.css', 'background-color', 'rgba(0, 0, 0, 0)');
    });
});
