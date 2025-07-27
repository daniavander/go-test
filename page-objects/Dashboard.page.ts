import { expect, Locator, Page } from '@playwright/test';
import { MenuNames } from '@fixtures/menuNames';

export class Dashboard {
  readonly page: Page;
  readonly dashboardMenu: Locator;
  readonly adminDashboardMenu: Locator;
  readonly exampleDashboardMenu: Locator;
  readonly formDashboardMenu: Locator;
  readonly tableDashboardMenu: Locator;
  readonly echartsDashboardMenu: Locator;
  readonly filemanagerDashboardMenu: Locator;
  readonly markdownDashboardMenu: Locator;
  readonly websiteDashboardMenu: Locator;
  readonly documentDashboardMenu: Locator;
  readonly feedbackDashboardMenu: Locator;
  readonly sourcecodeDashboardMenu: Locator;
  readonly forumDashboardMenu: Locator;

  constructor(page: Page) {
    this.page = page;
    this.dashboardMenu = page.getByRole('link', { name: ' Dashboard' });
    this.adminDashboardMenu = page.getByRole('link', { name: ' Admin ' });
    this.exampleDashboardMenu = page.getByRole('link', { name: ' Example ' });
    this.formDashboardMenu = page.getByRole('link', { name: ' Form' });
    this.tableDashboardMenu = page.getByRole('link', { name: ' Table' });
    this.echartsDashboardMenu = page.getByRole('link', { name: ' Echarts' });
    this.filemanagerDashboardMenu = page.getByRole('link', { name: ' File Manager' });
    this.markdownDashboardMenu = page.getByRole('link', { name: ' Markdown Viewer' });
    this.websiteDashboardMenu = page.getByRole('link', { name: ' Official Website' });
    this.documentDashboardMenu = page.getByRole('link', { name: ' Document' });
    this.feedbackDashboardMenu = page.getByRole('link', { name: ' BUG Feedback' });
    this.sourcecodeDashboardMenu = page.getByRole('link', { name: ' Source Code' });
    this.forumDashboardMenu = page.getByRole('link', { name: ' Forum' });
  }

  async checkDashboardMainParts() {
    await expect(this.dashboardMenu).toBeVisible();
    await expect(this.adminDashboardMenu).toBeVisible();
    await expect(this.exampleDashboardMenu).toBeVisible();
    await expect(this.formDashboardMenu).toBeVisible();
    await expect(this.tableDashboardMenu).toBeVisible();
    await expect(this.echartsDashboardMenu).toBeVisible();
    await expect(this.filemanagerDashboardMenu).toBeVisible();
    await expect(this.markdownDashboardMenu).toBeVisible();
    await expect(this.websiteDashboardMenu).toBeVisible();
    await expect(this.documentDashboardMenu).toBeVisible();
    await expect(this.feedbackDashboardMenu).toBeVisible();
    await expect(this.sourcecodeDashboardMenu).toBeVisible();
    await expect(this.forumDashboardMenu).toBeVisible();
  }

  async openMenuItem(item: MenuNames) {
    const menuMap: Record<MenuNames, Locator> = {
        [MenuNames.DASHBOARD]: this.dashboardMenu,
        [MenuNames.ADMIN]: this.adminDashboardMenu,
        [MenuNames.EXAMPLE]: this.exampleDashboardMenu,
        [MenuNames.FORM]: this.formDashboardMenu,
        [MenuNames.TABLE]: this.tableDashboardMenu,
        [MenuNames.ECHARTS]: this.echartsDashboardMenu,
        [MenuNames.FILE_MANAGER]: this.filemanagerDashboardMenu,
        [MenuNames.MARKDOWN_VIEWER]: this.markdownDashboardMenu,
        [MenuNames.OFFICIAL_WEBSITE]: this.websiteDashboardMenu,
        [MenuNames.DOCUMENT]: this.documentDashboardMenu,
        [MenuNames.BUG_FEEDBACK]: this.feedbackDashboardMenu,
        [MenuNames.SOURCE_CODE]: this.sourcecodeDashboardMenu,
        [MenuNames.FORUM]: this.forumDashboardMenu,
    };

    const targetMenu = menuMap[item];

    if (!targetMenu) {
        throw new Error(`Unknown menu item: ${item}`);
    }

    await targetMenu.click();
    }
}  
