/* eslint-disable max-len */
const personalDetails = {
  /**
     * This method validates that the user is in the "Personal Details" page
     */
  validatePersonalDetailsPage() {
    return this
      .waitForElementVisible('@personalDetailsTitle', () => {}, '[STEP] -  "Personal Details" should be displayed')
      .assert.containsText('@personalDetailsTitle', 'Personal Details')
      .waitForElementVisible('@personalDetailsSection')
      .assert.visible('@personalDetailsSection');
  },
  /**
   * This method clicks on the "Your Name" "Edit" button
   */
  clickEditYourName() {
    return this
      .waitForElementVisible('@editYourNameBtn', () => {}, '[STEP] -  Edit Your Name should be displayed')
      .click('@editYourNameBtn');
  },
  /**
   * This method clicks on the "Email Address" "Edit" button
   */
  clickEditEmailAddress() {
    return this
      .waitForElementVisible('@editEmailAddressBtn', () => {}, '[STEP] -  Edit Email should be displayed')
      .click('@editEmailAddressBtn');
  },
  /**
   * This method clicks on the "Password" "Reset" button
   */
  clickResetPassword() {
    return this
      .waitForElementVisible('@resetPasswordBtn', () => {}, '[STEP] -  Reset password should be displayed')
      .click('@resetPasswordBtn');
  },
  /**
   * This method clicks on the "Mobile Number" "Edit" button
   */
  clickEditMobileNumber() {
    return this
      .waitForElementVisible('@editMobileNumberBtn', () => {}, '[STEP] -  Edit Mobile Number should be displayed')
      .click('@editMobileNumberBtn');
  },
  /**
   * This method clicks on the "Business Details" "Edit" button
   */
  clickEditBusinessDetails() {
    return this
      .waitForElementVisible('@editBusinessDetailsBtn', () => {}, '[STEP] -  Edit Business Details should be displayed')
      .click('@editBusinessDetailsBtn');
  },
  /**
   * This method validates that the "Edit Your Name" form is rendered
   */
  validateEditYourNameForm() {
    return this
      .waitForElementVisible('@editYourNameForm', () => {}, '[STEP] -  Edit Your Name Form should be displayed')
      .assert.containsText('@editYourNameForm', 'Edit Your Name');
  },
  /**
   * This method enters the "First Name"
   * @param { string } firstName The user's first name
   */
  enterFirstName(firstName) {
    return this
      .waitForElementVisible('@firstNameTxtBox', () => {}, '[STEP] -  First Name Input box should be displayed')
      .clearValue('@firstNameTxtBox')
      .setValue('@firstNameTxtBox', firstName);
  },
  /**
   * This method enters the last name
   * @param {string} lastName The user's last name
   */
  enterLastName(lastName) {
    return this
      .waitForElementVisible('@lastNameTxtBox', () => {}, '[STEP] -  Last Name Input box should be displayed')
      .clearValue('@lastNameTxtBox')
      .setValue('@lastNameTxtBox', lastName);
  },
  /**
   * This method validates that the "Edit Your Name" form errors are rendered
   */
  validateEditYourNameErrors() {
    return this
      .waitForElementVisible('@firstNameError', () => {}, '[STEP] -  First Name Input box Error should be displayed')
      .assert.containsText('@firstNameError', 'Please enter your first name')
      .waitForElementVisible('@lastNameError', () => {}, '[STEP] -  Last Name Input box Error should be displayed')
      .assert.containsText('@lastNameError', 'Please enter your last name');
  },
  /**
   * This method validates that the user's last name and first name
   * have been changed succesfully.
   * @param {string} firstName The user's changed first name
   * @param {string} lastName The user's changed last name
   */
  validateSuccesfullyUpdatedName(firstName, lastName) {
    return this
      .waitForElementVisible('@successBanner', 10000)
      .assert.containsText('@successBanner', 'Your name has been successfully updated.')
      .waitForElementVisible('@newNameText')
      .assert.containsText('@newNameText', `${firstName} ${lastName}`);
  },
  /**
   * This method validates that the "Edit Email Address" form is rendered
   */
  validateEditEmailAddressForm() {
    return this
      .waitForElementVisible('@editEmailAddressForm')
      .assert.visible('@editEmailAddressForm')
      .waitForElementVisible('@newEmailAddressTxtBox')
      .assert.visible('@newEmailAddressTxtBox')
      .waitForElementVisible('@reEnterEmailAddressTxtBox')
      .assert.visible('@reEnterEmailAddressTxtBox')
      .waitForElementVisible('@currentTakealotPasswordTxtBox')
      .assert.visible('@currentTakealotPasswordTxtBox');
  },
  /**
   * This method enters the user's new email address
   * @param {string} email This is the user's new email address
   */
  enterNewEmailAddress(email) {
    return this
      .waitForElementVisible('@newEmailAddressTxtBox', () => {
        this
          .clearValue('@newEmailAddressTxtBox')
          .setValue('@newEmailAddressTxtBox', email);
      }, '[STEP] -  New Email Address Input box should be displayed and text entered');
  },
  /**
   * This method re-enters the user's new email address
   * @param {string} email This is the user's new email address
   */
  re_enterNewEmailAddress(email) {
    return this
      .waitForElementVisible('@reEnterEmailAddressTxtBox', () => {
        this
          .clearValue('@reEnterEmailAddressTxtBox')
          .setValue('@reEnterEmailAddressTxtBox', email);
      }, '[STEP] -  Re-enter New Email Address Input box should be displayed and text entered');
  },
  /**
   * This method enters the user's current Takealot password
   * @param {string} password This is the user's current Takealot password
   */
  enterCurrentTakealotPassword(password) {
    return this
      .waitForElementVisible('@currentTakealotPasswordTxtBox', () => {}, '[STEP] -  Current Takealot password Input box should be displayed')
      .clearValue('@currentTakealotPasswordTxtBox')
      .setValue('@currentTakealotPasswordTxtBox', password);
  },
  /**
   * This method clicks on the "Eye Icon"
   */
  clickEyeIcon() {
    return this
      .waitForElementVisible('@eyeIconBtn', () => {}, '[STEP] -  eye icon should be displayed')
      .click('@eyeIconBtn');
  },
  /**
   * This method validates that the password is unmasked after clicking "Eye Icon"
   */
  validatePasswordUnmasked() {
    return this
      .waitForElementVisible('@currentTakealotPasswordTxtBox')
      .assert.attributeContains('@currentTakealotPasswordTxtBox', 'type', 'text');
  },
  /**
   * This method validates that the "Incorrect Password" error is displayed.
   */
  validateIncorrectPasswordError() {
    return this
      .waitForElementVisible('@incorrectPasswordError')
      .assert.containsText('@incorrectPasswordError', 'Incorrect password');
  },
  /**
   * This method validates that the user's email
   * has been changed succesfully.
   * @param {string} email The user's changed email address
   */
  validateSuccesfullyUpdatedEmailAddress(email) {
    return this
      .waitForElementVisible('@successBanner')
      .assert.containsText('@successBanner', 'Your email address has been successfully updated.')
      .waitForElementVisible('@newEmailAddressTxt')
      .assert.containsText('@newEmailAddressTxt', `${email}`);
  },
  /**
   * This method validates that the "An account already exists.." error is displayed.
   */
  validateEmailAlreadyExistsError() {
    return this
      .waitForElementVisible('@emailAlreadyExistsError')
      .assert.containsText('@emailAlreadyExistsError', 'An account already exists');
  },
  /**
   * This method validates that the "Email addresses do not match" error is displayed.
   */
  validateEmailAddressDoNotMatchError() {
    return this
      .waitForElementVisible('@emailAddressDoNotMatchError')
      .assert.containsText('@emailAddressDoNotMatchError', 'Email addresses do not match');
  },
  /**
   * This method validates that the "Reset Password" form is rendered
   */
  validateResetPasswordForm() {
    return this
      .waitForElementVisible('@resetPasswordForm')
      .assert.visible('@resetPasswordForm')
      .waitForElementVisible('@takealotPasswordTxtBox')
      .assert.visible('@takealotPasswordTxtBox')
      .waitForElementVisible('@newPasswordTxtBox')
      .assert.visible('@newPasswordTxtBox')
      .waitForElementVisible('@reEnterNewPasswordTxtBox')
      .assert.visible('@reEnterNewPasswordTxtBox');
  },
  /**
   * This method enters the user's current Takealot password
   * on the "Reset Password" form
   * @param {string} password The user's current Takealot password
   */
  enterTakealotPassword(password) {
    return this
      .waitForElementVisible('@takealotPasswordTxtBox')
      .assert.visible('@takealotPasswordTxtBox')
      .clearValue('@takealotPasswordTxtBox')
      .setValue('@takealotPasswordTxtBox', password);
  },
  /**
   * This method enters the user's new password
   * @param {string} new_password The user's new password
   */
  enterNewPassword(newPassword) {
    return this
      .waitForElementVisible('@newPasswordTxtBox')
      .assert.visible('@newPasswordTxtBox')
      .clearValue('@newPasswordTxtBox')
      .setValue('@newPasswordTxtBox', newPassword);
  },
  /**
   * This method re-enters the user's new password
   * @param {string} new_password The user's new password
   */
  re_enterNewPassword(newPassword) {
    return this
      .waitForElementVisible('@reEnterNewPasswordTxtBox')
      .assert.visible('@reEnterNewPasswordTxtBox')
      .clearValue('@reEnterNewPasswordTxtBox')
      .setValue('@reEnterNewPasswordTxtBox', newPassword);
  },
  /**
   * This method clicks on the "Current Takealot Password" eye icon
   */
  clickCurrentPasswordEyeIcon() {
    return this
      .waitForElementVisible('@takealotPasswordEyeIconsBtn')
      .assert.visible('@takealotPasswordEyeIconsBtn')
      .click('@takealotPasswordEyeIconsBtn');
  },
  /**
   * This method validates that the "Current Password" is unmasked after
   * clicking eye icon
   */
  validateCurrentPasswordUnmasked() {
    return this
      .waitForElementVisible('@takealotPasswordTxtBox')
      .assert.attributeContains('@takealotPasswordTxtBox', 'type', 'text');
  },
  /**
   * This method clicks on the "New Password" eye icon
   */
  clickNewPasswordEyeIcon() {
    return this
      .waitForElementVisible('@newPasswordEyeIconBtn')
      .assert.visible('@newPasswordEyeIconBtn')
      .click('@newPasswordEyeIconBtn');
  },
  /**
   * This method validates that the "New Password" is unmasked after
   * clicking eye icon
   */
  validateNewPasswordUnmasked() {
    return this
      .waitForElementVisible('@newPasswordTxtBox')
      .assert.attributeContains('@newPasswordTxtBox', 'type', 'text');
  },
  /**
   * This method clicks on the "Re-enter New Password" eye icon
   */
  clickReEnterNewPasswordEyeIcon() {
    return this
      .waitForElementVisible('@reEnterNewPasswordIconBtn')
      .assert.visible('@reEnterNewPasswordIconBtn')
      .click('@reEnterNewPasswordIconBtn');
  },
  /**
   * This method validates that the "Current Password" is unmasked after
   * clicking eye icon
   */
  validateReEnterNewPasswordUnmasked() {
    return this
      .waitForElementVisible('@reEnterNewPasswordTxtBox')
      .assert.attributeContains('@reEnterNewPasswordTxtBox', 'type', 'text');
  },
  /**
   * This method validates that the "Passwords do not match" error is displayed
   */
  validatePasswordsDoNotMatchError() {
    return this
      .waitForElementVisible('@passwordsDoNotMatchError')
      .assert.containsText('@passwordsDoNotMatchError', 'Passwords do not match');
  },
  /**
   * This method validates that the "Password must be at least 5 characters long" error is displayed
   */
  validatePasswordTooShortError() {
    return this
      .waitForElementVisible('@passwordTooShortError')
      .assert.containsText('@passwordTooShortError', 'Password must be at least 5 characters long');
  },
  /**
   * This method validates that the "Incorrect password" error is displayed in the
   * "Reset Password" form
   */
  validateIncorrectCurrentPasswordError() {
    return this
      .waitForElementVisible('@incorrectCurrentPasswordError')
      .assert.containsText('@incorrectCurrentPasswordError', 'Incorrect password');
  },
  /**
   * This method validates that the user's password
   * has been changed succesfully.
   */
  validateSuccesfullyUpdatedPassword() {
    return this
      .waitForElementVisible('@successBanner')
      .assert.containsText('@successBanner', 'Your password has been successfully updated.');
  },
  /**
   * This method validates that the "Edit Mobile Number" form is rendered
   */
  validateEditMobileNumberForm() {
    return this
      .waitForElementVisible('@editMobileNumberForm')
      .assert.visible('@editMobileNumberForm')
      .waitForElementVisible('@countryCodeDropDown')
      .assert.visible('@countryCodeDropDown')
      .assert.containsText('@countryCodeDropDownZar', 'ZA (+27)')
      .waitForElementVisible('@mobileNumberTxtBox')
      .assert.visible('@mobileNumberTxtBox');
  },
  /**
   * This method enters the user's mobile number
   * @param {*} mobileNumber This is the user's mobile number
   */
  enterMobileNumber(mobileNumber) {
    return this
      .waitForElementVisible('@mobileNumberTxtBox')
      .assert.visible('@mobileNumberTxtBox')
      .clearValue('@mobileNumberTxtBox')
      .setValue('@mobileNumberTxtBox', mobileNumber);
  },
  /**
   * This method validates that the "Please enter a 9 or 10-digit SA mobile number" error is displayed in the
   * "Edit Mobile Number" form
   */
  validateSouthAfricanMobileNumberError() {
    return this
      .waitForElementVisible('@enterSouthAfricanMobileNumberError')
      .assert.containsText('@enterSouthAfricanMobileNumberError', 'Please enter a 9 or 10-digit SA mobile number');
  },
  /**
   * This method selects a country code on the drop down
   */
  selectCountryCode() {
    return this
      .waitForElementVisible('@countryCodeDropDown')
      .assert.visible('@countryCodeDropDown')
      .click('@countryCodeDropDown')
      .setValue('@countryCodeDropDown', 'E')
      .setValue('@countryCodeDropDown', this.api.Keys.ENTER);
  },
  /**
   * This method validates that the "Please enter a valid mobile number" error is displayed in the
   * "Edit Mobile Number" form
   */
  validateInvalidMobileNumberError() {
    return this
      .waitForElementVisible('@enterValidMobileNumberError')
      .assert.containsText('@enterValidMobileNumberError', 'Please enter a valid mobile number');
  },
  /**
   * This method validates that the user's mobile number
   * has been changed succesfully.
   */
  validateSuccesfullyUpdatedMobileNumber() {
    return this
      .waitForElementVisible('@successBanner')
      .assert.containsText('@successBanner', 'Your mobile number has been successfully updated.');
  },
  /**
   * This method validates that the "Edit Business Details" form is rendered
   */
  validateEditBusinessDetailsForm() {
    return this
      .waitForElementVisible('@editBusinessDetailsForm')
      .assert.visible('@editBusinessDetailsForm')
      .waitForElementVisible('@businessNameTxtBox')
      .assert.visible('@businessNameTxtBox')
      .waitForElementVisible('@vatNumberTxtBox')
      .assert.visible('@vatNumberTxtBox');
  },
  /**
   * This method enters the business name
   * @param {string} businessName The user's business name
   */
  enterBusinessName(businessName) {
    return this
      .waitForElementVisible('@businessNameTxtBox')
      .assert.visible('@businessNameTxtBox')
      .clearValue('@businessNameTxtBox')
      .setValue('@businessNameTxtBox', businessName);
  },
  /**
   * This method enters the user's VAT number
   * @param {string} vatNumber The user's VAT number
   */
  enterVatNumber(vatNumber) {
    return this
      .waitForElementVisible('@vatNumberTxtBox')
      .assert.visible('@vatNumberTxtBox')
      .clearValue('@vatNumberTxtBox')
      .setValue('@vatNumberTxtBox', vatNumber);
  },
  /**
   * This method validates that the user's business details
   * have been updated succesfully
   */
  validateSuccesfullyUpdatedBusinessDetails() {
    return this
      .waitForElementVisible('@successBanner')
      .assert.containsText('@successBanner', 'Your business details have been successfully updated.');
  },
  /**
   * This method clicks on the "Why add a mobile number?" link text
   */
  clickWhyAddMobileNumber() {
    return this
      .waitForElementVisible('@whyAddMobileNumberLinkTxt')
      .assert.visible('@whyAddMobileNumberLinkTxt')
      .click('@whyAddMobileNumberLinkTxt');
  },
  /**
   * This method validates that the modal is displayed
   */
  validateWhyAddMobileNumberModal() {
    return this
      .waitForElementVisible('@whyAddMobileNumberModal')
      .assert.containsText('@whyAddMobileNumberModal', 'Why add a mobile number?');
  },
  /**
   * This method clicks on the "X" on the "Why Add Mobile Number?" modal
   */
  clickCloseMobileNumberModal() {
    return this
      .waitForElementVisible('@whyAddMobileNumberModalCloseBtn')
      .assert.visible('@whyAddMobileNumberModalCloseBtn')
      .click('@whyAddMobileNumberModalCloseBtn');
  },
  /**
   * This method clicks on the "Add" btn next to Mobile Number
   */
  clickAddMobileNumber() {
    return this
      .waitForElementVisible('@addMobileNumberBtn')
      .assert.visible('@addMobileNumberBtn')
      .click('@addMobileNumberBtn');
  },
  /**
   * This method clicks on the "Why add business details?" link text
   */
  clickWhyAddBusinessDetails() {
    return this
      .waitForElementVisible('@whyAddBusinessDetailsLinkTxt')
      .assert.visible('@whyAddBusinessDetailsLinkTxt')
      .click('@whyAddBusinessDetailsLinkTxt');
  },
  /**
   * This method validates that the modal is displayed
   */
  validateWhyAddBusinessDetailsModal() {
    return this
      .waitForElementVisible('@whyAddBusinessDetailsModal')
      .assert.containsText('@whyAddBusinessDetailsModal', 'Why add business details?');
  },
  /**
   * This method clicks on the "X" on the "Why add business details?" modal
   */
  clickCloseBusinessDetailsModal() {
    return this
      .waitForElementVisible('@whyAddBusinessDetailsCloseBtn')
      .assert.visible('@whyAddBusinessDetailsCloseBtn')
      .click('@whyAddBusinessDetailsCloseBtn');
  },
  /**
   * This method clicks on the "Add" btn next to Business Details
   */
  clickAddBusinessDetails() {
    return this
      .waitForElementVisible('@addMobileNumberBtn')
      .assert.visible('@addMobileNumberBtn')
      .click('@addMobileNumberBtn');
  },
  /**
   * This method clicks on the "Save" button
   */
  clickSave() {
    return this
      .waitForElementVisible('@saveBtn')
      .assert.visible('@saveBtn')
      .click('@saveBtn');
  },
  /**
   * This method clicks on the "Cancel" button
   */
  clickCancel() {
    return this
      .waitForElementVisible('@cancelBtn')
      .assert.visible('@cancelBtn')
      .click('@cancelBtn');
  },


};

