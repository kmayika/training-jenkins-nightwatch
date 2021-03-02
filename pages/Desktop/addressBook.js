/* eslint-disable no-use-before-define,no-console,no-unused-vars */
// noinspection JSUnusedGlobalSymbols
const addressBook = {
  clickResidential() {
    return this
      .assert.visible('@residentialOptionRadioBtn')
      .click('@residentialOptionRadioBtn');
  },
  clickBusiness() {
    return this
      .click('@radioBusiness');
  },
  addAddress() {
    return this
      .waitForElementVisible('@addAddress')
      .click('@addAddress')
      .waitForElementPresent('@radioResidential');
  },
  /**
   * This method clicks on the "Add Address" button
   */
  clickAddAddress() {
    return this
      .waitForElementVisible('@addAddressBtn', 10000, () => {}, '[STEP] - "Add Address" button should be clicked')
      .click('@addAddressBtn');
  },
  /**
   * This method selects on of the address suggestions based on the street name
   */
  selectAddressSuggestion() {
    return this
      .assert.visible('@addressSuggestion')
      .click('@addressSuggestion')
      .pause(1000);
  },
  enterRecipientName(name) {
    return this
      .waitForElementVisible('@recipientName')
      .setValue('@recipientName', name);
  },
  enterRecipientNumber(number) {
    return this
      .waitForElementVisible('@recipientNumber')
      .setValue('@recipientNumber', number);
  },
  enterStreetAddress(address) {
    return this
      .waitForElementVisible('@streetAddress')
      .setValue('@streetAddress', address);
  },
  enterComplex(complex) {
    return this
      .waitForElementVisible('@complexName')
      .setValue('@complexName', complex);
  },
  enterSuburb(suburb) {
    return this
      .waitForElementVisible('@suburb')
      .setValue('@suburb', suburb);
  },
  enterCity(city) {
    return this
      .waitForElementVisible('@city')
      .setValue('@city', city);
  },
  enterProvince() {
    return this
      .waitForElementVisible('@province')
      .click('@province')
      .click('@provinceOpt');
  },
  /**
   * This method selects the province that the user resides in.
   * @param {string} province The name of the province where user resides
   */
  selectProvince(province) {
    return this
      .assert.visible('@provinceDropDown')
      .setValue('@provinceDropDown', province);
  },
  sendNullProvince() {
    return this
      .waitForElementVisible('@province')
      .click('@province');
  },
  enterPostalCode(code) {
    return this
      .waitForElementVisible('@postalCode')
      .setValue('@postalCode', code);
  },
  saveAddress() {
    return this
      .waitForElementVisible('@btn_save_address')
      .click('@btn_save_address');
  },
  /**
   * This method clicks "Save Address"
   */
  clickSaveAddress() {
    return this
      .waitForElementVisible('@saveAddressBtn')
      .click('@saveAddressBtn');
  },
  /**
   * This method validates if the Delivery Address page has a list of addresses
   */
  validateDeliveryAddressPage() {
    return this
      .waitForElementVisible('@addedAddressListSection', 10000, (res) => {
        if (res.value) {
          this
            .assert.visible('@addedAddressListSection');
        } else {
          this
            .assert.ok(false, '[FAIL] - Something wen wrong when validating the Delivery Address page');
        }
      }, '[STEP] - Delivery Page should be displayed');
  },
  /**
   * This method validates that the address suggestion panel is rendered
   */
  validateAddressBookSuggestionPanel() {
    return this
      .assert.visible('@addressSuggestionsPanel');
  },
  /**
   * This method clicks on the first address suggestion radio button
   */
  clickFirstAddressSuggestion() {
    return this
      .assert.visible('@firstAddressSuggestionRadioBtn')
      .click('@firstAddressSuggestionRadioBtn');
  },
  /**
   * This method validates that the map suggestion panel
   * is rendered when a user clicks on the suggested addresses
   */
  validateMapSuggestion() {
    return this
      .waitForElementVisible('@mapSectionOnSuggestion')
      .assert.visible('@mapSectionOnSuggestion');
  },
  /**
   * This method clicks on the "Confirm" button
   */
  clickConfirm() {
    // TODO: might not work on IE
    this
      .waitForElementVisible('@confirmBtn')
      .api
      .elements('@confirmBtn', () => {
        this
          .api
          .execute(() => {
            // eslint-disable-next-line no-undef
            document.querySelector('.panel-footer > button[class$="button "]').click();
          },);
      });
    return this;
  },
  /**
   * This method enters the Complex/Building name
   * @param {string} buildingName The users Complex/Building name
   */
  enterComplexBuildingName(buildingName) {
    return this
      .assert.visible('@complexBuildingInputBox')
      .setValue('@complexBuildingInputBox', buildingName);
  },
  /**
   * This method validates that the map suggestion section is rendered correctly
   */
  validateMapSuggestionSection() {
    return this
      .assert.visible('@mapSection');
  },
  /**
   * This method enters street address on map search input field
   * @param {string} streetAddress
   */
  enterStreetAddressOnMap(streetAddress) {
    return this
      .assert.visible('@searchOnMapInputBox')
      .setValue('@searchOnMapInputBox', streetAddress);
  },
  /**
   * This method zooms in on map
   */
  zoomInOnMap() {
    return this
      .assert.visible('@zoomInOnMapButton')
      .click('@zoomInOnMapButton');
  },
  /**
   * This method zooms out on map
   */
  zoomOutOnMap() {
    return this
      .assert.visible('@zoomOutOnMapButton')
      .click('@zoomOutOnMapButton');
  },
  /**
   * This method clicks on the "Use This Location" button
   */
  clickUseThisLocation() {
    this
      .waitForElementVisible('@useAddressBtn')
      .api
      .elements('@useAddressBtn', () => {
        this
          .api
          .execute(() => {
            // eslint-disable-next-line no-undef
            document.querySelector('[class$="use-address"]:nth-child(2)').click();
          });
      });
    return this;
  },
  /**
   * This method validates that the users new address has been saved into address book
   */
  validateAddressSaved() {
    return this
      .waitForElementVisible('@firstAddressInListRadioBtn', 10000)
      .assert.containsText('@savedAddressStreetName', 'Rua', '[STEP] - Address should be added to address book');
  },
  /**
   * This method validates that the address book is rendered correctly
   */
  validateAddressBookPage() {
    return this
      .waitForElementVisible('@addressBookTitle', 10000, (res) => {
        if (res.value == true) {
          this
            .assert.containsText('@addressBookTitle', 'Address Book');
        } else {
          this
            .assert.ok(false, '[FAIL] - Something went wrong when validating "Address Book" page');
        }
      }, '[STEP] - "Address Book" page should be displayed');
  },
  /**
   * This method clicks on the first address in the Address Book list of addresses
   */
  clickFirstAddress() {
    return this
      .waitForElementVisible('@firstAddressInListRadioBtn', 10000, () => {}, '[STEP] - First address radio Button should be clicked')
      .click('@firstAddressInListRadioBtn');
  },
  /**
   * This method clicks on the "Delete" link
   */
  clickDeleteLink() {
    this
      .waitForElementVisible('@deleteAddressLink')
      .api
      .elements('@deleteAddressLink', () => {
        this
          .api
          .execute(() => {
            // eslint-disable-next-line no-undef
            document.querySelector('.radio-select-container-wrapper label button:first-child').click();
          });
      });
    return this;
  },
  /**
   * This method validates if the "Delete Address" modal is rendered
   */
  validateDeleteAddressModal() {
    return this
      .assert.visible('@deleteAddressModal');
  },
  /**
   * This method clicks "Cancel" on the Delete Address Modal
   */
  clickCancelDelete() {
    return this
      .assert.visible('@deleteAddressModalCancelBtn')
      .click('@deleteAddressModalCancelBtn')
      .pause(1000);
  },
  /**
   * This method clicks "Delete" on the Delete Address Modal
   */
  clickDeleteAddress() {
    return this
      .assert.visible('@deleteAddressModalDeleteBtn')
      .click('@deleteAddressModalDeleteBtn');
  },
  /**
   * This method clicks on the "Edit" link
   */
  clickEditLink() {
    return this
      .assert.visible('@editAddressLink')
      .click('@editAddressLink');
  },
  /**
   * This method validates that the users last used delivery address is selected
   */
  validateLastDeliveryAddressSelected() {
    return this
      .waitForElementVisible('@firstAddressInListRadioBtn', 10000, () => {}, '[STEP] - First address radio button should be displayed')
      .assert.attributeContains('@firstAddressInListRadioBtn', 'class', 'on', '[STEP] - last used delivery address should be selected');
  },

  async deleteAddedAddress() {
    const val = await this.api
      .elements('xpath', "//div[contains(@class,'address-compact ')]");
    console.log(`Logs => ${
      JSON.stringify(val)}`);
  },
};


