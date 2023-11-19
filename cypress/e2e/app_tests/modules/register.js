const { RegisterPage } = require('../pages/registerPage');

const registerPage = new RegisterPage();

export function inputUserName() {
    registerPage.usernameInput().clear().type('Vitaliia Palamarchuk');
}

export function inputEmail() {
    registerPage.emailInput().clear().type('test@gmail.com');
}

export function inputPassword() {
    registerPage.passwordInput().clear().type('fyguy24Dhhj!');
}

export function inputSecondPassword() {
    registerPage.rePasswordInput().clear().type('fyguy24Dhhj!');
}

export function verifyCheckBox() {
    registerPage.checkBox().check({ force: true }).should('be.checked');
}

export function checkPassword() {
    registerPage.passwordInput().should('have.value', 'fyguy24Dhhj!');
}

export function clickOnRegisterButton() {
    registerPage.registerButton().click();
}