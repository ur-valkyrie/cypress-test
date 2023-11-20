import { url } from '../testData/testData';
import { navigateTo } from '../modules/navigation';
import { clickOnEnterName, verifyHeader, verifyInput, verifyPopUp, checkCancelButton, checkSubmitButton } from '../modules/modalOverlays';

describe('Checking the Modal Overlays page for pop-up', () => {

    beforeEach(() => {
        navigateTo(url.modalOverlays);
    })

    it('Checking Pop-Up on the Modal Overlays page', () => {
        clickOnEnterName();
        verifyPopUp();
        verifyHeader();
        verifyInput();
        checkCancelButton();
        checkSubmitButton();
    });

});