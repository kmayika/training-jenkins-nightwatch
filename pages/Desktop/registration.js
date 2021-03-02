/* eslint-disable max-len,no-plusplus */
const registerUser = {
  enterFirstname(FirstName) {
    return this
      .waitForElementVisible('@firstname', 10000)
      .clearValue('@firstname')
      .setValue('@firstname', FirstName);
  },
  firsnameError() {
    return this
      .click('@registerNowButton')
      .assert.visible('@firstnameError')
      .assert.containsText('@firstnameError', 'No First Name Specified');
  },
  enterSurname(surname) {
    return this
      .waitForElementVisible('@surname', 10000)
      .clearValue('@surname')
      .setValue('@surname', surname)
      .setValue('@surname', this.api.Keys.TAB);
  },
  surnameError() {
    return this
      .click('@registerNowButton')
      .assert.visible('@surnameError')
      .assert.containsText('@surnameError', 'No Last Name Specified');
  },
  enterEmail(email) {
    return this
      .waitForElementVisible('@email', 10000)
      .clearValue('@email')
      .setValue('@email', email);
  },
  enterConfirmEmail(email) {
    return this
      .waitForElementVisible('@email2', 10000)
      .clearValue('@email2')
      .setValue('@email2', email)
      .setValue('@email2', this.api.Keys.TAB);
  },
  emailNotSpecifiedError() {
    return this
      .enterEmail('')
      .click('@registerNowButton')
      .assert.visible('@emailNotSpecifiedError')
      .assert.containsText('@emailNotSpecifiedError', 'Please provide an email address');
  },
  emailNotValidError() {
    return this
      .click('@registerNowButton')
      .assert.visible('@emailNotValidError')
      .assert.containsText('@emailNotValidError', 'Invalid email address');
  },
  confirmEmail(confirmEmail) {
    return this
      .waitForElementVisible('@confirmEmail', 10000)
      .clearValue('@confirmEmail')
      .setValue('@confirmEmail', confirmEmail);
  },
  confirmEmailMismatchError() {
    return this
      .enterEmail('test')
      .assert.visible('@confirmEmailMismatchError')
      .assert.containsText('@confirmEmailMismatchError', "Email addresses don't match");
  },
  confirmEmailNotSpecifiedError() {
    return this
      .enterEmail('test')
      .assert.visible('@confirmEmailNotSpecifiedError')
      .assert.containsText('@confirmEmailNotSpecifiedError', 'Please provide an email address');
  },
  enterPassword(password) {
    return this
      .waitForElementVisible('@password', 10000)
      .clearValue('@password')
      .setValue('@password', password)
      .setValue('@password', this.api.Keys.TAB);
  },
  enterPasswordNotSpecifiedError() {
    return this
      .enterPassword('')
      .click('@registerNowButton')
      .assert.visible('@passwordNotSpecifiedError')
      .assert.containsText('@passwordNotSpecifiedError', 'Please provide a password');
  },
  enterPasswordTooShortError() {
    return this
      .assert.visible('@passwordTooShortError')
      .assert.containsText('@passwordTooShortError', 'Password must contain at least 5 characters');
  },
  confirmPassword(confirmPass) {
    return this
      .waitForElementVisible('@confirmPassword', 10000)
      .clearValue('@confirmPassword')
      .setValue('@confirmPassword', confirmPass);
  },
  confirmPasswordMismatchError() {
    return this
      .confirmPassword('test')
      // .click('@registerNowButton')
      .assert.visible('@confirmPasswordMismatchError')
      .assert.containsText('@confirmPasswordMismatchError', "Passwords don't match");
  },
  confirmPasswordNotSpecifiedError() {
    return this
      .enterPassword('test')
      // .click('@registerNowButton')
      .assert.visible('@confirmPasswordNotSpecifiedError')
      .assert.containsText('@confirmPasswordNotSpecifiedError', 'Please provide a password');
  },
  enterPhoneNumber(number) {
    return this
      .waitForElementVisible('@phoneNumber', 10000)
      .clearValue('@phoneNumber')
      .setValue('@phoneNumber', number)
      .setValue('@phoneNumber', this.api.Keys.TAB);
  },
  enterPhoneNumberNotSpecifiedError() {
    return this
      .enterPhoneNumber('')
      // .click('@registerNowButton')
      .assert.visible('@phoneNumberNotSpecifiedError')
      .assert.containsText('@phoneNumberNotSpecifiedError', 'No Mobile/Phone Number Specified');
  },
  enterPhoneNumberTooShortError() {
    return this
      // .click('@registerNowButton')
      .assert.visible('@phoneNumberTooShortError')
      .assert.containsText('@phoneNumberTooShortError', 'Mobile/Phone Number must be at least 10 digits');
  },
  selectDay() {
    return this
      .assert.visible('@day')
      .setValue('@day', 4);
  },
  selectMonth() {
    return this
      .assert.visible('@month')
      .setValue('@month', 1);
  },
  selectYear() {
    return this
      .assert.visible('@year')
      .setValue('@year', 1995);
  },
  submitRegister() {
    return this
      .assert.visible('@registerNowButton')
      .click('@registerNowButton');
  },
  /**
   * This method clicks on the "Register Now" button
   */
  clickRegisterNow() {
    return this
      .waitForElementVisible('@registerNowButton')
      .click('@registerNowButton');
  },
  /**
   * This method validates that the registeration was succesful
   */
  validateRegisteredSuccessfully() {
    return this
      .waitForElementVisible('@welcomeText', 10000)
      .assert.containsText('@welcomeText', 'Welcome to the TAKEALOT.com family!', '[STEP] -  User should be registered');
  },
};

const random = {
  email() {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < 8; i++) text += possible.charAt(Math.floor(Math.random() * possible.length));
    console.log(`Email: QA+0${text}@takealot.com`);
    return `QA+0${text}@takealot.com`;
  },
  password() {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < 16; i++) text += possible.charAt(Math.floor(Math.random() * possible.length));
    console.log(`password: ${text}`);
    return text;
  },
  number() {
    let number = '';
    const possible = '0123456789';

    for (let i = 0; i < 7; i++) number += possible.charAt(Math.floor(Math.random() * possible.length));

    return `083${number}`;
  },
};

const xSelector = selector => ({
  selector,
  locateStrategy: 'xpath',
});

module.exports = {
  commands: [registerUser, random],
  url() {
    return this.api.launchUrl;
  },
  elements: {
    firstname: '#firstname',
    firstnameError: '#first-name-not-specified',
    surname: '#surname',
    surnameError: '#surname-not-specified',
    email: '#email',
    email2: '#email',
    emailNotSpecifiedError: '#email-not-specified',
    emailNotValidError: '#invalid-email',
    confirmEmail: '#email2',
    confirmEmailMismatchError: '#emails-not-matching',
    confirmEmailNotSpecifiedError: '#email-not-specified',
    password: '#password',
    passwordNotSpecifiedError: '#no-password',
    passwordTooShortError: '#password-too-short',
    confirmPassword: '#password2',
    confirmPasswordMismatchError: '#passwords-not-matching',
    confirmPasswordNotSpecifiedError: '#no-password',
    phoneNumber: '#telno1',
    phoneNumberNotSpecifiedError: '#phone-number-not-specified',
    phoneNumberTooShortError: '#phone-number-too-short',
    day: '#day',
    month: '#month',
    year: '#year',
    registerNowButton: '.blue',
    hereLinkText: xSelector('(//a[contains(text(),"here")])[1]'),
    welcomeText: xSelector('(//h3[contains(text(),"Welcome")])[1]'),
  },
};
