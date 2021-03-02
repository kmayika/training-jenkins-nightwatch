/* eslint-disable consistent-return */
const { XMLHttpRequest } = require('xmlhttprequest');

function getProductId(plid) {
  const request = new XMLHttpRequest();
  const url = `http://tal-test-data-service.test-automation-platform.env/get_productline_details/${plid}`;
  try {
    request.open('GET', url, false); // `false` makes the request synchronous
    request.send();

    if (request.status === 200) {
      const response = JSON.parse(request.responseText);
      if (response !== undefined) {
        const productId = response[0].sku_id;
        return productId;
      }
      return '81019895';
    }
    console.log(`FAILED TO RETURN RESPONSE FROM: ${url}`);
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getProductId,
};
