/* eslint-disable no-undef */
const checkoutPayment = {
  paymentInfo() {
    return this
      .waitForElementVisible('@paymentOptions', () => {
        this.api.elements('css selector', 'div.radio-select-container-wrapper label.radio-select', (els) => {
          els.value.forEach((element) => {
            this.api
              .elementIdClick(element.ELEMENT)
              .pause(1000)
              .element('css selector', 'div.payment-methods-container .radio-select.on button.radio-link', (btn) => {
                if (btn.status > -1) {
                  this.api
                    .click('div.payment-methods-container .radio-select.on button.radio-link')
                    .pause(1000)
                    .waitForElementPresent('div.modal.payment', 1500, 'payment info modal was visible')
                    .click('div.modal.payment div.modal-footer button.button.modal-button');
                }
              });
          });
        });
      });
  },
  sBux() {
    return this
      .waitForElementVisible('@sBux', () => {
        this.api
          .click('div.payment-methods-container label[for="payment_PaymentMethod_sbux"]')
          .setValue('div.sbux-voucher-form input[name="sbux"]', '1235abcde')
          .verify.value('div.sbux-voucher-form input[name="sbux"]', '123-5abcd-e')
          .setValue('div.sbux-voucher-form input[name="sbux"]', '');
      });
  },
  digitalDisabled() {
    return this
      .waitForElementVisible('div.payment-methods-container', this.api.globals.waitForConditionTimeout)
      .verify.cssClassPresent('@cad', 'disabled')
      .verify.cssClassPresent('@discovery', 'disabled')
      .verify.cssClassPresent('@mobicred', 'disabled');
  },
  addVoucher() {
    return this
      .waitForElementVisible('div.voucher-section button.trigger', this.api.globals.waitForConditionTimeout)
      .click('div.voucher-section button.trigger')
      .waitForElementVisible('input[name="voucherOrCoupon"]', this.api.globals.waitForConditionTimeout)
      .click('input[name="voucherOrCoupon"]')
      .setValue('input[name="voucherOrCoupon"]', 'STOREFRONT')
      .verify.value('input[name="voucherOrCoupon"]', 'STOREFRONT')
      .click('button.voucher-button')
      .verify.containsText('div.alert-banner.green', 'Coupon applied')
      .click('button.voucher-delete')
      .pause(2000);
  },
  /**
   * This method validates that the Payment page is rendered.
   */
  validatePaymentPage() {
    return this
      .assert.urlContains('/buy/payment')
      .waitForElementVisible('@paymentMethodsPanel', () => {}, 'Payment Methods found in page')
      .assert.visible('@paymentMethodsPanel', 'User is in Payment page');
  },
  /**
   * This method clicks on the "Pay With Credit Card" button
   */
  clickPayWithCreditCard() {
    return this
      .waitForElementVisible('@payWithCreditCardBtn', 10000, (result) => {
        if (result.value === true) {
          if (result.status !== undefined) {
            this
              .click('@payWithCreditCardBtn');
          } else {
            this
              .api.execute((selector) => {
                document.querySelector(selector).click();
              }, [this.elements.payWithCreditCardBtn.selector]);
          }
        } else {
          this
            .assert.ok(false, '[FAIL] - Something went wrong when clicking "Pay With Credit Card" button');
        }
      }, '[STEP] - "Pay With Credit Card" button should be displayed and clicked');
  },
  /**
   * This method validates that the Credit Card Form is rendered.
   */
  validateCreditCardForm() {
    return this
      .isVisible({ selector: '@continueWithCheckoutBtn', suppressNotFoundErrors: true }, (val) => {
        if (val.value == true) {
          this
            .click('@continueWithCheckoutBtn');
        }
      })
      .isVisible({ selector: '@creditCardForm', suppressNotFoundErrors: true, timeout: 10000 }, (res) => {
        switch (res.value) {
          case true:
            this
              .waitForElementVisible('@creditCardForm', 60000, () => {}, '[STEP] -  Credit Card Form should be loaded')
              .assert.visible('@creditCardForm', 'Credit Card Form is displayed')
              .assert.urlContains('takealot.paygate');
            break;
          default:
            this
              .assert.ok(true, '[INFO] - ****Paygate not enabled.Checking PayU****')
              .waitForElementVisible('@payUCreditCardForm', 60000, () => {}, '[STEP] -  Credit Card Form should be loaded')
              .assert.visible('@payUCreditCardForm', 'Credit Card Form is displayed')
              .assert.urlContains('payu');
            break;
        }
      });
  },
  /**
   * This method validates that the Credit Card Form is rendered.
   */
  validateMasterCreditCardForm() {
    return this
      .isVisible({ selector: '@creditCardForm', suppressNotFoundErrors: true, timeout: 10000 }, (res) => {
        switch (res.value) {
          case true:
            this
              .waitForElementVisible('@creditCardForm', 10000, () => {}, '[STEP] -  Credit Card Form should be loaded')
              .assert.visible('@creditCardForm', 'Credit Card Form is displayed')
              .assert.urlContains('tal.pgcoza');
            break;
          default:
            this
              .assert.ok(true, '[INFO] - ****Paygate not enabled.Checking PayU****')
              .waitForElementVisible('@payUCreditCardForm', 60000, () => {}, '[STEP] -  Credit Card Form should be loaded')
              .assert.visible('@payUCreditCardForm', 'Credit Card Form is displayed')
              .assert.urlContains('payu');
            break;
        }
      });
  },
  /**
   * This method clicks on the "Credit & Debit Card" radio button
   */
  clickCreditAndDebitCard() {
    return this
      .waitForElementVisible('@creditAndDebitCardRadioBtn')
      .click('@creditAndDebitCardRadioBtn');
  },
  /**
   * This method clicks on the "Change Payment Method" link
   */
  clickChangePaymentMethod() {
    return this
      .waitForElementVisible('@changePaymentMethodLink', 10000, (res) => {
        if (res.value) {
          this
            .click('@changePaymentMethodLink');
        } else {
          this
            .assert.ok(false, '[FAIL] - Something went wrong when clicking "Change Payment Mathod"');
        }
      }, '[STEP] - "Change Payment Method" link should be displayed and clicked');
  },
};

const xSelector = selector => ({
  selector,
  locateStrategy: 'xpath',
});

module.exports = {
  commands: [checkoutPayment],
  url() {
    return this.api.launchUrl;
  },
  elements: {
    paymentOptions: '.payment-methods-container .radio-select.on',
    sBux: '.payment-methods-container label[for="payment_PaymentMethod_sbux"]',
    cad: '.payment-methods-container label[for="payment_PaymentMethod_cod"]',
    discovery: '.payment-methods-container label[for="payment_PaymentMethod_discovery-miles"]',
    mobicred: '.payment-methods-container label[for="payment_PaymentMethod_mobicred"]',
    paymentMethodsPanel: '[class^="payment-methods"]',
    payWithCreditCardBtn: '[class="button pay"]',
    creditCardForm: '.payment',
    creditAndDebitCardRadioBtn: xSelector('//div[contains(text(),"Credit & Debit Card")]'),
    changePaymentMethodLink: 'a[class="back-to-cart-text"]',
    payUCreditCardForm: 'div #panel-creditcard',
    continueWithCheckoutBtn: xSelector('(//button[contains(text(),"Continue with checkout")])[1]'),
  },
};
