import { url } from '../testData/testData';
import { navigateTo } from '../modules/navigation';
import {
    inputUserName, inputEmail, inputPassword, inputSecondPassword, verifyCheckBox,
    checkPassword, clickOnRegisterButton
} from '../modules/register';

describe('Register new user on the Register page', () => {

    beforeEach(() => {
        navigateTo(url.register);
    })

    it('Register new user', () => {
        inputUserName();
        inputEmail();
        inputPassword();
        inputSecondPassword();
        verifyCheckBox();
        checkPassword();
        clickOnRegisterButton();
    });
});

