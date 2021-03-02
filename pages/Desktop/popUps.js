const popUp = {

  /**
     * This method validates that the Beautiful Gate pop up is rendered.
     */
  validateBeautifulGatePopUp() {
    return this
      .waitForElementVisible('@modalBody', () => {}, 'Beautiful Gate Pop Up is found in page')
      .assert.visible('@modalBody', 'Beautiful Gate pop up is displayed');
  },
  /**
   * This method clicks on the "Donate R5" button in the Beautiful Gate pop up
   */
  clickDonate() {
    return this
      .waitForElementVisible('@donateBtn', () => {}, 'Donate R5 button found')
      .click('@donateBtn');
  },
  /**
   * This method clicks on the "No thanks" button in the Beautiful Gate pop up
   */
  clickNoThanks() {
    return this
      .waitForElementVisible('@noThanksBtn')
      .click('@noThanksBtn');
  },
  /**
   * This method validates that the Covid 19 pop up is displayed
   */
  validateCovidPopUp() {
    this
      .api.execute('scrollTo(0,500000)', () => {
        this
          .waitForElementVisible('@covidPopUp', () => {}, '" Liquor is now available for sale! " pop up found')
          .assert.visible('@covidPopUp', '" Liquor is now available for sale! " pop up displayed');
      });
    return this;
  },
  /**
   * This method clicks on the "X" button on the Covid19 pop up
   */
  clickCloseCovidPopUp() {
    return this
      .waitForElementVisible('@covidPopUpCloseBtn', () => {}, 'Pop Up Closed')
      .click('@covidPopUpCloseBtn');
  },
  /**
   * This method validates that the "First time purchasing an eBook" pop up is displayed
   */
  validateEbookPopUp() {
    return this
      .waitForElementVisible('@modalBody', () => {}, '"First time purchasing an eBook" pop up displayed')
      .assert.visible('@modalBody');
  },
  /**
   * This method clicks on the "Proceed" button on "First time purchasing an eBook" pop up
   */
  clickProceed() {
    return this
      .waitForElementVisible('@proceedBtn', () => {}, 'Pop Up Closed')
      .click('@proceedBtn');
  },
  /**
   * This method validates that the List Price Modal is displayed
   */
  validateListPriceModal() {
    return this
      .waitForElementVisible('@modalBody')
      .assert.containsText('@modalBody', 'This is our List Price');
  },
  /**
   * This method clicks on the "X" in the list price modal
   */
  clickCloseListPriceModal() {
    return this
      .waitForElementVisible('@closeListPriceModal')
      .click('@closeListPriceModal');
  },
};

const xSelector = selector => ({
  selector,
  locateStrategy: 'xpath',
});

module.exports = {
  commands: [popUp],
  elements: {
    donateBtn: '.modal-content button',
    covidPopUp: '[class="gtm-alert"]',
    covidPopUpCloseBtn: '[class*="gtm-alert-close"]',
    noThanksBtn: xSelector('//button[contains(text(), "No thanks")]'),
    proceedBtn: xSelector('//button[contains(text(),"Proceed")]'),
    modalBody: xSelector('(//div[contains(@class,"modal-body")])[1]'),
    closeListPriceModal: xSelector('(//div[contains(@class,"modal-body")])[1]//preceding-sibling::button'),
  },
};
