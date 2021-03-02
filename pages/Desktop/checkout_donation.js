/* eslint-disable prefer-template */
// noinspection JSUnusedGlobalSymbols
/* eslint-disable no-console */
const chalk = require('chalk');

const checkoutDonation = {
  closeX() {
    return this
      .pause(1500)
      .waitForElementVisible('@modal', this.api.globals.waitForConditionTimeout)
      .click('@closeX')
      .waitForElementNotPresent('@modal', this.api.globals.waitForConditionTimeout, (modal) => {
        if (modal.value.length > 0) {
          this.api
            .moveToElement('@closeX', 10, 10)
            .pause(1500)
            .mouseButtonClick(0);
        }
      },
      'Donation Modal was dismissed');
  },
  closeNoThanks() {
    return this
      .pause(1500)
      .waitForElementVisible('@modal', this.api.globals.waitForConditionTimeout)
      .verify.containsText('@noThanksBtn', 'No thanks')
      .pause(1500)
      .click('@noThanksBtn')
      .waitForElementNotPresent('@modal', this.api.globals.waitForConditionTimeout, (modal) => {
        if (modal.value.length > 0) {
          this.api
            .moveToElement('@noThanksBtn', 10, 10)
            .pause(1100)
            .mouseButtonClick(0);
        }
      },
      'Donation Modal was dismissed');
  },
  closeBgClick() {
    return this
      .pause(1500)
      .waitForElementVisible('@modal', this.api.globals.waitForConditionTimeout)
      .verify.visible('@modal')
      .pause(1500)
      .moveToElement('body', 1, 1)
      .mouseButtonClick(0)
      .waitForElementNotPresent('@modal', this.api.globals.waitForConditionTimeout, 'Donation Modal was dismissed');
  },
  accept() {
    return this
      .pause(1500)
      .waitForElementVisible('@modal', this.api.globals.waitForConditionTimeout)
      .verify.containsText('@acceptBtn', 'Donate R5')
      .click('@acceptBtn')
      .pause(1500)
      .waitForElementNotPresent('@modal', this.api.globals.waitForConditionTimeout, (modal) => {
        if (modal.value.length > 0) {
          this.api
            .moveToElement('@acceptBtn', 1, 1)
            .pause(1500)
            .mouseButtonClick(0)
            .waitForElementNotPresent('@modal', this.api.globals.waitForConditionTimeout);
        }
      },
      'Donation Modal was dismissed');
  },
  tooltip() {
    return this
      .moveToElement('@tooltipIcon', 1, 1)
      .pause(1500)
      .waitForElementPresent('@tooltipPopup', this.api.globals.waitForConditionTimeout, 'tooltip was visible')
      .verify.visible('@tooltipPopup')
      .verify.attributeEquals('@donateCheckboxEl', 'checked', 'true');
  },
  checkboxDeselect() {
    return this
      .click('@donateCheckboxLabel')
      .expect.element('@donateCheckboxEl').to.not.have.attribute('checked');
  },
};

module.exports = {
  commands: [checkoutDonation],
  url() {
    return this.api.launchUrl + '/checkout';
  },
  elements: {
    modal: '.modal.donation',
    closeX: '.modal.donation button:first-of-type',
    noThanksBtn: '.modal.donation div.modal-footer button.button',
    acceptBtn: '.modal.donation .modal-content button.button',
    tooltipIcon: '.donation-section div.tooltip-wrapper.donation-tooltip',
    tooltipPopup: '[class^="tooltip top-end"]',
    donateCheckboxLabel: '.donation-section .checkbox-container label.checkbox',
    donateCheckboxEl: '.donation-section input[type="checkbox"]',
  },
};
