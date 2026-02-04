import {Page} from "@playwright/test"

export class Product{
    constructor(private page: Page){}
    // Add product to cart 
    async addProductToCart() {
        await this.page.goto('https://www.demoblaze.com/prod.html?idp_=1');
       await this.page.getByText('Add to cart').click();
        // Handle alert
        this.page.once('dialog',async dialog => {
            await dialog.accept();
        }); 
    }
}