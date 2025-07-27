import { Page } from '@playwright/test';

// If NavBar.page.ts is in 'c:\mygit\netlock_\page-objects\common\NavBar.page.ts', use:
import { Login } from '@pages/common/Login.page';


export class PageObjects {
  login: Login;

  constructor(page: Page) {
    this.login = new Login(page);

  }   
}
