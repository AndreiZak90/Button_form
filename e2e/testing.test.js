import puppetteer from "puppeteer";

jest.setTimeout(30000); // default puppeteer timeout

describe("Credit Card Validator form", () => {
  let browser = null;
  let page = null;
  const baseUrl = "http://localhost:9000";

  beforeAll(async () => {
    browser = await puppetteer.launch({
      headless: false,
      slowMo: 100,
      devtools: true,
    });

    page = await browser.newPage();
  });

  test("клик по кнопке и появление popupper", async () => {
    await page.goto(baseUrl);
    await page.waitForSelector(".button");
    await page.click(".button");
    await page.waitForSelector(".popupper");
  });

  test("клик по кнопке и появление popupper, а затем исчезнет", async () => {
    await page.goto(baseUrl);
    await page.waitForSelector(".button");
    await page.click(".button");
    await page.waitForSelector(".popupper");
    await page.click(".button");
  });

  afterAll(async () => {
    await browser.close();
  });
});