function getValueFromElements(browser, using, value, expected) {
  return new Promise(((resolve) => {
    browser
      .useXpath()
      .waitForElementVisible(value, 7000)
      .elements(using, value, (result) => {
        // eslint-disable-next-line guard-for-in,no-restricted-syntax
        for (const i in result.value) {
          // eslint-disable-next-line no-shadow
          this.elementIdAttribute(result.value[i].ELEMENT, 'textContent', (result) => {
            if (result.value === expected) {
              resolve(result.value);
            }
          });
        }
      });
  }));
}
// noinspection JSUnusedGlobalSymbols
const validate = {
  googleMapAddress(newAddress) {
    return this
      .waitForElementVisible('@googleMapSearchPanel', 5000)
      .waitForElementNotPresent('@autocomplete_suggestions', 1000)
      .setValue('@googleMapSearchPanel', newAddress)
      .waitForElementPresent('@autocomplete_suggestions', 5000)
      .assert.containsText('@autocomplete_suggestions', newAddress);
  },
  async createdAddress(browser, expectedRecipient, expectedStreetAdress, expectedContactNo) {
    const strActualRecip = await getValueFromElements(browser, 'xpath', "//*[@class='title']", expectedRecipient);
    const strActualAddr = await getValueFromElements(browser, 'xpath', "//*[@class='address']", expectedStreetAdress);
    const strActualCont = await getValueFromElements(browser, 'xpath', "//*[@class='telephone']", expectedContactNo);

    browser
      .assert.containsText(strActualRecip, expectedRecipient)
      .assert.containsText(strActualAddr, expectedStreetAdress)
      .assert.containsText(strActualCont, expectedContactNo);
  },
  validateFormFields() {
    return this
      .assert.containsText('@error_mobile_number', formTypicalErrors.error_mobile_number)
      .assert.containsText('@error_street_address', formTypicalErrors.error_street_address)
      .assert.containsText('@error_suburb', formTypicalErrors.error_suburb)
      .assert.containsText('@error_city', formTypicalErrors.error_city)
      .assert.containsText('@error_province', formTypicalErrors.error_province)
      .assert.containsText('@error_code', formTypicalErrors.error_code)
      .expect.element('#shopfront-app > main > div > div > section > div > div.cell > div > div > div:nth-child(2) > div:nth-child(11) > div > button.button.save-address.disabled').to.not.be.enabled;
  },
  onDelete() {

  },

};
let formTypicalErrors = {
  error_mobile_number: 'Please enter a 10-digit SA phone number without country code, spaces, or special characters',
  error_street_address: 'Please enter the street address',
  error_suburb: 'Please enter the suburb',
  error_city: 'Please enter the city',
  error_province: 'Please select a province',
  error_code: 'Please enter a postal code',
};

