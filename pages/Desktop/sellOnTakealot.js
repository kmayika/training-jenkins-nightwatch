const sellOnTakealot = {
  /**
     * This method validates that the "Sell on Takealot" is rendered correctly
     */
  validateSellOnTakealotPage() {
    return this
      .waitForElementVisible('@sellOnTakealot')
      .assert.containsText('@sellOnTakealot', 'Join SA\'s Best Online\nMarketplace Platform')
      .waitForElementVisible('@getTheToolsBannerTitle')
      .assert.containsText('@getTheToolsBannerTitle', 'Get the tools you need')
      .waitForElementVisible('@infographicTitle')
      .assert.containsText('@infographicTitle', 'Start selling online in just a few easy steps')
      .waitForElementVisible('@brandSwiperModule')
      .assert.visible('@brandSwiperModule', 'Brand module displayed')
      .waitForElementVisible('@pricingModule')
      .assert.visible('@pricingModule', 'Pricing module displayed')
      .waitForElementVisible('@pricingModuleTitle')
      .assert.containsText('@pricingModuleTitle', 'Pricing');
  },
  /**
   * This method clicks on the first YouTube Video
   */
  clickOnYoutubeVideo() {
    return this
      .waitForElementVisible('@youTubeVideo')
      .assert.visible('@youTubeVideo')
      .click('@youTubeVideo');
  },
  /**
   * This method validates that the YouTube modal is rendered
   */
  validateYouTubeModal() {
    return this
      .waitForElementVisible('@youTubeModal')
      .assert.visible('@youTubeModal', 'YouTube modal displayed');
  },
  /**
   * This method clicks on the "X" button in the YouTube modal
   */
  clickCloseVideo() {
    return this
      .waitForElementVisible('@videoCloseBtn')
      .assert.visible('@videoCloseBtn')
      .click('@videoCloseBtn');
  },
  /**
   * This method clicks on the "Apply to Sell" button
   */
  clickApplyToSell() {
    return this
      .waitForElementVisible('@applyToSellBtn')
      .assert.visible('@applyToSellBtn')
      .click('@applyToSellBtn');
  },
  /**
   * This method validates that the "Apply to Sell" form is renderd
   */
  validateApplyToSellForm() {
    return this
      .waitForElementVisible('@applyToSellForm')
      .assert.visible('@applyToSellForm', 'Apply to Sell form displayed')
      .waitForElementVisible('@applyToSellFormTitle')
      .assert.containsText('@applyToSellFormTitle', 'Apply to sell on Takealot Marketplace');
  },
  /**
   * This method clicks on the "Success Fees" button
   */
  clickSuccessFees() {
    return this
      .waitForElementVisible('@successFeesBtn')
      .assert.visible('@successFeesBtn')
      .click('@successFeesBtn');
  },
  /**
   * This method validates that the "Success Fees" info module is rendered
   */
  validateSuccessFeesInfoModule() {
    return this
      .waitForElementVisible('@successFeesInfoModule')
      .assert.visible('@successFeesInfoModule', 'Success Fees info module displayed');
  },
  /**
   * This method clicks on the "Fulfilment Fees" button
   */
  clickFulfilmentFees() {
    this
      .api.execute('scrollTo(0,2500)', () => {
        this
          .waitForElementVisible('@fulfilmentFeesBtn')
          .click('@fulfilmentFeesBtn');
      });
    return this;
  },
  /**
   * This method validates that the "Fulfilment Fees" info module is rendered
   */
  validateFulfilmentFeesInfoModule() {
    this
      .api.execute('scrollTo(0,1000)', () => {
        this
          .waitForElementVisible('@fulfilmentFeesInfoModule')
          .assert.visible('@fulfilmentFeesInfoModule', 'Fulfilment Fees info module displayed');
      });
    return this;
  },
  /**
   * This method clicks on the "Storage Fees" button
   */
  clickStorageFees() {
    this
      .api.execute('scrollTo(0,2500)', () => {
        this
          .waitForElementVisible('@storageFeesBtn')
          .assert.visible('@storageFeesBtn')
          .click('@storageFeesBtn');
      });
    return this;
  },
  /**
   * This method validates that the "Storage Fees" info module is rendered
   */
  validateStorageFeesInfoModule() {
    return this
      .waitForElementVisible('@storageFeesInfoModule')
      .assert.visible('@storageFeesInfoModule', 'Storage Fees info module displayed');
  },
  /**
   * This method clicks on the "Apply to Sell" button in the "Apply to Sell" form
   */
  clickApplyToSellInForm() {
    return this
      .waitForElementVisible('@applyToSellFormBtn')
      .assert.visible('@applyToSellFormBtn')
      .click('@applyToSellFormBtn');
  },
  /**
   * This method validates the "First Name" field error is displayed
   */
  validateFirstNameFieldError() {
    return this
      .waitForElementVisible('@firstNameEmptyFieldError')
      .assert.containsText('@firstNameEmptyFieldError', 'Please enter your first name');
  },
  /**
   * This method validates the "Last Name" field error is displayed
   */
  validateLastNameFieldError() {
    return this
      .waitForElementVisible('@lastNameEmptyFieldError')
      .assert.containsText('@lastNameEmptyFieldError', 'Please enter your last name');
  },
  /**
   * This method validates the "Email" field error is displayed
   */
  validateEmaiFieldError() {
    return this
      .waitForElementVisible('@emailEmptyFieldError')
      .assert.containsText('@emailEmptyFieldError', 'Please enter a valid email address');
  },
  /**
   * This method validates the "Company Name" field error is displayed
   */
  validateCompanyNameFieldError() {
    return this
      .waitForElementVisible('@companyEmptyFieldError')
      .assert.containsText('@companyEmptyFieldError', 'Please enter your company name');
  },
  /**
   * This method validates the "Category" field error is displayed
   */
  validateCategoryFieldError() {
    return this
      .waitForElementVisible('@categoryEmptyFieldError')
      .assert.containsText('@categoryEmptyFieldError', 'Please select a category');
  },
  /**
   * This method validates the radio button errors are displayed
   */
  validateRadioButtonSelectionError() {
    return this
      .waitForElementVisible('@radioBtnError')
      .assert.containsText('@radioBtnError', 'Please select one');
  },
  /**
   * This method validates the "Business Registration Number" radio button error is displayed
   */
  validateBusinessRegistrationNumberError() {
    return this
      .waitForElementVisible('@businessRegistrationNumberEmptyFieldError')
      .assert.containsText('@businessRegistrationNumberEmptyFieldError', 'Please enter your business registration number');
  },
  /**
   * This method validates the "Number of Unique Products" radio button error is displayed
   */
  validateNumberOfUniqueProductsError() {
    return this
      .waitForElementVisible('@numberOfUniqueProductsEmptyFieldError')
      .assert.containsText('@numberOfUniqueProductsEmptyFieldError', 'Please enter the number of unique products you sell');
  },
  /**
   * This method clicks on the "Yes" radio button on the "Do you have a physical store?" field
   */
  clickYesIhaveAStore() {
    this
      .api.execute('scrollTo(0,2000)', () => {
        this
          .waitForElementVisible('@yesPhysicalStore')
          .assert.visible('@yesPhysicalStore')
          .click('@yesPhysicalStore');
      });
    return this;
  },
  /**
   * This method validates that the "Physical store" error is displayed
   */
  validateDoYouHaveAPhysicalStoreError() {
    return this
      .waitForElementVisible('@physicalStoreRadioBtnError')
      .assert.containsText('@physicalStoreRadioBtnError', 'Please enter the number of stores you have');
  },

};

