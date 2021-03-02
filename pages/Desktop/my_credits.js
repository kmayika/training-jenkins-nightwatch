const chalk = require('chalk');

const credits = {
  /**
     * This method validates that the "My Credits" page is rendered correctly
    */
  validateMyCreditsPage() {
    return this
      .waitForElementVisible('@creditsHeading')
      .assert.containsText('@creditsHeading', 'Credit & Refunds')
      .waitForElementVisible('@availableCreditBalancePanel')
      .waitForElementVisible('@creditHistoryPanel')
      .assert.visible('@creditsMainSection', chalk`{green ✔} User is now on the Credits page`);
  },
  /**
   * This method clicks on the "Redeem Gift Voucher" button
   */
  clickRedeemGiftVoucher() {
    return this
      .waitForElementVisible('@redeemGiftVoucherBtn')
      .assert.visible('@redeemGiftVoucherBtn', chalk`{green ✔} Redeem Gift Voucher Button Clicked`)
      .click('@redeemGiftVoucherBtn');
  },
};

module.exports = {
  commands: [credits],
  url() {
    return this.api.launchUrl;
  },
  elements: {
    creditsMainSection: 'section[class*="account-module_main"]',
    creditsHeading: 'h1[class*="credit-module_refunds-heading"]',
    availableCreditBalancePanel: '[class*="credit-balance-module_credit-balance-panel"]',
    creditHistoryPanel: '[class*="credit-history-container"]',
    redeemGiftVoucherBtn: 'a.button[href$="/account/voucher"]',

  },
};
