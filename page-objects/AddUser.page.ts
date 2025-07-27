import { Page, expect } from '@playwright/test';
import path from 'path';

export class AddUser {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async fillUserForm(name: string, ninckname: string, role: string, password: string, avatarPath?: string) {
    await this.page.waitForLoadState('networkidle');
    await this.page.getByRole('textbox', { name: 'input Name' }).fill(name);

    // Fill Nickname
    await this.page.getByRole('textbox', { name: 'input Nickname' }).fill(ninckname);

     if (avatarPath) {
        const filePath = path.resolve(__dirname, avatarPath);
        await this.page.setInputFiles('input[type="file"]', filePath);
    }

    await this.page.getByRole('textbox', { name: 'input Role' }).click();
    await this.page.getByRole('treeitem', { name: role }).click();
    await expect(this.page.getByRole('listitem', { name: role })).toBeVisible();

    // Fill password (assumes input with type="password" or labeled "Password")
    await this.page.getByRole('textbox', { name: 'input Password' }).pressSequentially(password);
    await this.page.getByRole('textbox', { name: 'input Confirm Password' }).pressSequentially(password);
  }
}
