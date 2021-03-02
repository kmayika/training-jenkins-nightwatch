exports.command = function (email, password) {
  this
    .clearValue('#email')
    .setValue('#email', email)
    .clearValue('#password')
    .setValue('#password', password)
    .click('#loginForm button.btn.blue.secured');
  return this;
};