const xSelector = selector => ({
  selector,
  locateStrategy: 'xpath',
});

module.exports = {
  commands: [sellOnTakealot],
  url() {
    return this.api.launchUrl;
  },
  elements: {
    sellOnTakealot: '[class*="sot-banner-module_banner-content"] h1',
    getTheToolsBannerTitle: 'section:first-of-type h3',
    infographicTitle: 'section ~ section[class*="sell-on-takealot-module_steps"] h3',
    brandSwiperModule: '[class*="brand-swiper-module_brand-swiper"]',
    youTubeVideo: '.grid-x div:first-child > button [class*="content-card-module_with-play-icon"]',
    youTubeModal: '[class^="modal  video"]',
    videoCloseBtn: 'button[class*="modal-module_close-button"]',
    pricingModule: '#pricing [class*="sell-on-takealot-module_pricing"]',
    pricingModuleTitle: '#pricing h3',
    applyToSellBtn: '[class*="sot-banner-module_actions"] a:first-child',
    applyToSellForm: '[class*="apply-module_apply"]',
    applyToSellFormTitle: '[class*="apply-module_apply"] > div:first-child h1',
    successFeesBtn: '[class^="pricing-table-module_pricing-table"] .sf-accordion-item:first-child',
    successFeesInfoModule: '.sf-accordion-item:first-child [class*="pricing-table-module_accordion-item-content"]',
    fulfilmentFeesBtn: '[class^="pricing-table-module_pricing-table"] .sf-accordion-item:nth-child(2) button',
    fulfilmentFeesInfoModule: '.sf-accordion-item:nth-child(2) [class*="pricing-table-module_accordion-item-content"]',
    storageFeesBtn: '[class^="pricing-table-module_pricing-table"] .sf-accordion-item:nth-child(3)',
    storageFeesInfoModule: '[class^="pricing-table-module_pricing-table"] .sf-accordion-item:nth-child(3) [class*="pricing-table-module_accordion-item-content"]',
    applyToSellFormBtn: 'button.seller-application-button',
    firstNameEmptyFieldError: '.sellerApplication_first_name .error',
    lastNameEmptyFieldError: '.sellerApplication_last_name .error',
    emailEmptyFieldError: '.sellerApplication_email .error',
    companyEmptyFieldError: '.sellerApplication_company .error',
    categoryEmptyFieldError: '.material-select.error .error',
    radioBtnError: 'section .radio-select-group .error',
    numberOfUniqueProductsEmptyFieldError: 'section:nth-child(3) .material-input .error',
    businessRegistrationNumberEmptyFieldError: xSelector('//div[contains(text(),"business registration")]'),
    physicalStoreRadioBtnError: 'section:nth-child(3) .grid-x:last-child .material-input .error',
    yesPhysicalStore: 'section:nth-child(3)  > .grid-x:nth-child(5) label input[value="Yes"]',
  },
};
