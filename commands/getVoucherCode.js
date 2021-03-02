/* eslint-disable vars-on-top */
/* eslint-disable no-var */
/* eslint-disable semi */
/* eslint-disable consistent-return */
const { XMLHttpRequest } = require('xmlhttprequest');
/**
 * This method gets a voucher code depending on the state. ['paid', 'not-paid', 'used', 'expired']
 * @param {string} state The state the voucher is in ['paid', 'not-paid', 'used', 'expired']
 */
function getVoucherCode(state) {
  const request = new XMLHttpRequest();
  const url = 'http://tal-test-data-service.test-automation-platform.env/execute_query_take2';
  var body = '';
  switch (state) {
    case 'paid':
      body = {
        host: 'weekly_b55',
        query: 'SELECT * FROM take2.vouchers where DateExpired = CURDATE() +1 and DateUsed is null and Paid like 1 limit 0,10',
      }
      break;
    case 'not-paid':
      body = {
        host: 'weekly_b55',
        query: "SELECT * FROM take2.vouchers where DateExpired like '%2020%' and DateUsed is null and Paid is null limit 0,10",
      }
      break;
    case 'used':
      body = {
        host: 'weekly_b55',
        query: "SELECT * FROM take2.vouchers where DateExpired like '%2020%' and DateUsed is not null and Paid like 1 limit 0,10",
      }
      break;
    case 'expired':
      body = {
        host: 'weekly_b55',
        query: "SELECT * FROM take2.vouchers where DateExpired like '%2020%' and DateUsed is not null and Paid like 1 limit 0,10",
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
      const voucherCode = response[random].VoucherCode;
      console.log(`Voucher Code used: ${voucherCode}`);
      return voucherCode;
    }
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getVoucherCode,
};
