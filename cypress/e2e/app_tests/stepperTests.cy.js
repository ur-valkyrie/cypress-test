describe('Form Layouts Test', () => {
    it('Checks the Form Layouts page', () => {
      cy.visit('/pages/layout/stepper');
      cy.get('.step-content').first().should('include.text', 'Step content #1');
      cy.contains('next').first().click();
      cy.get('.step-content').first().should('include.text', 'Step content #2');
      cy.contains('next').first().click();
      cy.get('.step-content').first().should('include.text', 'Step content #3');
      cy.contains('next').first().click();
      cy.get('.step-content').first().should('include.text', 'Step content #4');
      cy.contains('next').first().should('be.disabled');
    });
  });
