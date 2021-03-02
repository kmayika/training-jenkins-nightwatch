/* eslint-disable func-names */
const { XMLHttpRequest } = require('xmlhttprequest');
const customer = require('./getCustomerId');
const { PLATFORM_ENDPOINTS } = require('../constants');

// eslint-disable-next-line consistent-return
exports.command = function () {
  this.perform(() => {
    const request = new XMLHttpRequest();
    const url = PLATFORM_ENDPOINTS.remove_products_in_cart;
    let body = '';
    const { username, password } = this.globals.testContext();
    let customerId;
    // switch (process.env.URL) {
    //   case 'takealot.com':
    //     if (!process.env.JENKINS_URL) {
    //       customerId = 6098036;
    //     } else if (process.env.JOB_NAME.endsWith('Critical')) {
    //       customerId = 6268815;
    //     } else {
    //       customerId = 5724347;
    //     }

    //     body = {
    //       env: 'takealot.com',
    //       customer_id: `${customerId}`,
    //       email: `${process.env.USERNAME}`,
    //       password: 'Ryghof-vumbuf-2mabsy',
    //     };
    //     break;
    //   default:
    customerId = customer.getCustomerId(this);

    body = {
      env: `${process.env.URL}`,
      customer_id: `${customerId}`,
      email: `${username}`,
      password: `${password}`,
    };
    // break;
    // }

    try {
      request.open('POST', url, false); // `false` makes the request synchronous
      request.send(JSON.stringify(body));
      if (request.status === 200) {
      //   const response = JSON.parse(request.responseText);
        console.log('Pre-condition: Cart has been cleared');
      // eslint-disable-next-line no-else-return
      } else {
      //   var response = JSON.parse(request.responseText);
        console.log('ERROR Pre-condition not met: Failed to clear cart');
        console.log(`Response: ${request.responseText}`);
      }
    } catch (error) {
      console.log(error);
    }
  });
  return this;
};
