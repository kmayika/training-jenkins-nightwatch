exports.command = function (testMsg, confirmationMsg) {
  this
    .waitForElementVisible(
      '.Toastify__toast--success',
      5000,
      true,
      () => {},
      'Toast notification visible',
    )
    .assert.containsText(
      '.Toastify__toast--success > '
    + '.Toastify__toast-body > '
    + 'div > '
    + 'div',
      testMsg,
      confirmationMsg,
    );
  return this;
};
