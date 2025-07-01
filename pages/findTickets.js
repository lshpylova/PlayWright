exports.FindTicketsPage = class FindTicketsPage{
     

    constructor(page){
        this.page = page;
        this.enterCity_dropdown = page.getByPlaceholder('Enter the city name');
        this.selectCity_list = page.locator("css=[data-testid='city-option']");
        this.selectDate_button = page.locator('css=div.MuiInputAdornment-root');
        this.datePages_button =  page.locator('css=[data-testid="ArrowRightIcon"]');
        this.selectDay_button = page.locator('css=button.MuiButtonBase-root.MuiPickersDay-root');
        this.clickPassenger_dropdown = page.locator('css=[data-testid="passenger-count-value"]');
        this.increaseNumberOfPassenfers_button = page.locator('css=[data-testid="AddOutlinedIcon"]');
        this.findTickets_button = page.locator('css=[data-testid="find-ticket-button"][type="submit"]');
        this.select_button = page.locator('css=button[data-testid="select-ticket-button"] span');
        this.formSupportActions = page.locator('[id=Formofsupport-actions] button');

    }
    async goToMainPage(link){
        await this.page.goto(link);
    }

    
    async enterFromCity(searchCity1){
        await this.enterCity_dropdown.first().click();
        await this.enterCity_dropdown.first().fill(searchCity1);
        await this.selectCity_list.first().click();
    }

    async enterToCity(searchCity2){
        await this.enterCity_dropdown.nth(2).click();
        await this.enterCity_dropdown.nth(2).fill(searchCity2);
        await this.selectCity_list.first().click();
    }
     async selectDate(date){
        await this.selectDate_button.first().click();
        await this.datePages_button.click();
        await this.selectDay_button.nth(date).click(); 
   }

   async enterQuantityOfPassengers(){
    await this.clickPassenger_dropdown.click();
    await this.increaseNumberOfPassenfers_button.click();
    await page.waitForTimeout(6000);
   } 

   async findTickets(){
     await this.page.evaluate((selector) => {
  document.querySelector(selector).click();
}, 'css=[data-testid="find-ticket-button"][type="submit"]');
 // Убедитесь, что используете this.page вместо page
  await expect(this.findTickets_button).toBeVisible({ timeout: 10000 });
  await expect(this.findTickets_button).toBeEnabled({ timeout: 10000 });
  // Меньше использование задержек, больше ожиданий
  await this.page.waitForTimeout(1000);
  
 await this.page.evaluate((selector) => {
  document.querySelector(selector).click();
}, 'css=[data-testid="find-ticket-button"][type="submit"]');
  
  // Еще одна задержка для ожидания реакции, если нужно
  await this.page.waitForTimeout(5000);


  

   }
   async verifyPageResult(){
  await page.waitForLoadState('load');
    await expect(this.select_button.first()).toHaveText(/Select/); // regex match
    console.log('Test completed');

    
   }

}
