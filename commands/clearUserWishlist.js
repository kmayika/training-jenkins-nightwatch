/* eslint-disable func-names */
const { XMLHttpRequest } = require('xmlhttprequest');
const customer = require('./getCustomerId');
const { PLATFORM_ENDPOINTS } = require('../constants');

// eslint-disable-next-line consistent-return
exports.command = function () {
  this
    .perform(() => {
      const request = new XMLHttpRequest();
      const url = PLATFORM_ENDPOINTS.delete_customer_wishlists;
      let body = '';
      const customerId = customer.getCustomerId(this);
      const nameSpace = process.env.URL;
      switch (process.env.URL) {
        case 'takealot.com':
          if (!process.env.JENKINS_URL) {
            body = {
              namespace: 'takealot',
              customer_id: 6098036,
              email: `${process.env.NW_USERNAME}`,
              password: 'Ryghof-vumbuf-2mabsy',
            };
          } else {
            body = {
              namespace: 'takealot',
              customer_id: 5724347,
              email: `${process.env.NW_USERNAME}`,
              password: 'Ryghof-vumbuf-2mabsy',
            };
          }
          break;
        default:
          body = {
            namespace: `${nameSpace.toLowerCase().substr(0, nameSpace.indexOf('.'))}`,
            customer_id: customerId,
            email: `${process.env.NW_USERNAME}`,
            password: 'test',
          };
          break;
      }

      try {
        request.open('POST', url, false); // `false` makes the request synchronous
        request.send(JSON.stringify(body));

        if (request.status === 200) {
        //   const response = JSON.parse(request.responseText);
          console.log('Wishlist Cleared');
        // eslint-disable-next-line no-else-return
        } else {
        //   var response = JSON.parse(request.responseText);
          console.log('ERROR : Failed to clear wish lists');
          console.log(`Response: ${request.responseText}`);
        }
      } catch (error) {
        console.log(error);
      }
    });
  return this;
};
