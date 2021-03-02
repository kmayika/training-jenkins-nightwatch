const { XMLHttpRequest } = require('xmlhttprequest');

// eslint-disable-next-line consistent-return
function getCustomerWithCredits() {
  const request = new XMLHttpRequest();
  const url = 'http://tal-test-data-service.test-automation-platform.env/execute_query_take2';
  const body = {
    host: 'weekly_b55',
    query: "select * from take2.customers where Credit > 100000 and Email like '%dev%' order by idCustomer desc limit 20",
  };
  try {
    request.open('POST', url, false); // `false` makes the request synchronous
    request.send(JSON.stringify(body));

    if (request.status === 200) {
      const response = JSON.parse(request.responseText);
      const random = Math.floor(Math.random() * (response.length - 1));
      const { idCustomer } = response[random];
      if (idCustomer !== undefined) {
        console.log(`Customer Id: ${idCustomer}`);
        return idCustomer;
      }
      return '1001';
    }
    console.log(`FAILED TO RETURN RESPONSE FROM: ${url}`);
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getCustomerWithCredits,
};
