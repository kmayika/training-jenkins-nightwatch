/* eslint-disable eqeqeq */
/* eslint-disable no-plusplus */
/* eslint-disable consistent-return */
const { XMLHttpRequest } = require('xmlhttprequest');

function removeAllOccurrences(arr, val) {
  for (let index = 0; index < arr.length; index++) {
    if (Array.isArray(val)) {
      for (let i = 0; i < val.length; i++) {
        if (arr[index] == val[i]) {
          arr.splice(index, 1);
          // As the items are removed from the array the index still
          // increments and the next item after your matched value is skipped.
          // So decrement to start from last position
          index--;
        }
      }
    } else if (arr[index] == val) {
      arr.splice(index);
    }
  }
  return arr;
}

function getCustomerEmailByOrderStatus(orderStatus) {
  const request = new XMLHttpRequest();
  const lstCustomerId = [];
  request.open('GET', `http://tal-test-data-service.test-automation-platform.env/get_order_items_by_status/weekly_b55/${orderStatus}/20`, false); // `false` makes the request synchronous
  request.send(null);

  if (request.status === 200) {
    const response = JSON.parse(request.responseText);
    response.forEach((element) => {
      lstCustomerId.push(element.idCustomer);
    });
    const removeCustId = removeAllOccurrences(lstCustomerId, [1, 10628, 94938, 556585, 224079]); // remove all occurrences of 1
    const random = Math.floor(Math.random() * (removeCustId.length - 1) + 1);
    const idCustomer = removeCustId[random];
    request.open('GET', `http://tal-test-data-service.test-automation-platform.env/get_customer_email_address/${idCustomer}`, false); // `false` makes the request synchronous
    request.send(null);

    if (request.status === 200) {
      const response2 = JSON.parse(request.responseText);
      const email = response2[0].Email;
      console.log(`****************Email: ${email}*******************`);
      return email;
    }
  } else {
    console.log('FAILED TO CONNECT TO ENDPOINT');
  }
}
module.exports = {
  getCustomerEmailByOrderStatus,
};
