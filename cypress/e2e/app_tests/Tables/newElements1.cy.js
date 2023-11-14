describe('New Elements in a row Test', () => {
    it('Adding new elements in a row', () => {
        let elementsArr = ["430", "Jessica", "Jones", "@Valkyrie", "jessicajones@gmail.com", "23"];
        cy.visit('/pages/tables/smart-table');
        cy.get('[placeholder="ID"]').type(43);
        cy.wait(1000);
        cy.get('.nb-edit').click();
        cy.get('[placeholder="ID"]').last().clear().type(elementsArr[0]);
        cy.get('[placeholder="First Name"]').last().clear().type(elementsArr[1]);
        cy.get('[placeholder="Last Name"]').last().clear().type(elementsArr[2]);
        cy.get('[placeholder="Username"]').last().clear().type(elementsArr[3]);
        cy.get('[placeholder="E-mail"]').last().clear().type(elementsArr[4]);
        cy.get('[placeholder="Age"]').last().clear().type(elementsArr[5]);
        cy.get('.nb-checkmark').click();
        cy.get("tbody tr td").find("[ng-reflect-ng-switch]").each(($el) => {
            expect($el.text()).to.be.oneOf(elementsArr)
        });
    });
});