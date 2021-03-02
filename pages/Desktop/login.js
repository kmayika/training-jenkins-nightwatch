/* eslint-disable no-undef */
// noinspection JSUnusedGlobalSymbols
const chalk = require('chalk');

const login = {
  /**
   * This method enters the user's email address
   * @param {string} email The user's email address
   */
  enterEmail(email) {
    this
      .waitForElementVisible('@email', 10000, () => {
        this
          .clearValue('@email', (res) => {
            if (res.status !== undefined) {
              this
                .setValue('@email', email);
            } else {
              this
                .api.execute((selector, userEmail) => {
                  document.querySelector(selector).value = '';
                  document.querySelector(selector).value = userEmail;
                }, [this.elements.email.selector, email]);
            }
          });
      }, `[STEP] -  Email Input field should be displayed and email "${email}" should be entered`);
    return this;
  },
  /**
   * This method enters the user's password
   * @param {string} password The user's password
   */
  enterPassword(password) {
    this
      .waitForElementVisible('@password', () => {
        this
          .clearValue('@password', (res) => {
            if (res.status !== undefined) {
              this
                .setValue('@password', password);
            } else {
              this
                .api.execute((selector, userPassword) => {
                  document.querySelector(selector).value = '';
                  document.querySelector(selector).value = userPassword;
                }, [this.elements.password.selector, password]);
            }
          });
      }, `[STEP] -  Password input field should be displayed and password "${password}" should be entered`);
    return this;
  },
  clickLogin() {
    return this
      .waitForElementVisible('@loginBut', (res) => {
        if (res.value == true) {
          this
            .click('@loginBut', (result) => {
              if (result.status === undefined) {
                this
                  .api.execute((selector) => {
                    // eslint-disable-next-line no-undef
                    document.querySelector(selector).click();
                  }, [this.elements.loginBut.selector]);
              }
            });
        } else {
          this
            .assert.ok(false, '[FAIL] - Something went wrong when clicking the login button');
        }
      }, '[STEP] -  Login Button should be found in Login page');
  },
  clickForgotPass() {
    return this
      .assert.visible('@forgotPasswordBtn')
      .click('@forgotPasswordBtn');
  },
  validateForgotPassRender(Title) {
    return this
      .assert.visible('@forgotPasswordTitle')
      .assert.value('@forgotPasswordTitle', Title);
  },
  validateForgoPassFld() {
    return this
      .assert.visible('@forgotPasswordFld');
  },
  validateEmailError(Msg) {
    return this
      .assert.visible('@emailError')
      .assert.containsText('@emailError', Msg);
  },
  /**
   * This method validates that the Login page is rendered
   */
  validateLoginPage() {
    return this
      .waitForElementVisible('@loginPageTitle', 10000, (res) => {
        if (res.value) {
          this
            .removePopUp()
            .assert.urlContains('/account/login', '[STEP] -  Login Page should be displayed');
        } else {
          this
            .assert.ok(false, '[FAIL] - Something went wrong when validating Login Page');
        }
      }, '[STEP] -  Page Title found in Login Page');
  },
};

const xSelector = selector => ({
  selector,
  locateStrategy: 'xpath',
});

module.exports = {
  commands: [login],
  url() {
    return this.api.launchUrl;
  },
  elements: {
    email: '#email',
    emailError: '#email-error',
    password: '#password',
    loginBut: '#loginForm > button',
    forgotPasswordBtn: 'a[href$="/account/forgot_password.php"]',
    forgotPasswordTitle: '.tal-welcome h1',
    forgotPasswordFld: '#email',
    loginPageTitle: xSelector('(//a[contains(text(),"Login")])[1]'),
  },
};
