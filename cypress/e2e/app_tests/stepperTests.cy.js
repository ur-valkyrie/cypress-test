describe('Form Layouts Test', () => {
    it('Checks the Form Layouts page', () => {
      cy.visit('/pages/layout/stepper');
      const arrEl = ['Step content #1', 'Step content #2', 'Step content #3', 'Step content #4'];
      arrEl.forEach(el => {
          cy.get('.step-content').first().should('include.text', el);
          el === 'Step content #4' ? cy.contains('next').first().should('be.disabled')
          :cy.contains('next').first().click();
      })
    });
  });
