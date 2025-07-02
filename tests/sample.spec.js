const { test, expect } = require('@playwright/test');

/*Цей тест про знаходження квитків за вибраною датою*/

test("Find ticket", async ({ page }) => {

  const searchCity1 = 'Kyiv';
  const searchCity2 = 'Gdansk';
  await page.goto("https://klr.com.ua/en/bus/khmelnytskyi/bonn");
  //Вибираємо перше місто
  await page.getByPlaceholder('Enter the city name').first().click();
  await page.getByPlaceholder('Enter the city name').first().fill(searchCity1);
  await page.locator("css=[data-testid='city-option']").first().click();
  //Вибираємо друге місто
  await page.getByPlaceholder('Enter the city name').nth(2).click();
  await page.getByPlaceholder('Enter the city name').nth(2).fill(searchCity2);
  await page.locator("css=[data-testid='city-option']").first().click();
  //Вибираємо дату
  await page.locator('css=div.MuiInputAdornment-root').first().click();
  await page.locator('css=[data-testid="ArrowRightIcon"]').click();
  await page.locator('css=button.MuiButtonBase-root.MuiPickersDay-root').nth(11).click();
  //Вибираємо кількість пасажирів
  await page.locator('css=[data-testid="passenger-count-value"]').click();
  await page.locator('css=[data-testid="AddOutlinedIcon"]').click();
//Нажимаємо на кнопку пошуку квидків
await page.waitForTimeout(6000);
const button = page.locator('css=[data-testid="find-ticket-button"][type="submit"]');
await expect(button).toBeVisible();
await expect(button).toBeEnabled();
await button.click({ force: true });
await page.waitForTimeout(6000);
await button.click({ force: true });
await page.waitForTimeout(6000); 
await page.waitForLoadState('load');
//Перевіояємо чи доступні дані
const locator = page.locator('css=button[data-testid="select-ticket-button"] span').first();
await expect(locator).toHaveText('Select');
console.log('Test completed');

});
