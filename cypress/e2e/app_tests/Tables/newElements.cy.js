describe('New Elements in a row Test', () => {
    it('Adding new elements in a row', () => {
        let elems = [];
        cy.visit('/pages/tables/smart-table');
        cy.get('[placeholder="ID"]').type(43);
        cy.wait(1000);
        cy.get('tbody tr td').find('[ng-reflect-ng-switch]').each(($el) => {
            let elem = $el.text();
            elems.push(elem);
        }).then(() => {
            expect(elems[0]).to.include(43);
        })
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