module.exports = {
  commands: [addressBook, validate],
  url() {
    return this.api.launchUrl;
  },
  elements: {
    // Checkout Delivery Addresses
    addAddress: '#addAddress',
    // added by kwezi
    addAddressBtn: '#addAddress',
    addressSuggestion: 'ul[class*="autocomplete-suggestions"] li:nth-child(1)',
    saveAddressBtn: 'button[class*="save-address"]',
    residentialOptionRadioBtn: '[for^="delivery-flow_address_type_residential"]',
    addressSuggestionsPanel: '[class^="address-suggestions"]',
    firstAddressSuggestionRadioBtn: '.radio-select-container-wrapper:first-child label[for*="suggestion"]',
    mapSectionOnSuggestion: '[class^="active-content"]',
    confirmBtn: '.panel-footer > button[class$="button "]',
    complexBuildingInputBox: '#delivery-flow_complex_details',
    provinceDropDown: '.input #delivery-flow_province',
    mapSection: 'section[class^="pin-on-map"]',
    searchOnMapInputBox: '[class^="map-container"] input[name*="address-autocomplete"]',
    zoomInOnMapButton: '[class^="map-container"] button[title*="Zoom in"]',
    zoomOutOnMapButton: '[class^="map-container"] button[title*="Zoom out"]',
    useAddressBtn: '[class$="use-address"]:nth-child(2)',
    firstAddressInListRadioBtn: '.radio-select-container-wrapper:nth-child(1) label[for*="address-list_undefined"]',
    savedAddressStreetName: '.radio-select-container-wrapper:nth-child(1) label[for*="address-list_undefined"] div.address-compact p.address',
    myAccountPanel: 'nav > [class*="account"]',
    addressBookTitle: 'h1[class*="address"]',
    deleteAddressLink: '.radio-select-container-wrapper label button:first-child',
    deleteAddressModal: '.modal-body',
    deleteAddressModalCancelBtn: '[class*="modal-footer"] > button:first-child',
    deleteAddressModalDeleteBtn: '[class*="modal-footer"] > button:last-child',
    editAddressLink: '.radio-select-container-wrapper label button:last-child',
    // Address Details
    radioResidential: '#delivery-flow_address_type_residential',
    radioBusiness: '#delivery-flow_address_type_business',
    recipientName: '#delivery-flow_recipient',
    recipientNumber: '#delivery-flow_contact_number',
    streetAddress: '#delivery-flow_street',
    streetAddressAuto: '#shopfront-app > main > div > section.auto.cell.main-section > div > div.cell > div > div > div:nth-child(2) > div:nth-child(4) > div > div > ul',
    complexName: '#delivery-flow_complex_details',
    suburb: '#delivery-flow_suburb',
    city: '#delivery-flow_city',
    province: '#delivery-flow_province',
    provinceOpt: '#delivery-flow_province > option:nth-child(10)',
    postalCode: '#delivery-flow_postal_code',
    // continue to next step
    btn_save_address: {
      selector: "//button[contains(@class,'button save-address')]",
      locateStrategy: 'xpath',
    },
    // single/multi addresses field for validation
    elem_recipientName: '#shopfront-app > main > div > div > section > div > div.cell > div > div:nth-child(2) > div > div > div:nth-child(2) > div > div > label > div.content.cell.auto > div > div > div > h4 > span.title',
    elem_streetAddress: '#shopfront-app > main > div > div > section > div > div.cell > div > div:nth-child(2) > div > div > div:nth-child(2) > div > div > label > div.content.cell.auto > div > div > div > p.address',
    elem_contactNo: '#shopfront-app > main > div > div > section > div > div.cell > div > div:nth-child(2) > div > div > div:nth-child(2) > div > div > label > div.content.cell.auto > div > div > div > p.telephone',
    elem_listOfAddressBooks: "//div[contains(@class,'address-compact ')]",
    title: {
      selector: "//span[@class='title']",
      locateStrategy: 'xpath',
    },
    googleMapSearchPanel: '#gmap_address-autocomplete"]',
    autocomplete_suggestions: '#shopfront-app > main > div > div > section > div > div.cell > section > div.map-container.grid-x > div > div > div:nth-child(2) > div > div.google-map-search > div > ul',
    error_mobile_number: '#shopfront-app > main > div > div > section > div > div.cell > div > div > div:nth-child(2) > div:nth-child(3) > div > div > div',
    error_street_address: '#shopfront-app > main > div > div > section > div > div.cell > div > div > div:nth-child(2) > div:nth-child(4) > div > div > div > div',
    error_suburb: '#shopfront-app > main > div > div > section > div > div.cell > div > div > div:nth-child(2) > div:nth-child(6) > div > div > div',
    error_city: '#shopfront-app > main > div > div > section > div > div.cell > div > div > div:nth-child(2) > div:nth-child(7) > div > div > div',
    error_province: '#shopfront-app > main > div > div > section > div > div.cell > div > div > div:nth-child(2) > div:nth-child(8) > div > div > div',
    error_code: '#shopfront-app > main > div > div > section > div > div.cell > div > div > div:nth-child(2) > div:nth-child(9) > div > div > div',
    addedAddressListSection: 'div[class*="address-list"]',
  },
};
