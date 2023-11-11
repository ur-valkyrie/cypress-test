describe('New Elements in a row Test', () => {
    it('Adding new elements in a row', () => {
        cy.visit('/pages/tables/smart-table');
        cy.get('[placeholder="ID"]').type(43);
        cy.wait(1000);
        cy.get('.nb-edit').click();
        cy.get('[placeholder="ID"]').last().clear().type('430');
        cy.get('[placeholder="First Name"]').last().clear().type('Jessica');
        cy.get('[placeholder="Last Name"]').last().clear().type('Jones');
        cy.get('[placeholder="Username"]').last().clear().type('@Valkyrie');
        cy.get('[placeholder="E-mail"]').last().clear().type('jessicajones@gmail.com');
        cy.get('[placeholder="Age"]').last().clear().type('23');
        cy.get('.nb-checkmark').click();
    });
});