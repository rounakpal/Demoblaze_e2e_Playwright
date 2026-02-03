import { Page,expect } from "@playwright/test";

export class LoginPage {
    constructor(private page: Page) {}
    // Adding the locators 
    loginMenu = '#login2'; 
    uernameInput = '#loginusername';
    passwordInput = '#loginpassword';
    loginButton = 'button:text("Log in")';
    logoutLink = '#logout2';

    // Login 
    async login(username: any, password: any) {
        await this.page.locator(this.loginMenu).click(); 
        await this.page.fill(this.uernameInput, username);
        await this.page.fill(this.passwordInput,password);
        await this.page.click(this.loginButton);
    // Assertion to confirm login success   
        await expect(this.page.locator(this.logoutLink)).toBeVisible();
    }
}