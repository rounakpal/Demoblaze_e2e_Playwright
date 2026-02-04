import {Page, test} from "@playwright/test";

export class HomePage {
    constructor(private page:Page){}

    // Checking whether the Login pop up is open and closing it if visible
    async closeLoginPopup() {
        const model = this.page.locator('#logInModal');
        const closeButton = model.locator('.btn-secondary');
        // If the login pop up is open, click the close button and wait for it to hide
        if(await model.isVisible()) {
            await closeButton.click();
            await model.waitFor({state: 'hidden'}); 
        }     
    }       
    // Navigate to the product details page by clicking the specific product link
    async getProduct() {
     await this.page.getByRole('link',{name:  'Samsung galaxy s6'}).click();  
    }
}