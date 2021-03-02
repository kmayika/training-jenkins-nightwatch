/* eslint-disable func-names */
exports.command = function (url) {
  this
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
    .waitForElementVisible('.buybox-actions .add-to-cart-button', this.globals.waitForConditionTimeout)
    .click('.buybox-actions .add-to-cart-button')
    .waitForElementVisible('.buybox-actions .checkout-now', this.globals.waitForConditionTimeout);

  return this;
};
