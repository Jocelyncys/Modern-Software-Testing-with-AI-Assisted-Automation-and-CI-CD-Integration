import {test, expect} from '@playwright/test';

export default class ResultPagePOM {
    page:any;
    constructor(page:any) {
        this.page = page;
    }

    getFlightTable() {
        return this.page.locator('table.table');
    }

    getFlightButton(btnIndex:number) {
        //return this.page.locator('table tbody tr').nth(btnIndex).getByRole('button', { name: 'Choose This Flight' });
        return this.page.locator(`//tbody/tr[${btnIndex + 1}]/td[1]/input`);
    }
}