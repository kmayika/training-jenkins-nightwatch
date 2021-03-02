/* eslint-disable func-names */
exports.command = function (url) {
  this
    .url(url)
    .waitForElementVisible(
      'body',
      5000,
      true,
      () => {},
      `${url} loaded the homepage`
    );

  return this;
};
