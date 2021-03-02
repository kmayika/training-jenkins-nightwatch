/* eslint-disable semi */
/* eslint-disable no-else-return */
/* eslint-disable consistent-return */
/* eslint-disable no-var */
const { XMLHttpRequest } = require('xmlhttprequest');

/**
 * This method gets a product depending on the state. ['low-stock', 'pre-order']
 * @param {string} state The state the product is in ['low-stock', 'pre-order']
 */
function getProductTitle(state) {
  const request = new XMLHttpRequest();
  const url = 'http://tal-test-data-service.test-automation-platform.env/execute_query_take2';
  var body = '';
  switch (state) {
    case 'pre-order':
      body = {
        host: 'weekly_b55',
        query: 'SELECT * FROM take2.products where DateReleased > CURDATE() and idType=2 limit 10',
      }
      break;
    case 'low-stock':
      body = {
        host: 'weekly_b55',
        query: 'SELECT * FROM take2.products where Active = 1 and qtyInStock < 3 and qtyInStock > 0 and idType <> 1 limit 10',
      }
      break;
    default:
      body = '';
      break;
  }
  try {
    request.open('POST', url, false); // `false` makes the request synchronous
    request.send(JSON.stringify(body));

    if (request.status === 200) {
      const response = JSON.parse(request.responseText);
      const random = Math.floor(Math.random() * (response.length - 1) + 1);
      const title = response[random].Title;
      console.log(`Search Title: ${title}`);
      return title;
    } else {
      console.log(`FAILED TO RETURN RESPONSE FROM: ${url} Response: ${request.responseText}`);
    }
  } catch (error) {
    console.log(error);
  }
}
module.exports = {
  getProductTitle,
};
