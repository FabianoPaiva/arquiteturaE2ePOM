import type { Page, Locator } from '@playwright/test';

export class DashboardPage {
  private readonly titleBadge: Locator;
  private readonly menuButton: Locator;
  private readonly logoutLink: Locator;
  private readonly cartIcon: Locator;

  constructor(private page: Page) {
    this.titleBadge = page.locator('.title');
    this.menuButton = page.locator('#react-burger-menu-btn');
    this.logoutLink = page.locator('#logout_sidebar_link');
    this.cartIcon = page.locator('.shopping_cart_link');
  }

  async obterTituloPagina(): Promise<string> {
    return await this.titleBadge.textContent() || '';
  }

  async verificarCarrinhoVisivel(): Promise<boolean> {
    return await this.cartIcon.isVisible();
  }

  async logout() {
    await this.menuButton.click();
    await this.logoutLink.click();
  }
}