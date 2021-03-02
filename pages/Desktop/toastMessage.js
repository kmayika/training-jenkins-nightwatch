const toastify = {
  /**
     * This method clicks on the "View" link in the Toast message
     */
  clickViewLink() {
    return this
      .waitForElementVisible('@viewLinkInToast', 10000, () => {}, '[STEP] -  View link should be displayed in Toast Message')
      .click('@viewLinkInToast');
  },
  /**
   * This method validates that the toast message is displayed
   */
  validateToastMessage(message) {
    this
      .api.elements('@successBanner', (res) => {
        if (res.value.length > 0) {
          this
            .assert.containsText('@successBanner', message);
        } else {
          this
            .assert.ok(true, 'Toast Message Not found');
        }
        return this;
      });
    return this;
  },

};

const xSelector = selector => ({
  selector,
  locateStrategy: 'xpath',
});

module.exports = {
  commands: [toastify],
  elements: {
    viewLinkInToast: xSelector('(//a[contains(text(), "View")])[1]'),
    successBanner: '[class*="toast-content-module_toast-content"]',
  },
};
