/* eslint-disable func-names */
const { XMLHttpRequest } = require('xmlhttprequest');
const customer = require('./getCustomerId');

// eslint-disable-next-line consistent-return
exports.command = function () {
  this
    .perform(() => {
      const request = new XMLHttpRequest();
      const url = 'http://tal-test-data-service.test-automation-platform.env/add_customer_wishlists';
      let body = '';
      const customerId = customer.getCustomerId(this);
      const nameSpace = process.env.URL;
      switch (process.env.URL) {
        case 'takealot.com':
          if (!process.env.JENKINS_URL) {
            body = {
              namespace: 'takealot',
              customer_id: 6098036,
              email: 'takealot.qa+2@gmail.com',
              password: 'Ryghof-vumbuf-2mabsy',
              count: 1,
            };
          } else {
            body = {
              namespace: 'takealot',
              customer_id: 5724347,
              email: 'takealot.qa+200@gmail.com',
              password: 'Ryghof-vumbuf-2mabsy',
              count: 1,
            };
          }
          break;
        default:
          body = {
            namespace: `${nameSpace.toLowerCase().substr(0, nameSpace.indexOf('.'))}`,
            customer_id: customerId,
            email: `${process.env.NW_USERNAME}`,
            password: 'test',
            count: 1,
          };
          break;
      }

      try {
        request.open('POST', url, false); // `false` makes the request synchronous
        request.send(JSON.stringify(body));

        if (request.status === 200) {
          const response = JSON.parse(request.responseText);
          console.log(`Wishlist Added\nResponse:${response}`);
          // client
          //   .pause(1000)
          //   .moveToElement('body', 10, 10, () => {
          //     client.mouseButtonClick(0);
          //   });
        // eslint-disable-next-line no-else-return
        } else {
        //   var response = JSON.parse(request.responseText);
          console.log('ERROR : Failed to create wish lists');
          console.log(`Response: ${request.responseText}`);
          // client
          //   .pause(1000)
          //   .moveToElement('body', 10, 10, () => {
          //     client.mouseButtonClick(0);
          //   });
        }
      } catch (error) {
        console.log(error);
        // client
        //   .pause(1000)
        //   .moveToElement('body', 10, 10, () => {
        //     client.mouseButtonClick(0);
        //   });
      }
    });
  return this;
};
