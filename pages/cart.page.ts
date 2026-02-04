import {Page,expect} from '@playwright/test'

export class Cart {
    constructor(private page: Page) {}

    async cartPage(){
        // Close login modal if present
    const loginModal = this.page.locator('#logInModal');
    if (await loginModal.isVisible().catch(() => false)) {
      await this.page.keyboard.press('Escape');
      await loginModal.waitFor({ state: 'hidden' });
    }

    // Navigate to Cart explicitly (don’t assume prior clicks)
    await this.page.goto('https://www.demoblaze.com/cart.html');

    // Click Place Order button 
    const placeOrderButton = this.page.locator('button.btn-success', {hasText: 'Place Order'});
    await placeOrderButton.click();

    const orderModal = this.page.locator('#orderModal');
    await expect(orderModal).toBeVisible();

  // Fill order form
    await this.page.locator('#name').fill('Rounak Pal');
    await this.page.locator('#country').fill('India');
    await this.page.locator('#city').fill('Bangalore');
    await this.page.locator('#card').fill('4111111111111111');
    await this.page.locator('#month').fill('12');
    await this.page.locator('#year').fill('2026');

  // Click Purchase
    await this.page.getByRole('button', { name: 'Purchase' }).click();

  //  Verify success confirmation
    const successPopup = this.page.locator('.sweet-alert');
    await expect(successPopup).toBeVisible();
    await expect(successPopup).toContainText('Thank you for your purchase!');
  };
}
