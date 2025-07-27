import { Page } from '@playwright/test';

// If NavBar.page.ts is in 'c:\mygit\netlock_\page-objects\common\NavBar.page.ts', use:
import { Login } from '@pages/common/Login.page';
import { Dashboard } from '@pages/Dashboard.page';
import { AddUser } from '@pages/AddUser.page';


export class PageObjects {
  login: Login;
  dashboard: Dashboard;
  addUser: AddUser;

  constructor(page: Page) {
    this.login = new Login(page);
    this.dashboard = new Dashboard(page);
    this.addUser = new AddUser(page);
  }
}
