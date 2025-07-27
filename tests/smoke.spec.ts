import { test, expect, Page, Browser, BrowserContext } from '@playwright/test';
import * as dotenv from 'dotenv';
import { PageObjects } from '@pages/pages';

dotenv.config();

let pages: PageObjects;


test.describe('Admin module', () => {
  let browser: Browser;
  let context: BrowserContext;
  let page: Page;

  test.beforeAll(async ({ browser: browserFixture }) => {
    browser = browserFixture;
    context = await browser.newContext();
    page = await context.newPage();
    pages = new PageObjects(page);
    //await page.goto('/');
    /*
    const { token } = await getAccessToken();
    accessToken = token;
    headers = {
      Authorization: `Bearer ${accessToken}`,
    };*/
  });
  test.beforeEach(async () => {
      await page.goto('/');
      await pages.login.login(process.env.TEST_USERNAME, process.env.TEST_PASSWORD);
  });

  test.afterAll(async () => {
    await page.close();
  });


  test('[265] Check admin', { tag: ['@smoke'], annotation: [{ type: 'test case'}] }, async () => {
   await expect(page.getByRole('link', { name: ' Dashboard' })).toBeVisible();
  });
});
