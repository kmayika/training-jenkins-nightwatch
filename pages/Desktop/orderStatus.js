/* eslint-disable no-fallthrough */
const http = require('http');

const POM = {
  getAccountWithOrderInStatus(customer, status) {
    this
      .perform(() => {
        http.get(`http://tal-test-data-service.test-automation-platform.env/get_order_items_by_status/weekly_b55/${status}/2`, (res) => {
          let data = '';

          res.on('data', (chunk) => {
            data += chunk;
          });

          res.on('end', () => {
            try {
              const [response, response2] = JSON.parse(data);
              const header = this.api.page.header();
              const login = this.api.page.login();
              this
                .url(`${this.api.globals.test_details.url}`);
              header
                .validateHeader()
                .clickLogin();
              login
                .enterEmail(`dev+${customer}@take2.co.za`)
                .enterPassword('test')
                .clickLogin();
              this.api
                .url(`${this.api.globals.test_details.secure_url}/account/orders`);
              switch (status) {
                case 'shipped': // shipped
                  this
                    .waitForElementVisible('@orderEntry')
                    .assert.containsText('@text', 'NOT YET SHIPPED')
                    .click('@orderEntry');
                  break;
                case 'canceled':
                  this
                    .waitForElementVisible('@orderEntry')
                    .assert.containsText('@text', 'CANCELLED')
                    .click('@orderEntry');
                  break;
                case 'ready_to_ship':
                  this
                    .waitForElementVisible('@orderEntry')
                    .assert.containsText('@text', 'NOT YET SHIPPED')
                    .click('@orderEntry');
                  break;
                case 'on_hold':
                  this
                    .waitForElementVisible('@orderEntry')
                    .assert.visible('@orderEntry')
                    .assert.containsText('@text', 'NOT YET SHIPPED')
                    .click('@orderEntry');
                  break;
                case 'ordered_from_supplier':
                  this
                    .waitForElementVisible('@orderEntry')
                    .assert.containsText('@text', 'NOT YET READY')
                    .click('@orderEntry');
                  break;
                case 'pre_order':
                  this
                    .waitForElementVisible('@orderEntry')
                    .assert.containsText('@text', 'NOT YET SHIPPED')
                    .click('@orderEntry');
                  break;
                default:
                  console.log('status not set');
              }
            } catch (err) {
              console.log(`🚩 Could not read response from http://tal-test-data-service.test-automation-platform.env/get_order_items_by_status/weekly_b55/${status}/1`);
              console.log('🚩 Pop-ups may run rampant!');
              console.log(err);
            }
          });
        });
      });
    return this;
  },
};
module.exports = {
  commands: [POM],
  url() {
    return this.api.launchUrl;
  },
  elements: {
    orderEntry: '#wrapper [class*="OrderEntry_"]:nth-child(1)',
    text: '.notices div[class^="consignment-card-module_"]',
  },
};
