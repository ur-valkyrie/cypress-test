describe('Forms Test', () => {
    it('Checks the Forms page', () => {
      cy.visit('/pages/forms/layouts');
      cy.get('#inputEmail3').clear().type('test@gmail.com');
      cy.get('#inputPassword3').clear().type('Test1234567890!dhKD');
      cy.get('[type="checkbox"]').last().check({force:true});
      cy.get('[type="submit"]').last().click();     
    });
  });