const { XMLHttpRequest } = require('xmlhttprequest');

// eslint-disable-next-line consistent-return
function createOrderForCustomer(idCustomer) {
  const request = new XMLHttpRequest();
  const url = 'http://tal-test-data-service.test-automation-platform.env/create_order';

  const body = {
    customer_id: idCustomer,
    email: `dev+${idCustomer}@take2.co.za`,
    password: 'test',
    remember_me: true,
    products: [
      {
        id: 10988023,
        quantity: 1,
      },
    ],
    addresses: [
      {
        address_type: 'residential',
        city: 'Cape Town',
        contact_number: '0820000000',
        suburb: 'Pinelands',
        street: '12 Ridge Way',
        postal_code: '7405',
        recipient: 'Test',
        province: 'Western Cape',
        latitude: -33.9379687,
        longitude: 18.5006588,
        verification_channel: 'DESKTOP',
      },
    ],
    shipping_method: 'delivery',
    shipping_plan: 'standard',
    platform: 'desktop',
    payment_method: 'Credit',
  };

  try {
    request.open('POST', url, false); // `false` makes the request synchronous
    request.send(JSON.stringify(body));

    if (request.status === 200) {
    //   const response = JSON.parse(request.responseText);
      console.log(`Order created for dev+${idCustomer}@take2.co.za`);
      return `dev+${idCustomer}@take2.co.za`;
    // eslint-disable-next-line no-else-return
    } else {
    //   var response = JSON.parse(request.responseText);
      console.log(`FAILED : RETURNED : ${request.responseText} with STATUS: ${request.status} `);
      return 'dev+1001@take2.co.za';
    }
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  createOrderForCustomer,
};
