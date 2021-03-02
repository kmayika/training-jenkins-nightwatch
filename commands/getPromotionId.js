/* eslint-disable consistent-return */
/* eslint-disable func-names */
const { XMLHttpRequest } = require('xmlhttprequest');
/**
 * This function returns a promotion ID
 */
function getPromotionId() {
  const request = new XMLHttpRequest();
  const url = 'http://tal-s4f-testing-service.test-automation-platform.env/get_promotion_products_by_promotion_type/5/10';

  try {
    request.open('GET', url, false); // `false` makes the request synchronous
    request.send();

    if (request.status === 200) {
      const response = JSON.parse(request.responseText);
      const random = Math.floor(Math.random() * response.info_list.length);
      // eslint-disable-next-line camelcase
      const { promotion_product } = response.info_list[random];

      console.log(`****Promotion Id: ${promotion_product.promotion_id}****`);
      return promotion_product.promotion_id;
    }
    console.log(`FAILED TO RETURN RESPONSE FROM: ${url} Response: ${request.responseText}`);
  } catch (error) {
    console.log(error);
  }
}
module.exports = {
  getPromotionId,
};
