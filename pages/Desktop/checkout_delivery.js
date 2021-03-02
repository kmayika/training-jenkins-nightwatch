/* eslint-disable no-undef */
// noinspection JSUnusedGlobalSymbols
/* eslint-disable no-console */
// eslint-disable-next-line no-unused-vars
const chalk = require('chalk');

const checkoutDelivery = {
  ItemToCart() {
    return this
      .waitForElementVisible('@addtocart')
      .click('@addtocart')
      .assert.containsText('@itemAdded', 'Add to Cart');
  },
  Checkout() {
    return this
      .waitForElementVisible('@itemAdded')
      .click('@itemAdded')
      .waitForElementVisible('@checkoutButton')
      .click('@checkoutButton');
  },
  selectDelivery() {
    return this
      .waitForElementVisible('@optDeliver')
      .assert.containsText('@optDeliver', 'Deliver My Order')
      .click('@optDeliver');
  },
  addAddress() {
    return this
      .waitForElementVisible('@addAddress')
      .click('@addAddress')
      .waitForElementPresent('@radioResidential');
  },
  enterRecipientName(name) {
    return this
      .waitForElementVisible('@recipientName')
      .setValue('@recipientName', name);
  },
  enterRecipientNumber(number) {
    return this
      .waitForElementVisible('@recipientNumber')
      .setValue('@recipientNumber', number);
  },
  enterStreetAddress(address) {
    return this
      .waitForElementVisible('@streetAddress')
      .setValue('@streetAddress', address);
  },
  enterComplex(complex) {
    return this
      .waitForElementVisible('@complexName')
      .setValue('@complexName', complex);
  },
  enterSuburb(suburb) {
    return this
      .waitForElementVisible('@suburb')
      .setValue('@suburb', suburb);
  },
  enterCity(city) {
    return this
      .waitForElementVisible('@city')
      .setValue('@city', city);
  },
  enterProvince() {
    return this
      .waitForElementVisible('@province')
      .click('@province')
      .click('@provinceOpt');
  },
  enterPostalCode(code) {
    return this
      .waitForElementVisible('@postalCode')
      .setValue('@postalCode', code);
  },
  submitNewAddress() {
    return this
      .click('@continueBut');
  },
  confirmOrderSummary(Text) {
    return this
      .assert.containsText('@orderSummaryText', Text);
  },
  continueOrderSummary() {
    return this
      .waitForElementVisible('@continueOrderSum')
      .click('@continueOrderSum');
  },
  delivery() {
    return this
      .waitForElementVisible('@deliveryBtn', this.api.globals.waitForConditionTimeout)
      .click('@deliveryBtn');
  },
  selectAddress() {
    return this
      .waitForElementVisible('.call-to-action button.button.pay', this.api.globals.waitForConditionTimeout)
      .waitForElementVisible('.address-book', this.api.globals.waitForConditionTimeout)
      .pause(1000)
      .click('@checkoutBtn');
  },
  /**
   * This method validates that the "Collect" option is disabled
   */
  validateCollectionNotAvailable() {
    return this
      .waitForElementVisible('@collectOrderOptionDisabled')
      .assert.visible('@collectOrderOptionDisabled')
      .expect.element('@collectOrderOptionDisabled').text.to.contain('Collect Not Available');
  },
  /**
   * This method validates that the user is on the delivery page
   */
  validateCheckoutDeliveryPage() {
    return this
      .waitForElementVisible('@deliveryMethodsPanel')
      .assert.visible('@deliveryMethodsPanel');
  },
  /**
   * This method clicks on the "Deliver My Order" button
   */
  clickDeliverMyOrder() {
    return this
      .waitForElementVisible('@deliverMyOrder', 10000, () => {}, '[STEP] - "Deliver My Order" button should be clicked')
      .click('@deliverMyOrder');
  },
  /**
   * This method validates that the user is on the Delivery Addresses page
   */
  validateDeliveryAddressesPage() {
    return this
      .assert.urlContains('buy/delivery/addresses', 'Delivery Addresses Page Displayed');
  },
  /**
   * This method validates that the user is on the Delivery Options page
   */
  validateDeliveryOptionsPage() {
    return this
      .assert.urlContains('buy/delivery/options', 'Delivery Options Page Displayed');
  },
  /**
   * This method validates that the user is on the Delivery Methods page
   */
  validateDeliveryMethodsPage() {
    return this
      .waitForElementVisible('@deliveryOptionCell', 20000)
      .assert.urlContains('buy/delivery/methods', 'Delivery Methods Page Displayed');
  },
  /**
   * This methods clicks on the "Continue" button in the "Delivery Address" options page
   */
  clickContinue() {
    return this
      .waitForElementVisible('@continueBtn', 10000, (result) => {
        if (result.value === true) {
          if (result.status !== undefined) {
            this
              .click('@continueBtn');
          } else {
            this
              .api.execute((selector) => {
                document.querySelector(selector).click();
              }, [this.elements.continueBtn.selector]);
          }
        } else {
          this
            .assert.ok(false, '[FAIL] - Something went wrong when clicking "Continue" button');
        }
      }, '[STEP] - Continue button should be displayed and clicked');
  },

};

