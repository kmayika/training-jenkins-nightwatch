/* eslint-disable max-len */
const exchangeAndReturns = {
  /**
     * This method validates that the "Exchange and Return" page is rendered.
     */
  validateExchangeAndReturnsPage() {
    return this
      .waitForElementVisible('@myAccountBreadCrumbLink', 10000, (res) => {
        if (res.value) {
          this
            .pause(1000)
            .removePopUp()
            .assert.containsText('@myAccountBreadCrumbLink', 'My Account');
        } else {
          this
            .assert.ok(false, '[FAIL] - Something went wrong when validating Exchange And Returns page');
        }
      }, '[STEP] - Exchange And Returns page should be displayed');
  },
  /**
   * This method clicks on the "Log New" button
   */
  clickLogNew() {
    return this
      .waitForElementVisible('@logNewBtn')
      .click('@logNewBtn');
  },
  /**
   * This method validates that the returns page is rendered
   */
  validateReturnPage() {
    return this
      .waitForElementVisible('@ordersTable', 10000, (res) => {
        if (res.value) {
          this
            .pause(1000)
            .removePopUp()
            .assert.visible('@ordersTable', 'List of returnable orders displayed');
        } else {
          this
            .assert.ok(false, '[FAIL] - Something went wrong when validating Returns page');
        }
      }, '[STEP] - Returns page should be displayed');
  },
  /**
   * This method clicks on the "Return" button
   */
  clickReturn() {
    return this
      .waitForElementVisible('@returnBtn')
      .click('@returnBtn');
  },
  /**
   * This method validates that the "Exchange / Return Request" page is rendered
   */
  validateExchangeRequestPage() {
    return this
      .waitForElementVisible('@PageTitle', 10000, (res) => {
        if (res.value) {
          this
            .pause(1000)
            .removePopUp()
            .assert.containsText('@PageTitle', 'Exchange / Return Request');
        } else {
          this
            .assert.ok(false, '[FAIL] - Something went wrong when validating Exchange Request page');
        }
      }, '[STEP] - Exchange Request page should be displayed');
  },
  /**
   * This method enters the first name
   * @param {string} firstName The user's first name
   */
  enterFirstName(firstName) {
    return this
      .waitForElementVisible('@firstNameInputBox')
      .clearValue('@firstNameInputBox')
      .setValue('@firstNameInputBox', firstName);
  },
  /**
   * This method enters the last name
   * @param {string} lastName The user's last name
   */
  enterLastName(lastName) {
    return this
      .waitForElementVisible('@lastNameInputBox')
      .clearValue('@lastNameInputBox')
      .setValue('@lastNameInputBox', lastName);
  },
  /**
   * This method enters the mobileNumber
   * @param {string} mobileNumber The user's mobileNumber
   */
  enterMobileNumber(mobileNumber) {
    return this
      .waitForElementVisible('@mobileNumberInputBox')
      .clearValue('@mobileNumberInputBox')
      .setValue('@mobileNumberInputBox', mobileNumber);
  },
  /**
   * This method clicks on the "Submit Request" button
   */
  clickSubmitRequest() {
    return this
      .waitForElementVisible('@submitRequestBtn')
      .click('@submitRequestBtn');
  },
  /**
   * This method validates that the errors are displayed
   */
  validateFieldErrors() {
    return this
      .waitForElementVisible('@reasonForReturnError')
      .assert.containsText('@reasonForReturnError', 'Please select a return reason')
      .waitForElementVisible('@preferredActionError')
      .assert.containsText('@preferredActionError', 'Please select a preferred action')
      .waitForElementVisible('@firstNameError')
      .assert.containsText('@firstNameError', 'Please enter a first name')
      .waitForElementVisible('@lastNameError')
      .assert.containsText('@lastNameError', 'Please enter a last name')
      .waitForElementVisible('@contactNumberError')
      .assert.containsText('@contactNumberError', 'Please enter a 10-digit SA phone number without country code, spaces, or special characters');
  },
  /**
   * This method selects the "Please collect the item from my address" option
   */
  selectCollectFromMyAddress() {
    return this
      .waitForElementVisible('@collectFromMyAddressRadioBtn')
      .click('@collectFromMyAddressRadioBtn');
  },
  /**
   * This method clicks on the "Verify Address" link
   */
  clickVerifyAddress() {
    return this
      .waitForElementVisible('@verifyAddressLink')
      .click('@verifyAddressLink');
  },
  /**
   * This method selects the first option in the "Reason for return" drop down list
   */
  selectReasonForReturn() {
    return this
      .waitForElementVisible('@reasonForReturnDropDownList')
      .click('@reasonForReturnDropDownList')
      .setValue('@reasonForReturnDropDownList', 'T');
  },
  /**
   * This method enters the quantity of the items being returned
   * @param {number} quantity The quantity of the items being returned
   */
  enterQuantity(quantity) {
    return this
      .waitForElementVisible('@quantityInputBox')
      .setValue('@quantityInputBox', quantity);
  },
  /**
   * This method selects the first option in the "Preferred Action" drop down list
   */
  selectPreferredAction() {
    return this
      .waitForElementVisible('@preferredActionDropDown')
      .click('@preferredActionDropDown')
      .setValue('@preferredActionDropDown', 'R');
  },
  /**
   * This method validates that the request has been successfully submitted
   */
  validateSuccessfullySubmittedRequest() {
    return this
      .waitForElementVisible('@successBanner')
      .assert.containsText('@successBanner', 'Your request has been created successfully');
  },
  /**
   * This method selects the collection address
   */
  selectCollectionAddress() {
    return this
      .waitForElementVisible('@selectAddressRadioBtn')
      .click('@selectAddressRadioBtn');
  },
  /**
   * This method clicks on the "Cancel" link
   */
  clickCancel() {
    return this
      .waitForElementVisible('@cancelLink')
      .click('@cancelLink');
  },
  /**
   * This method clicks on the "Track Status" button
   */
  clickTrackStatus() {
    return this
      .waitForElementVisible('@trackStatusBtn')
      .click('@trackStatusBtn');
  },
  /**
   * This method validates that the "Exchange / Return History" page is rendered
   */
  validateExchangeReturnHistoryPage() {
    return this
      .waitForElementVisible('@PageTitle')
      .assert.containsText('@PageTitle', 'Exchange / Return History')
      .waitForElementVisible('@trackBtn')
      .assert.visible('@trackBtn');
  },
  /**
   * This method clicks on the Track button in the "Exchange / Return History" page
   */
  clickTrack() {
    return this
      .waitForElementVisible('@trackBtn')
      .click('@trackBtn');
  },
  validateTrackingDetailsPage() {
    return this
      .waitForElementVisible('@trackingDetailsPageTitle')
      .assert.containsText('@trackingDetailsPageTitle', 'Tracking Details')
      .waitForElementVisible('@trackingDetails')
      .assert.visible('@trackingDetails', 'Tracking Details Displayed')
      .waitForElementVisible('@trackingDetailsTable')
      .assert.visible('@trackingDetailsTable', 'Tracking Details Table Displayed');
  },
  /**
   * This method enters the Damage description in the "Please describe the defect or damage" text box
   * @param {string} description The damage description
   */
  enterDamageDescription(description) {
    return this
      .waitForElementVisible('@descritptionTextArea')
      .setValue('@descritptionTextArea', description);
  },
};

