const { ModalOverlaysPage } = require('../pages/modalOverlaysPage');

const modalOverlaysPage = new ModalOverlaysPage();

export function clickOnEnterName() {
    modalOverlaysPage.enterNameButton().click();
}

export function verifyPopUp() {
    modalOverlaysPage.popUp().should('be.visible');
}

export function verifyHeader() {
    modalOverlaysPage.header().should('include.text', 'Enter your name');
}

export function verifyInput() {
    modalOverlaysPage.inputName().should('be.visible');
}

export function checkCancelButton() {
    modalOverlaysPage.cancelButton().should('not.be.disabled');
}

export function checkSubmitButton() {
    modalOverlaysPage.submitButton().should('not.be.disabled');
}
