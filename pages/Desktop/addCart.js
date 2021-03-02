/* eslint-disable prefer-template */
// noinspection JSUnusedGlobalSymbols
/* eslint-disable no-console */
const chalk = require('chalk');

const add = {
  addCart(url) {
    return this
      .url(url)
      .waitForElementVisible('.buybox-actions .add-to-cart-button', this.globals.waitForConditionTimeout, true, () => {
        this.url((result) => {
          // eslint-disable-next-line no-param-reassign
          this.globals.product_info = {
            url: result.value,
            PLID: result.value.split('/').pop(),
            order_number: '',
          };
          console.log(`👉🏻 Product ID: ${this.globals.product_info.PLID}`);
          console.log(`👉🏻 Product URL: ${this.globals.product_info.url}`);
        });
      })
      .waitForElementVisible('@addToCart', this.globals.waitForConditionTimeout)
      .click('@addToCart')
      .waitForElementVisible('@checkoutNow', this.globals.waitForConditionTimeout)
  },
};

module.exports = {
  commands: [add],
  url() {
    return this.api.launchUrl;
  },
  elements: {
    addToCart: '.buybox-actions .add-to-cart-button',
    checkoutNow: '.buybox-actions .checkout-now',
  },
};
