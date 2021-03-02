/* eslint-disable func-names */

/**
   * This method validates that the toast message pop up is displayed
   * @param {string} message The expected toast message
   */
exports.command = function (message) {
  this
    .waitForElementPresent('[class*="toast-content-module_toast-content"]', 10000, () => {}, '[STEP] - Toast Message should be displayed')
    .assert.visible('[class*="toast-content-module_toast-content"]')
    .moveToElement('[class*="toast-content-module_toast-content"]', 10, 10, () => {
      this
        .mouseButtonClick('middle', () => {
          this
            .getText('[class*="toast-content-module_toast-content"]', (res) => {
              this
                .assert.ok(res.value.toLowerCase().includes(message.toLowerCase()), `Actual Text - ${res.value}: Expected Text - ${message}`);
            });
        });
    });
  return this;
};
