import { test, expect } from '../fixtures/auth.fixture';

test.describe('Testes da Área Restrita — Fixture de Sessão', () => {
  test('CT - Área Restrita: Validar acesso direto via fixture e execução de logout', async ({ page, dashboardPage }) => {
    // O teste inicia autenticado graças à fixture auth.fixture.ts
    await expect(page).toHaveURL(/.*inventory\.html/);

    // Validação de elemento restrito através do Page Object
    const titulo = await dashboardPage.obterTituloPagina();
    expect(titulo).toContain('Products');

    // Executar o fluxo de logout
    await dashboardPage.logout();

    // Validar retorno para a página inicial de login
    await expect(page).toHaveURL('https://www.saucedemo.com/');
  });
});