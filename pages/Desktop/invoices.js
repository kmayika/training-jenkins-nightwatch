const chalk = require('chalk');

const invoices = {
  /**
     * This method validates that the Invoices page is rendered correctly
    */
  validateInvoicesPage() {
    return this
      .assert.urlContains('/account/invoices')
      .waitForElementVisible('@invoicesHeading')
      .assert.containsText('@invoicesHeading', 'Invoices')
      .waitForElementVisible('@myAccountSidebar')
      .waitForElementVisible('@invoicesPanel')
      .assert.visible('@invoicesPanel', chalk`{green ✔} User is now in the Invoice Page`);
  },
  /**
   * This method validates that the Invoices Item table is rendered
   */
  validateInvoicesItems() {
    return this
      .waitForElementVisible('@invoicesListTable')
      .assert.visible('@invoicesListTable', chalk`{green ✔} Invoices Item table is rendered`)
  },

};

module.exports = {
  commands: [invoices],
  url() {
    return this.api.launchUrl;
  },
  elements: {
    invoicesPanel: '[class^="content"]',
    invoicesHeading: '[class^="content"] h1',
    myAccountSidebar: '[class^="sidebar"]',
    invoicesListTable: '.content table',
  },
};
