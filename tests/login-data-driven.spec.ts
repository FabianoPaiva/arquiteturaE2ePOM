import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { DashboardPage } from '../pages/DashboardPage.js';
import { listaUsuarios } from '../data/usuarios.data.js';

test.describe('Testes Data-Driven — Matriz de Usuários', () => {
  for (const cenario of listaUsuarios) {
    test(`CT - Login: ${cenario.descricao}`, async ({ page }) => {
      const loginPage = new LoginPage(page);
      const dashboardPage = new DashboardPage(page);

      await loginPage.navegar();
      await loginPage.realizarLogin(cenario.usuario, cenario.senha);

      if (cenario.sucesso) {
        await expect(page).toHaveURL(/.*inventory\.html/);
        const titulo = await dashboardPage.obterTituloPagina();
        expect(titulo).toContain('Products');
      } else {
        const mensagemErro = await loginPage.obterMensagemErro();
        expect(mensagemErro).toContain(cenario.mensagemEsperada);
        await expect(page).toHaveURL('https://www.saucedemo.com/');
      }
    });
  }
});