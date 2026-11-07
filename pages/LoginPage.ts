import type { Page, Locator } from '@playwright/test';

export class LoginPage {
  private readonly userInput: Locator;
  private readonly passwordInput: Locator;
  private readonly loginButton: Locator;
  private readonly errorMessage: Locator;

  constructor(private page: Page) {
    this.userInput = page.locator('#user-name');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#login-button');
    this.errorMessage = page.locator('[data-test="error"]');
  }

  async navegar() {
    await this.page.goto('/');
  }

  async preencherUsuario(usuario: string) {
    await this.userInput.fill(usuario);
  }

  async preencherSenha(senha: string) {
    await this.passwordInput.fill(senha);
  }

  async clicarLogin() {
    await this.loginButton.click();
  }

  async realizarLogin(usuario: string, senha: string) {
    await this.preencherUsuario(usuario);
    await this.preencherSenha(senha);
    await this.clicarLogin();
  }

  async obterMensagemErro(): Promise<string> {
    return await this.errorMessage.textContent() || '';
  }
}