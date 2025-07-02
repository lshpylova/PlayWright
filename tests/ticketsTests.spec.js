const { expect } = require("@playwright/test");
const { test } = require("../tests/fixture/findTicketsFixture");
import { FindTicketsPage } from "../pages/findTickets";
import { PassengerInfo } from "../pages/passengerInfo";
//Використовую Page Object model для стоврення тестів
//Було створено 4 тести:
//Знайти квитки по заданим параметрам;
//Вибрати квиток для реєстрації
//Заповнити реєстраційні дані
//Перевірка відображення даних на картці для подорожі

test.beforeEach(async ({ page, findTicketsData }) => {
  await page.goto(findTicketsData.link);
});

//Тест1.Знайти квитки по заданим параметрам;
test("Find ticket", async ({ page, findTicketsData }) => {
  const searchForTickets = new FindTicketsPage(page);
  await searchForTickets.enterFromCity(findTicketsData.city1);
  await searchForTickets.enterToCity(findTicketsData.city2);
  await searchForTickets.selectDate(findTicketsData.date);
  await searchForTickets.enterQuantityOfPassengers();
  await searchForTickets.findTickets();
  await searchForTickets.verifyPageResult();
  console.log("Test completed");
});

//Тест2.Вибрати квиток для реєстрації
test("Select first trip", async ({ page, findTicketsData }) => {
  const searchForTickets = new FindTicketsPage(page);
  await searchForTickets.enterFromCity(findTicketsData.city1);
  await searchForTickets.enterToCity(findTicketsData.city2);
  await searchForTickets.selectDate(findTicketsData.date);
  await searchForTickets.enterQuantityOfPassengers();
  await searchForTickets.findTickets();
  await searchForTickets.verifyPageResult();
  await searchForTickets.selectFirstTicket();
});

//Тест3.Заповнити реєстраційні дані
test("Fill passanger info", async ({ page, findTicketsData }) => {
  const searchForTickets = new FindTicketsPage(page);
  const fillData = new PassengerInfo(page);
  await searchForTickets.enterFromCity(findTicketsData.city1);
  await searchForTickets.enterToCity(findTicketsData.city2);
  await searchForTickets.selectDate(findTicketsData.date);
  await searchForTickets.findTickets();
  await searchForTickets.verifyPageResult();
  await searchForTickets.selectFirstTicket();
  await fillData.fillPassengerData(
    findTicketsData.firstName,
    findTicketsData.lastName,
    findTicketsData.discountList,
    findTicketsData.phoneNumber,
    findTicketsData.email
  );
  await fillData.verifyPageResult();
});


test("Verify data is availiable for the trip", async ({ page, findTicketsData }) => {
  const searchForTickets = new FindTicketsPage(page);
  await searchForTickets.enterFromCity(findTicketsData.city1);
  await searchForTickets.enterToCity(findTicketsData.city2);
  await searchForTickets.selectDate(findTicketsData.date);
  await searchForTickets.findTickets();
  await searchForTickets.verifyPageResult();
  await searchForTickets.verifyTripCardData();

});