const xSelector = selector => ({
  selector,
  locateStrategy: 'xpath',
});

module.exports = {
  commands: [checkoutDelivery],
  url() {
    return this.api.launchUrl;
  },
  elements: {
    // Add Item To Cart
    searchBar: '#search',
    addtocart: '#shopfront-app div.pdp-grid-container div:nth-child(2) div.cell.small-3 .sf-buybox .buybox-actions button.button.expanded.add-to-cart-button.async-button',
    itemAdded: '#shopfront-app div.pdp-grid-container div:nth-child(2) div.cell.small-3 .sf-buybox .buybox-actions button.button.expanded.add-to-cart-button.async-button',
    cartButton: '.top-link-cart',
    checkoutButton: '#shopfront-app div.pdp-grid-container div:nth-child(2) div.cell.small-3 .sf-buybox div.buybox-actions button.button.expanded.checkout-now.dark',
    // Checkout Screen For Delivery Method
    optDeliver: '#Delivery_button .shrink.cell',
    deliveryBtn: '#Delivery_button',
    checkoutBtn: 'button.button.pay',
    // Checkout Delivery Addresses
    addAddress: '#addAddress',
    // Address Details
    radioResidential: '#delivery-flow_address_type_residential',
    radioBusiness: '#delivery-flow_address_type_business',
    recipientName: '#delivery-flow_recipient',
    recipientNumber: '#delivery-flow_contact_number',
    streetAddress: '#delivery-flow_street',
    streetAddressAuto: '#shopfront-app section.auto.cell.main-section div:nth-child(2) div:nth-child(4) ul',
    complexName: '#delivery-flow_complex_details',
    suburb: '#delivery-flow_suburb',
    city: '#delivery-flow_city',
    province: '#delivery-flow_province',
    provinceOpt: '#delivery-flow_province > option:nth-child(10)',
    postalCode: '#delivery-flow_postal_code',
    // continue to next step
    continueBut: '#shopfront-app section.auto.cell.main-section div:nth-child(2) div:nth-child(11) button.button.save-address',
    // Order Summary
    orderSummaryText: '#shopfront-app section.large-4.cell aside section header h2',
    continueOrderSum: '.button.pay',
    collectOrderOptionDisabled: '[class$="delivery-method"] .disabled',
    deliveryMethodsPanel: '[class$="delivery-method"]',
    deliverMyOrder: '#Delivery_button div.button',
    continueBtn: 'button[class="button pay"]',
    deliveryOptionCell: xSelector('(//h2[contains(text(),"Delivery")])[1]'),
  },
};
