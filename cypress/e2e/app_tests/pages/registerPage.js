export class RegisterPage {

    usernameInput() {
        return cy.get('#input-name', { timeout: 100500 });
    }

    emailInput() {
        return cy.get('#input-email');
    }

    passwordInput() {
        return cy.get('#input-password');
    }

    rePasswordInput() {
        return cy.get('#input-re-password');
    }

    checkBox() {
        return cy.get('[type="checkbox"]');
    }

    registerButton() {
        return cy.contains(' Register ');
    }
}