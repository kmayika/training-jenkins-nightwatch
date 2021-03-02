const chalk = require('chalk');

const voucher = {
  /**
     * This method validates that the "Apply a Gift Voucher Code" page is rendered
    */
  validateVoucherPage() {
    return this
      .waitForElementVisible('@voucherHeading')
      .assert.containsText('@voucherHeading', 'Apply a Gift Voucher Code')
      .waitForElementVisible('@voucherMainSection')
      .assert.urlContains('/account/voucher')
      .assert.visible('@voucherMainSection', chalk`{green ✔}  User is now on the "Apply a Gift Voucher Code" page`);
  },
  /**
   * This method enters a gift voucher code
   * @param {*} code The user's Gift Voucher Code
   */
  enterGiftVoucherCode(code) {
    return this
      .waitForElementVisible('@enterGiftVoucherCodeTextBox')
      .assert.visible('@enterGiftVoucherCodeTextBox')
      .setValue('@enterGiftVoucherCodeTextBox', code);
  },
  /**
   * This method clicks on the "Apply Voucher" button
   */
  clickApplyVoucher() {
    return this
      .waitForElementVisible('@applyVoucherBtn')
      .assert.visible('@applyVoucherBtn')
      .click('@applyVoucherBtn');
  },
  /**
   * This method validates that the "Invalid voucher code supplied" 
   * error banner is rendered.
   */
  validateInvalidVoucherCodeError() {
    return this
      .waitForElementVisible('@invalidVoucherCodeBanner')
      .assert.containsText('@invalidVoucherCodeBanner', 'Invalid voucher code supplied.')
      .assert.visible('@invalidVoucherCodeBanner', 'Error Banner Displayed');
  },

};

module.exports = {
  commands: [voucher],
  url() {
    return this.api.launchUrl;
  },
  elements: {
    voucherMainSection: 'section[class*="account-module_main"]',
    voucherHeading: 'h1[class*="voucher-title"]',
    enterGiftVoucherCodeTextBox: '#voucher_voucherOrCoupon',
    applyVoucherBtn: 'button[class*="voucher-button"]',
    invalidVoucherCodeBanner: '[class*="alert-banner-module_message"]',
  },
};
