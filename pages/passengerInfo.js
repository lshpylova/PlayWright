import { expect } from "@playwright/test";
exports.PassengerInfo = class PassengerInfo {
  constructor(page) {
    this.page = page;
    this.firstName_input = page.locator('css=[name="passengers[0].firstName"]');
    this.lastName_input = page.locator('css=[name="passengers[0].lastName"]');
    this.discount_list = page.locator(
      'css=[name="passengers[0].promotion"] div div input'
    );
    this.discountSelect = page.locator('[data-option-index="0"]');
    this.calendar_button = page.locator("div.MuiInputAdornment-root");
    this.calendar_year = page.locator("div.MuiPickersCalendarHeader-label");
    this.calendar_year_select = page.getByText("2012");
    this.calendar_date = page.locator('css=[data-timestamp="1342386000000"]');
    this.customerPhone_input = page.locator('css=[name="customer.phone"]');
    this.customerEmail_input = page.locator('css=[name="customer.email"]');
    this.accept_checkbox = page.locator('css=[name="accept_privacy_policy"]');
    this.continue_button = page.locator('css=button[type="submit"]');
  }

  async fillPassengerData(
    firstName,
    lastName,
    discountList,
    phoneNumber,
    email
  ) {
    await this.firstName_input.fill(firstName);
    await this.lastName_input.fill(lastName);
    await this.discount_list.fill(discountList);
    /// await page.pause();
    await this.discount_list.first().click();
    await this.discountSelect.click();
    await this.calendar_button.click();
    await this.calendar_year.click();
    await this.calendar_year_select.click();
    await this.calendar_date.click();
    await this.customerPhone_input.fill(phoneNumber);
    await this.customerEmail_input.fill(email);
    await this.accept_checkbox.click();
  }
  async verifyPageResult() {
    await expect(this.accept_checkbox).toBeChecked({ timeout: 10000 });
    await expect(this.continue_button).toBeVisible({ timeout: 10000 });
    await expect(this.continue_button).toBeEnabled({ timeout: 10000 });
  }
};
