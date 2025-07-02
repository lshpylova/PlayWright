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
    await this.findTickets_button.click({ force: true });
    await this.page.waitForTimeout(5000);
    await this.findTickets_button.click({ force: true });
    await this.page.waitForTimeout(5000);
  }

  async selectFirstTicket() {
    await this.select_button.first().click({ timeout: 10000 });
  }
  
  async verifyPageResult() {
    await this.page.waitForLoadState("load");
    await this.page.locator('[role="menu"]').evaluateAll((menus) => {
      menus.forEach((m) => (m.style.display = "none")); // або m.remove()
    });
    await expect(this.verifyCardsExists.first()).toBeVisible({
      timeout: 10000,
    });
    await expect(this.verifyCardsExists.first()).toBeEnabled({
      timeout: 10000,
    });
  }
};
