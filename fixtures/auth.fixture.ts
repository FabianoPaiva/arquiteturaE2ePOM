import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';

type MyFixtures = {
  dashboardPage: DashboardPage;
};

export const test = base.extend<MyFixtures>({
  dashboardPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    // 1. Navegar para a aplicação
    await loginPage.navegar();

    // 2. Preencher credenciais válidas e submeter
    await loginPage.realizarLogin('standard_user', 'secret_sauce');

    // 3. Garantir o estado autenticado via web-first assertions assíncronas
    await page.toHaveURL(/.*inventory\.html/);
    await dashboardPage.verificarCarrinhoVisivel();

    // 4. Injetar a página pronta para o teste que consome a fixture
    await use(dashboardPage);
  },
});

export { expect } from '@playwright/test';