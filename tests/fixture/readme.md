Встановлення
Встановіть залежності:
npm install
Встановіть Playwright та браузери:
npx playwright install
Це завантажить Chromium, Firefox та WebKit (можна обрати один — див. документацію).
🚀 Запуск тестів
Усі тести:
npx playwright test
Один тест:
npx playwright test tests/ticketsTests.spec.js
🐞 Дебаг
Інтерактивний режим (UI):
npx playwright test --ui
npx playwright test tests/ticketsTests.spec.js --ui
З паузою для дебагу:
npx playwright test --debug
Або у тесті використати:
test('example test', async ({ page }) => {
  await page.pause(); // відкриє інспектор
});
