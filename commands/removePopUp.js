/* eslint-disable func-names */

exports.command = function () {
  this.perform(() => {
    this.isVisible({ selector: '[class*="modal-body"] [alt="Promotional popup"]', suppressNotFoundErrors: true, timeout: 5000 }, (isVisible) => {
      if (isVisible.value == true) {
        this
          .pause(5000);
        const browser = process.env.BROWSER;
        switch (browser.toLowerCase()) {
          case 'safari':
            this
              .execute((selector) => {
                console.log('Click to remove popup if any. Safari');
                // eslint-disable-next-line no-undef
                document.querySelector(selector).click();
              }, ['[class*="modal"] button[class*="close"]']);
            break;

          default:
            this
              .waitForElementVisible('[class*="modal"] button[class*="close"]')
              .click('[class*="modal"] button[class*="close"]', () => {
                console.log('Click to remove popup if any');
              });
            break;
        }
      }
    });
  });
  return this;
};
