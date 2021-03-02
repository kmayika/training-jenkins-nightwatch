/* eslint-disable no-undef */
/* eslint-disable no-plusplus */
// noinspection JSUnusedGlobalSymbols
const cart = {
  validateCartLoaded() {
    return this
      .assert.visible('@checkoutBut', '"Proceed To Checkout" Button Displayed')
      .assert.visible('@removeItem', '"Remove" Icon displayed')
      .assert.visible('@moveToWishlist', '"Move To Wishlist" Icon displayed')
      .assert.visible('@qtySelector', 'Quantity Selector is displayed');
  },
  qtyIncrease() {
    this
      .assert.visible('@qtySelector')
      .click('@qtySelector')
      .assert.visible('@qtyIncrease')
      .click('@qtyIncrease');
  },
  qtyDecrease() {
    this
      .assert.visible('@qtySelector')
      .click('@qtySelector')
      .assert.visible('@qtyDecrease')
      .click('@qtyDecrease');
  },
  removeFromCart() {
    this
      .assert.visible('@removeItem')
      .click('@removeItem');
  },
  /**
   * This method clicks on the "Proceed to Checkout" button
   */
  clickProceedToCheckout() {
    return this
      .waitForElementVisible('@proceedToCheckout', 10000, (result) => {
        if (result.value === true) {
          if (result.status !== undefined) {
            this
              .click('@proceedToCheckout');
          } else {
            this
              .api.execute((selector) => {
                document.querySelector(selector).click();
              }, [this.elements.proceedToCheckout.selector]);
          }
        } else {
          this
            .assert.ok(false, '[FAIL] - Something went wrong when clicking "Go to Cart" button');
        }
      }, '[STEP] - "Proceed to Checkout" button should be displayed and clicked');
  },
  /**
   * This method validates that the age verification panel is rendered
   */
  validateAgeVerificationPanel() {
    return this
      .waitForElementPresent('@ageVerificationPanel')
      .assert.visible('@ageVerificationPanel')
      .assert.visible('@liquorAlertBannerGreen');
  },
  /**
   * This method enters the user's Day Of Birth in the age verification panel
   * @param {*} dayOfBirth
   */
  enterDayOfBirth(dayOfBirth) {
    return this
      .waitForElementPresent('@dayOfBirthDropdownList')
      .assert.visible('@dayOfBirthDropdownList')
      .setValue('@dayOfBirthDropdownList', dayOfBirth);
  },
  /**
   * This method enters the user's Month Of Birth in the age verification panel
   * @param { string } monthOfBirth
   */
  enterMonthOfBirth(monthOfBirth) {
    return this
      .waitForElementPresent('@monthOfBirthDropdownList')
      .assert.visible('@monthOfBirthDropdownList')
      .setValue('@monthOfBirthDropdownList', monthOfBirth);
  },
  /**
   * This method enters the user's Year Of Birth in the age verification panel
   * @param {*} yearOfBirth
   */
  enterYearOfBirth(yearOfBirth) {
    return this
      .waitForElementPresent('@yearOfBirthDropdownList')
      .assert.visible('@yearOfBirthDropdownList')
      .setValue('@yearOfBirthDropdownList', yearOfBirth);
  },
  /**
   * This method clicks on the "Verify" button
   */
  clickVerify() {
    return this
      .waitForElementPresent('@verifyBtn')
      .assert.visible('@verifyBtn')
      .click('@verifyBtn')
      .pause(3000);
  },
  /**
   * This method validates if the age verification error banner is rendered
   */
  validateAgeVerificationErrorDisplayed() {
    return this
      .waitForElementPresent('@liquorAlertBannerRed')
      .assert.visible('@liquorAlertBannerRed')
      .expect.element('@verifyBtn').to.not.be.enabled;
  },
  // TODO: TV Licence should move ?
  /**
   * This method validates that the TV licence verification panel is rendered correctly
   */
  validateTvLicenceVerificationPanel() {
    return this
      .waitForElementPresent('@tvLicenceVerificationPanel')
      .assert.containsText('@tvLicenceVerificationPanel', 'TV Licence');
  },
  /**
   * This method clicks on th "Domestic" licence type option
   */
  clickDomestic() {
    return this
      .waitForElementPresent('@domesticLicenceTypeRadioBtn')
      .assert.containsText('@domesticLicenceTypeRadioBtn', 'Domestic')
      .click('@domesticLicenceTypeRadioBtn');
  },
  /**
   * This method clicks on th "Holiday Home" licence type option
   */
  clickHolidayHome() {
    return this
      .waitForElementPresent('@holidayHomeLicenceTypeRadioBtn')
      .assert.containsText('@holidayHomeLicenceTypeRadioBtn', 'Holiday Home')
      .click('@holidayHomeLicenceTypeRadioBtn');
  },
  /**
   * This method clicks on th "Business" licence type option
   */
  clickBusiness() {
    return this
      .waitForElementPresent('@businessLicenceTypeRadioBtn')
      .assert.containsText('@businessLicenceTypeRadioBtn', 'Business')
      .click('@businessLicenceTypeRadioBtn');
  },
  /**
   * This method clicks on th "Dealer" licence type option
   */
  clickDealer() {
    return this
      .waitForElementPresent('@dealerLicenceTypeRadioBtn')
      .assert.containsText('@dealerLicenceTypeRadioBtn', 'Dealer')
      .click('@dealerLicenceTypeRadioBtn');
  },
  /**
   * This method enters the ID / Passport Number of the licence holder
   * @param { number } id The user's id or passport number
   */
  enterLicenceHolderNumber(id) {
    return this
      .waitForElementPresent('@licenceIdInputBox')
      .assert.visible('@licenceIdInputBox')
      .setValue('@licenceIdInputBox', id);
  },
  /**
   * This method validates that the additional input fields are rendered when
   * the user clicks on "Business" or "Dealer" licence type options
   */
  validateAdditionalFields() {
    return this
      .waitForElementPresent('@companyRegisterationInputBox')
      .waitForElementPresent('@tvLicenceEasyPayNumberInputBox')
      .assert.visible('@companyRegisterationInputBox')
      .assert.visible('@tvLicenceEasyPayNumberInputBox');
  },
  /**
   * This method enters the user's "Company Registeration" or "Owner ID" number
   * @param {number} num This is the user's "Company Registeration" or "Owner ID" number
   */
  enterCompanyRegisterationNumber(num) {
    return this
      .waitForElementPresent('@companyRegisterationInputBox')
      .assert.visible('@companyRegisterationInputBox')
      .setValue('@companyRegisterationInputBox', num);
  },
  /**
   * This method enters the user's "TV Licence" or "EasyPay" number
   * @param {number} num This is the user's "TV Licence" or "EasyPay" number
   */
  enterTvLicenceEasyPayNumber(num) {
    return this
      .waitForElementPresent('@tvLicenceEasyPayNumberInputBox')
      .assert.visible('@tvLicenceEasyPayNumberInputBox')
      .setValue('@tvLicenceEasyPayNumberInputBox', num);
  },
  /**
   * This method validates if the TV licence verification error banner is rendered
   */
  validateTVLicenceVerificationErrorDisplayed() {
    return this
      .waitForElementPresent('@messageAlertBanner')
      .assert.visible('@messageAlertBanner')
      .assert.containsText('@messageAlertBanner', 'No TV licence found for your ID.');
  },
  /**
   * This method validates if the TV licence in arrears error banner is rendered
   */
  validateTVLicenceInArrearsErrorDisplayed() {
    return this
      .waitForElementPresent('@messageAlertBanner')
      .assert.visible('@messageAlertBanner')
      .assert.containsText('@messageAlertBanner', 'Your TV licence account is in arrears.');
  },
  /**
   * This method validates if the unable to validate TV licence error banner is rendered
   */
  validateUnableToValidateTVLicenceErrorDisplayed() {
    return this
      .waitForElementPresent('@messageAlertBanner')
      .assert.visible('@messageAlertBanner')
      .assert.containsText('@messageAlertBanner', 'We were unable to validate your TV licence');
  },
  /**
   * This method sets the value of the product quantity in the cart page
   * @param {number} qty The quantity desired
   */
  setQuantity(qty) {
    return this
      .waitForElementPresent('@qtyIncrease10', 10000)
      .setValue('@qtyIncrease10', qty);
  },
  validateCartQty(value) {
    return this
      .waitForElementPresent('@qtyIncrease10')
      .assert
      .containsText('@qtyIncrease10', value);
  },
  /**
   * This method clicks on the "Move to Wishlist" button
   */
  clickMoveToWishlist() {
    return this
      .waitForElementPresent('@moveToWishlist')
      .assert.visible('@moveToWishlist')
      .click('@moveToWishlist');
  },
  /**
   * This method validates that the item is added to wishlist
   */
  validateItemAddedToWishlist() {
    return this
      .waitForElementVisible('@successBanner')
      .assert.visible('@successBanner')
      .assert.containsText('@successBanner', 'Item moved to list.');
  },
  /**
   * This method clicks on the "In Stock" link
   */
  clickInStock() {
    return this
      .waitForElementVisible('@inStockLink')
      .click('@inStockLink');
  },
  /**
   * This method validates that the "In Stock" tooltip is displayed.
   */
  validateInStockTooltip() {
    return this
      .waitForElementVisible('@inStockToolTip')
      .assert.containsText('@inStockToolTip', 'This item');
  },
  /**
   * This method removes all the items in the cart
   */
  removeItemsFromCart() {
    this
      .api.elements('@removeBtn', (res) => {
        if (res.value.length > 0) {
          let i = 0;
          while (i < res.value.length) {
            this
              .assert.visible('@removeBtn')
              .click('@removeBtn')
              .pause(200);
            i++;
          }
        } else {
          this
            .assert.visible('@yourCartIsEmptyMessage', '[STEP] -  "Your Cart is Empty" message should be displayed');
          console.log('Cart is Empty');
        }
        return this;
      });
    return this;
  },
  /**
   * This method validates that the Cart page is displayed.
   */
  validateCartPage() {
    return this
      .waitForElementVisible('@shoppingCartTitle', 20000, () => {}, '[STEP] -  User should be in Cart Page')
      .assert.containsText('@shoppingCartTitle', 'Shopping Cart')
      .assert.urlContains('/cart');
  },
  /**
   * This method validates that there is an item(s) in the Cart
   */
  validateItemInCart() {
    return this
      .waitForElementVisible('@cartItem')
      .assert.visible('@cartItem', '[STEP] -  Cart should have an item');
  },
  /**
   * This method clicks on the "Update" button in the cart page
   */
  clickUpdate() {
    this
      .pause(1000)
      .api.elements('@updateBtn', (res) => {
        if (res.value.length > 0) {
          this
            .waitForElementVisible('@updateBtn')
            .click('@updateBtn');
        } else {
          console.log('No need to click Update');
        }
      });
    return this;
  },
};

