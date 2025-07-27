import { Page, Locator } from '@playwright/test';

export class Login {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('#username');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('button:has-text("Login")');
  }


  async login(username: string, password: string) {
    //Cross-origin iframe so can not use fill for form
    //const iframeElementHandle = await this.page.waitForSelector('iframe#tcaptcha_iframe_dy');
    //const frame = await iframeElementHandle.contentFrame();
    //await frame.locator('input#username').fill('admin');
    await this.loginButton.click();
  }
}
