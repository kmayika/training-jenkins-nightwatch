/* eslint-disable camelcase */
/* eslint-disable func-names */
const { XMLHttpRequest } = require('xmlhttprequest');

// eslint-disable-next-line consistent-return
const getCustomerId = (client = null) => {
  const request = new XMLHttpRequest();
  const namespace = process.env.URL;
  const { username, password } = client.globals.testContext();

  let url = '';
  if (namespace.toLowerCase().includes('takealot')) {
    url = `https://api.${namespace}/rest/v-1-9-0/customers/login`;
  } else {
    url = `http://api.${namespace}/rest/v-1-9-0/customers/login`;
  }
  const body = {
    email: `${username}`,
    password: `${password}`,
    remember_me: true,
  };
  try {
    request.open('POST', url, false); // `false` makes the request synchronous
    request.send(JSON.stringify(body));

    if (request.status === 200) {
      const resp = JSON.parse(request.responseText);
      const { customer_id } = resp.customer;
      console.log(`****customer_id:${customer_id}****`);
      // eslint-disable-next-line radix
      return parseInt(customer_id);
    // eslint-disable-next-line no-else-return
    } else {
    //   var response = JSON.parse(request.responseText);
      console.log('ERROR : Failed to get customer id');
      console.log(`Request Url: ${url}\nResponse: ${request.responseText}`);
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getCustomerId,
};
