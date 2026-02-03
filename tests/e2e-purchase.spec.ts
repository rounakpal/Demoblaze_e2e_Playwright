import { test } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { loginData } from '../utils/testData';

test.beforeEach(async({page}) => {
  await page.goto('https://www.demoblaze.com');

  const loginPage = new LoginPage(page);
  await loginPage.login(loginData.username, loginData.password);
})