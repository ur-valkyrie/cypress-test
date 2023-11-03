describe('Modal Overlays Test', () => {
    it('Checks the Modal Overlays page', () => {
      cy.visit('/pages/modal-overlays/dialog');
      cy.contains('Enter Name').click();
      cy.get('nb-dialog-container').should('be.visible');
      cy.get('nb-card-header').last().should('include.text', 'Enter your name');
      cy.get("input[placeholder='Name']").should('be.visible');
      cy.contains('Cancel').should('not.be.disabled');
      cy.contains('Submit').should('not.be.disabled');
    });
  });