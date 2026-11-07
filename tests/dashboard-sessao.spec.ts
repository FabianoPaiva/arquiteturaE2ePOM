import { test, expect } from '../fixtures/auth.fixture.js';

test.describe('Testes da Área Restrita — Fixture de Sessão', () => {
  test('CT - Área Restrita: Validar acesso direto via fixture e execução de logout', async ({ page, dashboardPage }) => {
    await expect(page).toHaveURL(/.*inventory\.html/);

    const titulo = await dashboardPage.obterTituloPagina();
    expect(titulo).toContain('Products');

    await dashboardPage.logout();

    await expect(page).toHaveURL('https://www.saucedemo.com/');
  });
});