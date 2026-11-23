import {test, expect} from '@playwright/test';

export default class PurchasePagePOM {
    page:any;
    constructor(page:any) {
        this.page = page;
    }

    getPassengerNameTextBox() {
        return this.page.locator('input[name="inputName"]');
    }

    getAddressTextBox() {
        return this.page.locator('input[name="address"]');
    }

    getCityTextBox() {
        return this.page.locator('input[name="city"]');
    }

    getStateTextBox() {
        return this.page.locator('input[name="state"]');
    }

    getZipCodeTextBox() {
        return this.page.locator('input[name="zipCode"]');
    }

    getCardTypeDropDown() {
        return this.page.locator('select[name="cardType"]');
    }

    getCreditCardNumberTextBox() {
        return this.page.locator('input[name="creditCardNumber"]');
    }

    getCreditCardMonthTextBox() {
        return this.page.locator('input[name="creditCardMonth"]');
    }

    getCreditCardYearTextBox() {
        return this.page.locator('input[name="creditCardYear"]');
    }

    getNameOnCardTextBox() {
        return this.page.locator('input[name="nameOnCard"]');
    }

    getRememberMeCheckBox() {
        return this.page.locator('input[name="rememberMe"]');
    }

    getPurchaseFlightButton() {
        return this.page.getByRole('button', { name: 'Purchase Flight' });
    }
}