const xSelector = selector => ({
  selector,
  locateStrategy: 'xpath',
});

module.exports = {
  commands: [cart],
  url() {
    return this.api.launchUrl;
  },
  elements: {
    checkoutBut: '.checkout-button.button.pay',
    removeItem: '[class^="cart-item-container"]:nth-child(1) .button.clear.remove-item',
    moveToWishlist: '[class^="cart-item-container"]:nth-child(1) .button.clear.move-to-wishlist',
    qtySelector: '[class^="cart-item-container"]:nth-child(1) [id^="cart-item"]',
    qtyIncrease10: xSelector('(//*[contains(@id,"cart-item_undefined")])[1]'),
    qtyIncrease: '[class^="cart-item-container"]:nth-child(1) option[value="2"]',
    qtyDecrease: '[class^="cart-item-container"]:nth-child(1) option[value="1"]',
    proceedToCheckout: 'a[href$="/buy"]',
    ageVerificationPanel: '[class*="verify-age"]',
    dayOfBirthDropdownList: '[name*="dateOfBirth_day"]',
    monthOfBirthDropdownList: '[name*="dateOfBirth_month"]',
    yearOfBirthDropdownList: '[name*="dateOfBirth_year"]',
    liquorAlertBannerGreen: '[class^="message"]',
    liquorAlertBannerRed: '.red [class^="message"]',
    verifyBtn: '.button[type="submit"]',
    tvLicenceVerificationPanel: '[class^="verify-tv-licence"]',
    domesticLicenceTypeRadioBtn: '.radio-select-group > div:first-child label',
    holidayHomeLicenceTypeRadioBtn: '.radio-select-group > div:nth-child(2) label',
    businessLicenceTypeRadioBtn: '.radio-select-group > div:nth-child(3) label',
    dealerLicenceTypeRadioBtn: '.radio-select-group > div:nth-child(4) label',
    licenceIdInputBox: '#checkout_licenceId',
    companyRegisterationInputBox: '#checkout_companyRegistrationNumber',
    tvLicenceEasyPayNumberInputBox: '#checkout_tvLicenceOrEasypayNumber',
    messageAlertBanner: '[class^="message"]',
    successBanner: '  [class*="Toastify__toast Toastify__toast--success"]',
    inStockLink: '(//*[contains(text(),"In stock")])[1]',
    inStockToolTip: '[class*="tooltip "]',
    removeBtn: 'button[class$="remove-item"]',
    shoppingCartTitle: '[class^="cart-content-module_title"]',
    cartItem: xSelector('(//div[contains(@class,"cart-item")])[1]'),
    yourCartIsEmptyMessage: '[class="empty-list-message "]',
    updateBtn: 'button[class*="quantity-update"]',
  },
};
