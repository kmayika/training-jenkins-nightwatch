/* eslint-disable func-names */
const { XMLHttpRequest } = require('xmlhttprequest');
const customer = require('./getCustomerId');
const { PLATFORM_ENDPOINTS } = require('../constants');

// eslint-disable-next-line consistent-return
exports.command = function () {
  this.perform(() => {
    const xhr = new XMLHttpRequest();
    // const request = new XMLHttpRequest();
    const url = PLATFORM_ENDPOINTS.clear_customer_wishlists;
    const customerId = customer.getCustomerId(this);
    const nameSpace = process.env.URL;

    const body = {
      namespace: `${nameSpace.toLowerCase().substr(0, nameSpace.indexOf('.'))}`,
      customer_id: customerId,
      email: `${process.env.NW_USERNAME}`,
      password: `${process.env.NW_PASSWORD}`,
    };
    xhr.open('POST', url, true);
    xhr.onload = function (e) {
      console.log(xhr.readyState);
      if (xhr.readyState === 4) {
        console.log(xhr.status);
        if (xhr.status === 200) {
          console.log('****SUCCESFULLY CLEARED WISHLIST ITEMS****');
        } else {
          console.error(`Request Url: ${url}\nBody: ${JSON.stringify(body, null, 4)}\nResponse: ${xhr.responseText}`);
        }
      }
    };
    xhr.onerror = function (e) {
      console.error(xhr.statusText, e);
    };
    xhr.send(`${body}`);
    return this;
  });
};
