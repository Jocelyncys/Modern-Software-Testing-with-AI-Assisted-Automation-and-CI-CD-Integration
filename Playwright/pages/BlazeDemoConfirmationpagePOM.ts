export default class ConfirmationPagePOM {
    page:any;

    constructor(page:any) {
        this.page = page;
    }

    getConfirmationHeading() {
        return this.page.getByRole('heading', { name: 'Thank you for your purchase today!' });
    }

    getConfirmationTable() {
        return this.page.locator('table.table');
    }

    getConfirmationJsonBlock() {
        return this.page.locator('pre');
    }
}