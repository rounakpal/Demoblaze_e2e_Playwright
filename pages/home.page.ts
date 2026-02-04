import {Page, test} from "@playwright/test";

export class HomePage {
    constructor(private page:Page){}

    // locator 
    async closeLoginPopup() {
        const model = this.page.locator('#logInModal');
        const closeButton = model.locator('.btn-secondary');
        if(await model.isVisible()) {
            await closeButton.click();
            await model.waitFor({state: 'hidden'}); 
        }     
    }       

    async getProduct() {
     await this.page.getByRole('link',{name:  'Samsung galaxy s6'}).click();  
    }
}