const xSelector = function (selector) {
  return {
    selector,
    locateStrategy: 'xpath',
  };
};
module.exports = {
  commands: [exchangeAndReturns],
  url() {
    return this.api.launchUrl;
  },
  elements: {
    myAccountBreadCrumbLink: '.breadcrumb li:first-child',
    logNewBtn: '.block-action a[href$="/returns"]',
    trackStatusBtn: '.block-action a[href$="/view-returns"]',
    returnPolicyLink: '.block-inner p a:first-child',
    helpPageLink: '.block-inner p a:last-child',
    ordersTable: '.frameless',
    returnBtn: xSelector('(//a[text()="Return"])[1]'),
    PageTitle: 'h1.covid19',
    orderIdLink: '#submitReturnForm  p:first-of-type a',
    productLink: '#submitReturnForm  p:last-of-type a',
    submitRequestBtn: '[name^="doReturnButton"]',
    cancelLink: '[name^="doReturnButton"] ~ a',
    reasonForReturnError: '#reason ~ .error',
    preferredActionError: '#preferred_action ~ .error',
    preferredActionDropDown: 'select#preferred_action',
    firstNameError: '#first_name ~ .error',
    lastNameError: '#last_name ~ .error',
    contactNumberError: '#contact_number ~ .error',
    lastNameInputBox: '#last_name',
    firstNameInputBox: '#first_name',
    mobileNumberInputBox: '#contact_number',
    collectFromMyAddressRadioBtn: 'span.method_collect input',
    verifyAddressLink: '#personalAddress table a',
    reasonForReturnDropDownList: 'select#reason',
    quantityInputBox: '#quantity',
    successBanner: '.inner-inner',
    selectAddressRadioBtn: xSelector('(//input[contains(@name,"address") and not(@disabled)])[1]'),
    trackBtn: '.frameless tr:nth-child(2) td:last-child a',
    trackingDetailsPageTitle: '.content h1',
    trackingDetails: '#details',
    trackingDetailsTable: '#table',
    descritptionTextArea: 'textarea#problem',
  },

};
