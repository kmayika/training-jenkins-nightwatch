// noinspection JSUnusedGlobalSymbols
/* eslint-disable no-console */
const chalk = require('chalk');

const checkoutShipping = {
  selectShipping() {
    return this
      .waitForElementVisible(
        '.shipping-subsection',
        this.api.globals.waitForConditionTimeout,
        true,
        () => {
          this.api.elements('css selector', '.radio-select-group .radio-select-container-wrapper .radio-select', (els) => {
            this.api.waitForElementNotPresent('.radio-select-group.disabled', this.api.globals.waitForConditionTimeout);
            if (els.value.length >= 1) {
              els.value.forEach((element) => {
                this.api
                  .elementIdClick(element.ELEMENT);
              });
            }
          });
        },
        'Shipping options are visible'
      )
      .waitForElementNotPresent(
        '.radio-select-group.disabled',
        this.api.globals.waitForConditionTimeout,
        true,
        () => {},
        'Shipping selected and disabled state cleared from selector'
      )
      .waitForElementVisible(
        '.call-to-action button.button.pay:enabled',
        this.api.globals.waitForConditionTimeout,
        true,
        () => {},
        'The continue button on shipping type selection is visible and enabled'
      )
      .click('button.button.pay');
  },
};

module.exports = {
  commands: [checkoutShipping],
  url() {
    return this.api.launchUrl;
  },
  elements: {
    checkoutBtn: '.call-to-action button.button.pay:enabled',
  },
};
