import { test } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

test('Login test', async ({ page }) => {
  const loginPage = new LoginPage(page); 
  await loginPage.open();
  await loginPage.login('your_username', 'your_password');
});
