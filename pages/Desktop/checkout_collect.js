// noinspection JSUnusedGlobalSymbols
/* eslint-disable no-console */
const chalk = require('chalk');

const checkoutCollect = {
  collect() {
    return this
      .waitForElementVisible('@collectBtn', this.api.globals.waitForConditionTimeout)
      .click('@collectBtn');
  },
  pickupPointMap() {
    return this
      .waitForElementVisible('@pickUpPoints', () => {
        this.api
          .click('div.radio-select-container-wrapper:nth-child(2) label.radio-select')
          .click('div.radio-select-container-wrapper label.radio-select.on .button-cell .trigger')
          .waitForElementVisible('.pickup-point-container .map', this.api.globals.waitForConditionTimeout);
      });
  },
  selectPickup() {
    return this
      .waitForElementVisible(
        '.call-to-action button.button.pay:enabled',
        this.api.globals.waitForConditionTimeout,
        true,
        () => {},
        'The continue button on pickup point page is visible and enabled'
      )
      .click('button.button.pay');
  },
};

module.exports = {
  commands: [checkoutCollect],
  url() {
    return this.api.launchUrl;
  },
  elements: {
    collectBtn: '#collect_button',
    pickUpPoints: '.pickup-points[class*="pickup-points"]',
    checkoutBtn: 'button.button.pay',
  },
};
