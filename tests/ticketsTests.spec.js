const { test, expect } = require('@playwright/test');
import { FindTicketsPage } from '../pages/findTickets';

test("Find ticket", async ({ page }) => {
 
  const searchCity1 = 'Kyiv';
  const searchCity2 = 'Gdansk';
  const date = 11;
  const lingMainPage= "https://klr.com.ua/en/bus/khmelnytskyi/bonn";

  const searchForTickets = new FindTicketsPage(page);

   await searchForTickets.goToMainPage(lingMainPage);
   await searchForTickets.enterFromCity(searchCity1);
   await searchForTickets.enterToCity(searchCity2);
   await searchForTickets.selectDate(date);
   await searchForTickets.enterQuantityOfPassengers();
   await searchForTickets.findTickets();
   await searchForTickets.verifyPageResult();
 
});
