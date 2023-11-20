export class ModalOverlaysPage {

    enterNameButton() {
        return cy.contains('Enter Name', { timeout: 100500 });
    }

    popUp() {
        return cy.get('nb-dialog-container');
    }

    header() {
        return cy.get('nb-card-header').last();
    }

    inputName() {
        return cy.get("input[placeholder='Name']");
    }

    cancelButton() {
        return cy.contains('Cancel');
    }

    submitButton() {
        return cy.contains('Submit');
    }

}