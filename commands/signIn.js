/* eslint-disable no-underscore-dangle */
/* eslint-disable func-names */
/**
 * This method signs the user in
 */
exports.command = function (userName = null, passWord = null) {
  const login = this.page.login();
  // const mobiLogin = this.page.mobi_login();
  const { username, password } = this.globals.testContext();

  const _username = userName || username;
  const _password = passWord || password;
  this
    .perform(() => {
      this
        .url((res) => {
          if (res.value.toLowerCase().includes('//m.')) {
            mobiLogin
              .validateMobiLoginPage()
              .enterEmail(_username)
              .enterPassword(_password)
              .clickLogin();
          } else {
            login
              .validateLoginPage()
              .enterEmail(_username)
              .enterPassword(_password)
              .clickLogin();
          }
        });
    });
  return this;
};
