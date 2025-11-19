import { chromium, Browser, Page } from '@playwright/test';

async function main() {
 const browser: Browser = await chromium.launch();
 const page: Page = await browser.newPage();

 await page.goto('https://examples.com');
 const title = await page.title();
 console.log('Page title:', title);

 // assert the title contains the expected text
 if (!title.includes('Example Domain')) {
  throw new Error(`Unexpected page title: ${title}`);
 }

 await browser.close();
}

main().catch(console.error);