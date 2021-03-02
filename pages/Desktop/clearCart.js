/* eslint-disable prefer-template */
// noinspection JSUnusedGlobalSymbols
/* eslint-disable no-console */
const chalk = require('chalk');

const clearCart = {
  clearDesktop() {
    return this
      .waitForElementVisible('@cartPage', this.api.globals.waitForConditionTimeout)
      .waitForElementVisible('[class*="content"]', () => {
        this.api.elements('css selector', '#select-all-container', (res) => {
          console.log(res);
          if (res.value.length > 0) {
            // eslint-disable-next-line no-console
            console.log(chalk`{yellow !} Has items in cart, removing ...`);
            this.api
              .click('#select-all-container #select-all-checkbox')
              .click('#remove-items');
          } else {
            // eslint-disable-next-line no-console
            console.log(chalk`{green ✔} Does not have any items in the cart`);
          }
        });
      });
  },
};

module.exports = {
  commands: [clearCart],
  url() {
    return this.api.launchUrl;
  },
  elements: {
    cartPage: '[class*="cart-content-module_cart"]',
    selectAll: '#select-all-container',
    selectAllCheckbox: '#select-all-container #select-all-checkbox',
    removeBtn: '#remove-items',
  },
};
