import { test, expect } from '@playwright/test';

export default class HomePagePOM {
    page:any;

    constructor(page:any) {
        this.page = page;
    }

    getFromCityListBox() {
        return this.page.locator('select[name="fromPort"]');
    }

    getToCityListBox() {
        return this.page.locator('select[name="toPort"]');
    }

    getFindFlightsButton() {
        return this.page.getByRole('button', { name: 'Find Flights' });
    }


}