import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { DashboardPage } from '../pages/DashboardPage.js';

type MyFixtures = {
  dashboardPage: DashboardPage;
};

export const test = base.extend<MyFixtures>({
  dashboardPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    await loginPage.navegar();
    await loginPage.realizarLogin('standard_user', 'secret_sauce');

    await expect(page).toHaveURL(/.*inventory\.html/);
    await dashboardPage.verificarCarrinhoVisivel();

    await use(dashboardPage);
  },
});

export { expect };