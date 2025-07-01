const { test, expect } = require('@playwright/test');


test("Find ticket", async ({ page }) => {
  const searchCity1 = 'Kyiv';
  const searchCity2 = 'Gdansk';

  await page.goto("https://klr.com.ua/en/bus/khmelnytskyi/bonn");
  await page.getByPlaceholder('Enter the city name').first().click();
  await page.getByPlaceholder('Enter the city name').first().fill(searchCity1);
   await page.locator("css=[data-testid='city-option']").first().click();
  //Select second
  await page.getByPlaceholder('Enter the city name').nth(2).click();
  await page.getByPlaceholder('Enter the city name').nth(2).fill(searchCity2);
  await page.locator("css=[data-testid='city-option']").first().click();
  //select date
  await page.locator('css=div.MuiInputAdornment-root').first().click();
  await page.locator('css=[data-testid="ArrowRightIcon"]').click();
  await page.locator('css=button.MuiButtonBase-root.MuiPickersDay-root').nth(11).click();

  //selct passenger
  await page.locator('css=[data-testid="passenger-count-value"]').click();
  await page.locator('css=[data-testid="AddOutlinedIcon"]').click();
  //click on th Find tickets button
// Then click on it
await page.waitForTimeout(6000);
const button = page.locator('css=[data-testid="find-ticket-button"][type="submit"]');
await expect(button).toBeVisible();
await expect(button).toBeEnabled();
await button.click({ force: true });
await page.waitForTimeout(6000);

await button.click({ force: true });

await page.waitForTimeout(6000); // Задержка, чтобы дать время реакции
// Ждем полного завершения загрузки страницы

await page.waitForLoadState('load');
const locator = page.locator('css=button[data-testid="select-ticket-button"] span').first();
await expect(locator).toHaveText('Select');
console.log('Test completed');

});
