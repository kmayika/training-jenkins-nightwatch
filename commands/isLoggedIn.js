exports.command = function (isLogged) {
  if (isLogged) {
    this
      .url(`${this.api.globals.test_details.mobile_url}/account`)
      .waitForElementVisible('[data-gtm="Log Out"]');
  } else {
    this
      .url(`${this.api.globals.test_details.mobile_url}/account`)
      .waitForElementNotVisible('[data-gtm="Log Out"]');
  }
  return this;
};