const xSelector = selector => ({
  selector,
  locateStrategy: 'xpath',
});

module.exports = {
  commands: [personalDetails],
  url() {
    return this.api.launchUrl;
  },
  elements: {
    personalDetailsTitle: 'h1[class^="personal-details-module_title"]',
    personalDetailsSection: '[class^="personal-details "]',
    editYourNameBtn: '[class^="name-toggle"] [class^="button "]',
    editEmailAddressBtn: '[class^="email-toggle"] [class^="button "]',
    resetPasswordBtn: '[class^="update-password-toggle"] [class^="button "]',
    editMobileNumberBtn: '[class^="mobile-toggle"] [class^="button "]',
    editBusinessDetailsBtn: '[class^="business-toggle"] [class^="button "]',
    editYourNameForm: 'section [class^="name-form "]',
    saveBtn: 'section button[class*="submit-button"]',
    cancelBtn: 'section button[class*="cancel-button"]',
    firstNameTxtBox: '#name_firstName',
    lastNameTxtBox: '#name_lastName',
    firstNameError: '.name_firstName [class="error"]',
    lastNameError: '.name_lastName [class="error"]',
    successBanner: '[class*="toast-content-module_toast-content"]',
    newNameText: '.name-toggle [class*="button-banner-title"] ~ div',
    editEmailAddressForm: 'section[class^="email-form"]',
    newEmailAddressTxtBox: '#email_newEmail',
    reEnterEmailAddressTxtBox: '#email_confirmEmail',
    currentTakealotPasswordTxtBox: '#email_password',
    eyeIconBtn: '[class^="unmask-icon"]',
    incorrectPasswordError: '[class*="email_password"] .error',
    emailAlreadyExistsError: '[class*="email_newEmail"] .error',
    emailAddressDoNotMatchError: '[class*="email_confirmEmail"] .error',
    newEmailAddressTxt: '.email-toggle [class*="button-banner-title"] ~ div',
    resetPasswordForm: 'section [class^="password-update-form "]',
    takealotPasswordTxtBox: '#password_password',
    newPasswordTxtBox: '#password_newPassword',
    reEnterNewPasswordTxtBox: '#password_confirmPassword',
    takealotPasswordEyeIconsBtn: '.password_password .unmask-icon',
    newPasswordEyeIconBtn: '.password_newPassword .unmask-icon',
    reEnterNewPasswordIconBtn: '.password_confirmPassword .unmask-icon',
    passwordsDoNotMatchError: '.password_confirmPassword .error',
    passwordTooShortError: '.password_newPassword .error',
    incorrectCurrentPasswordError: '.password_password .error',
    editMobileNumberForm: 'section[class^="mobile-number-form "]',
    countryCodeDropDown: '#mobile_mobileCountryCode',
    countryCodeDropDownZar: '#mobile_mobileCountryCode option:first-child',
    mobileNumberTxtBox: '#mobile_mobileNationalNumber',
    enterSouthAfricanMobileNumberError: '.mobile_mobileNationalNumber .error',
    enterValidMobileNumberError: '.mobile_mobileNationalNumber .error',
    editBusinessDetailsForm: 'section[class^="business-form "]',
    businessNameTxtBox: '#business_businessName',
    vatNumberTxtBox: '#business_vatNumber',
    whyAddMobileNumberLinkTxt: '[id^="Mobile "] [role^="button"]',
    whyAddMobileNumberModal: '[class^="modal-body "]',
    whyAddMobileNumberModalCloseBtn: 'button[class^="modal-module"]',
    addMobileNumberBtn: '[id^="Mobile "] [class^="button "]',
    whyAddBusinessDetailsLinkTxt: '[id^="Business "] [role^="button"]',
    whyAddBusinessDetailsModal: '[class^="modal-body "]',
    whyAddBusinessDetailsCloseBtn: 'button[class^="modal-module"]',
    addBusinessDetailsBtn: '[id^="Business "] [class^="button "]',


  },

};
