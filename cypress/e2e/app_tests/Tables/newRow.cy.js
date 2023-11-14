describe('New Row in the Table Test', () => {
    it('Adding new row in a table', () => {
        cy.visit('/pages/tables/smart-table');
        cy.get('.nb-plus').click();
        cy.wait(1000);
        cy.get('[placeholder="ID"]').last().clear().type('250');
        cy.get('[placeholder="First Name"]').last().clear().type('Daniel');
        cy.get('[placeholder="Last Name"]').last().clear().type('Black');
        cy.get('[placeholder="Username"]').last().clear().type('@Daniel');
        cy.get('[placeholder="E-mail"]').last().clear().type('danielblack@gmail.com');
        cy.get('[placeholder="Age"]').last().clear().type('27');
        cy.get('.nb-checkmark').click();

        const expectedArray = ['250', 'Daniel', 'Black', '@Daniel', 'danielblack@gmail.com', '27'];

        cy.get('[ng-reflect-klass="ng2-smart-row"]:first()').find('[ng-reflect-ng-switch]').each((text) => {
            expect(expectedArray).to.include(text.text());
        });

        expectedArray.forEach((el, index) => {
            cy.get('[ng-reflect-klass="ng2-smart-row"]:first()').find('[ng-reflect-ng-switch]').eq(index).invoke("text").should("equal", el)
        })
    });
});

