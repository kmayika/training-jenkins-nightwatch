const https = require('https');

const url = process.env.URL.toLowerCase();

/* eslint-disable func-names */
exports.command = function (status, product) {
  const client = this;
  const header = this.api.page.header();
  this
    .perform(() => {
      https.get(`http://tal-test-data-service.test-automation-platform.env/get_products/${status}/10`, (res) => {
        let data = '';

        res.on('data', (chunk) => {
          data += chunk;
        });

        res.on('end', () => {
          try {
            const { response } = JSON.parse(data);
            const url = this.api.globals.test_details.url;
            if (url === 'takealot.com') {
              this.api
                .url(`${this.api.globals.test_details.url}/${response.p}`)
                .waitForElementVisible('.buybox-actions .add-to-cart-button', this.globals.waitForConditionTimeout)
                .waitForElementVisible('.buybox-actions .add-to-cart-button', this.globals.waitForConditionTimeout)
                .click('.buybox-actions .add-to-cart-button')
                .waitForElementVisible('.buybox-actions .checkout-now', this.globals.waitForConditionTimeout);
            } else {
              header
                .search(product);
            }
          } catch (err) {
            console.log(err);
          }
        });
      });
    });

  return this;
};
