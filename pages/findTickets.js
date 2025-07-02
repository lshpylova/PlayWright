import { expect } from "@playwright/test";
exports.FindTicketsPage = class FindTicketsPage {
  constructor(page) {
    this.page = page;
    this.enterCity_dropdown = page.getByPlaceholder("Enter the city name");
    this.selectCity_list = page.locator("css=[data-testid='city-option']");
    this.selectDate_button = page.locator("css=div.MuiInputAdornment-root");
    this.datePages_button = page.locator('css=[data-testid="ArrowRightIcon"]');
    this.selectDay_button = page.locator(
      "css=button.MuiButtonBase-root.MuiPickersDay-root"
    );
    this.clickPassenger_dropdown = page.locator(
      'css=[data-testid="passenger-count-value"]'
    );
    this.increaseNumberOfPassenfers_button = page.locator(
      'css=[data-testid="AddOutlinedIcon"]'
    );
    this.findTickets_button = page.locator(
      'css=[data-testid="find-ticket-button"][type="submit"]'
    );
    this.select_button = page.locator(
      'css=button[data-testid="select-ticket-button"]'
    );
    this.formSupportActions = page.locator("[id=Formofsupport-actions] button");
    this.verifyCardsExists = page.locator("css=div.MuiPaper-root.MuiCard-root");
    this.startDate = page.locator("[data-testid='start-time-date']");
    this.endDate = page.locator("[data-testid='end-time-date']");
    this.station = page.locator("[data-testid='start-station-station']");
    this.stationCity = page.locator("[data-testid='end-station-city']");
    this.carrierLabel = page.locator("[data-testid='carrier-label']");
    this.time = page.locator("[data-testid='start-time-date']");
  }

  async goToMainPage(link) {
    await this.page.goto(link);
  }

  async enterFromCity(searchCity1) {
    await this.enterCity_dropdown.first().click();
    await this.enterCity_dropdown.first().fill(searchCity1);
    await this.selectCity_list.first().click();
  }

  async enterToCity(searchCity2) {
    await this.enterCity_dropdown.nth(2).click();
    await this.enterCity_dropdown.nth(2).fill(searchCity2);
    await this.selectCity_list.first().click();
  }
  async selectDate(date) {
    await this.selectDate_button.first().click();
    await this.datePages_button.click();
    await this.selectDay_button.nth(date).click();
  }

  async enterQuantityOfPassengers() {
    await this.clickPassenger_dropdown.click();
    await this.increaseNumberOfPassenfers_button.click();
  }

  async findTickets() {
    await expect(this.findTickets_button).toBeVisible({ timeout: 10000 });
    await expect(this.findTickets_button).toBeEnabled({ timeout: 10000 });
    await this.findTickets_button.click({ force: true, timeout: 10000 });
  }

  async selectFirstTicket() {
    await this.select_button.first().click({ timeout: 10000 });
  }

  async verifyPageResult() {
    await this.page.waitForLoadState("load");
    await this.page.locator('[role="menu"]').evaluateAll((menus) => {
      menus.forEach((m) => (m.style.display = "none")); 
    });
    await expect(this.verifyCardsExists.first()).toBeVisible({
      timeout: 10000,
    });
    await expect(this.verifyCardsExists.first()).toBeEnabled({
      timeout: 10000,
    });
  }

  async verifyTripCardData(){
      await expect(this.startDate.first()).toBeVisible({timeout: 10000});
      await expect(this.startDate.first()).toBeEnabled({timeout: 10000});
      await expect(this.endDate.first()).not.toBeEmpty({timeout: 10000});
      await expect(this.endDate.first()).toBeEnabled({timeout: 10000});
      await expect(this.station.first()).toBeEnabled({timeout: 10000});
      await expect(this.stationCity.first()).not.toBeEmpty({timeout: 10000});
      await expect(this.carrierLabel.first()).not.toBeEmpty({timeout: 10000});
      await expect(this.time.first()).toBeEnabled({timeout: 10000});
      await expect(this.time.first()).not.toBeEmpty({timeout: 10000});

  }
};
