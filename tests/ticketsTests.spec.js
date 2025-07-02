const { test, expect } = require('@playwright/test');
import { FindTicketsPage } from '../pages/findTickets';
import {PassengerInfo} from '../pages/passengerInfo';


test.skip("Find ticket", async ({ page }) => {

 const searchCity1 = 'Kyiv';
  const searchCity2 = 'Gdansk';
  const date = 11;

  const loginMainPage= "https://klr.com.ua/en/bus/khmelnytskyi/bonn";

  const searchForTickets = new FindTicketsPage(page);

   await searchForTickets.goToMainPage(loginMainPage);
   await searchForTickets.enterFromCity(searchCity1);
   await searchForTickets.enterToCity(searchCity2);
   await searchForTickets.selectDate(date);
   await searchForTickets.enterQuantityOfPassengers();
   await searchForTickets.findTickets();
   await searchForTickets.verifyPageResult();
  console.log('Test completed');
});

test.skip("Select first ticket", async ({ page }) => {
    const searchCity1 = 'Kyiv';
  const searchCity2 = 'Gdansk';
  const date = 11;
  const loginMainPage= "https://klr.com.ua/en/bus/khmelnytskyi/bonn";

  const searchForTickets = new FindTicketsPage(page);

   await searchForTickets.goToMainPage(loginMainPage);
   await searchForTickets.enterFromCity(searchCity1);
   await searchForTickets.enterToCity(searchCity2);
   await searchForTickets.selectDate(date);
   await searchForTickets.enterQuantityOfPassengers();
   await searchForTickets.findTickets();
   await searchForTickets.verifyPageResult();
   await searchForTickets.selectFirstTicket();
});

test("Fill passanger info", async ({ page }) => {
  const searchCity1 = 'Kyiv';
  const searchCity2 = 'Gdansk';
  const firstName = 'Olena';
  const lastName = 'Shpylova';
  const date = 11;
  const phoneNumber = '+380951373344';
  const email ='lshpylova@gmail.com';
  const loginMainPage= "https://klr.com.ua/en/bus/khmelnytskyi/bonn";

  const searchForTickets = new FindTicketsPage(page);
  const fillData = new PassengerInfo(page)

   await searchForTickets.goToMainPage(loginMainPage);
   await searchForTickets.enterFromCity(searchCity1);
   await searchForTickets.enterToCity(searchCity2);
   await searchForTickets.selectDate(date);
   await searchForTickets.findTickets();
   await searchForTickets.verifyPageResult();
   await searchForTickets.selectFirstTicket();
   await fillData.fillPassengerData(firstName, lastName,phoneNumber,email);
});

