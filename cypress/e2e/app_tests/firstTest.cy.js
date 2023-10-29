describe("My First Test", () => {
    it("Checks the Form Layouts page", () => {
      cy.visit("/forms/layouts");
      cy.url().should('contain', '/forms/layouts')
      cy.get(".text").should("contain.text", "Option 1")
    });
  
    it("Checks the Window page", () => {
      cy.visit("//modal-overlays/window");
      cy.url().should('contain', '/modal-overlays/window')
      cy.get(".ng-star-inserted").should("contain.text", "Window Form")
    });
  });
