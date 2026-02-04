import { test } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { HomePage } from '../pages/home.page';
import { Product } from '../pages/product.page';
import { Cart } from '../pages/cart.page';
import { loginData } from '../utils/testData';

test.beforeEach(async({page}) => {
  await page.goto('https://www.demoblaze.com');

  const loginPage = new LoginPage(page);
  await loginPage.login(loginData.username, loginData.password);
})

test('click a product', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.closeLoginPopup();
  await homePage.getProduct();
})

test('Click add to cart button', async ({page}) => {
   const product = new Product(page);
   await product.addProductToCart();
});

test('Click the plcae order button', async({page}) => {
   const cart = new Cart(page);
  await cart.cartPage();

});