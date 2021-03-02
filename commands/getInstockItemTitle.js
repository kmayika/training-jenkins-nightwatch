/* eslint-disable consistent-return */
const { XMLHttpRequest } = require('xmlhttprequest');
const { IN_STOCK_PRODUCTS } = require('../constants');

function getInstockItemTitle() {
  const request = new XMLHttpRequest();
  const url = 'http://tal-test-data-service.test-automation-platform.env/get_products/active/20';
  try {
    request.open('GET', url, false); // `false` makes the request synchronous
    request.send();
    let title = '';
    if (request.status === 200) {
      const response = JSON.parse(request.responseText);
      const random = Math.floor(Math.random() * response.length);
      console.log(random);
      title = response[random].Title;
      console.log(`${random} Search Title: ${title}`);
    } else {
      const response = JSON.parse(request.responseText);
      const randomSelect = Math.floor((Math.random() * IN_STOCK_PRODUCTS.length));
      console.log(`****Response:${response}****`);
      console.log('****FAILED TO GET PRODUCT FROM ENDPOINT, USING VALUES FROM constants.js FILE****');
      title = IN_STOCK_PRODUCTS[randomSelect];
    }
    return title;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getInstockItemTitle,
};
