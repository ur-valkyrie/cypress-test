describe('New Elements in a row Test', () => {
    it('Adding new elements in a row', () => {
        let elems = [];

        cy.visit('/pages/tables/smart-table');
        cy.get('[placeholder="ID"]').type(43);
        cy.wait(1000);
        cy.get('[ng-reflect-ng-switch="number"]').first().then(($el) => {
           cy.log($el.text())
            expect($el.text()).to.include(43)
        });
        cy.wrap(elems)
            .then((arr) => {
                arr[0] = '430';
                arr[1] = 'Jessica';
                arr[2] = 'Jones';
                arr[3] = '@Valkyrie';
                arr[4] = 'jessicajones@gmail.com';
                arr[5] = '23';
                return arr;
            })
            .should('deep.equal', ["430", "Jessica", "Jones", "@Valkyrie", "jessicajones@gmail.com", "23"]);
        cy.log(elems);
    });
});

