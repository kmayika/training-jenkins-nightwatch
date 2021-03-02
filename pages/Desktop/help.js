const help = {
  /**
     * This method validates that the "Help" page is rendered
     */
  validateHelpPage() {
    return this
      .waitForElementVisible('@helpHeaderSection', 10000, () => {}, '[STEP] -  Help Header Title should be displayed')
      .assert.urlContains('/help', '[STEP] -  User should be in Help/FAQ page');
  },
  /**
   * This method clicks on "Deliver" on the FAQ list
   */
  clickDelivery() {
    return this
      .waitForElementVisible('@deliveryTopic')
      .assert.visible('@deliveryTopic')
      .click('@deliveryTopic');
  },
  /**
   * This method clicks on the first topic item
   */
  clickTopicItem() {
    return this
      .waitForElementVisible('@deliveryTopicItem')
      .assert.visible('@deliveryTopicItem')
      .click('@deliveryTopicItem');
  },
  /**
   * This method validates that the form contain "Yes" and "No" buttons
   */
  validateButtonsOnForm() {
    return this
      .waitForElementVisible('@faqForm')
      .assert.visible('@faqForm', 'Form is loaded')
      .waitForElementVisible('@noBtn')
      .assert.containsText('@noBtn', 'No')
      .waitForElementVisible('@yesBtn')
      .assert.containsText('@yesBtn', 'Yes');
  },
  /**
   * This method enters the searchTopic on the "Help" page
   * @param {string} searchTopic
   */
  enterSearch(searchTopic) {
    return this
      .waitForElementVisible('@searchInputBox')
      .assert.visible('@searchInputBox')
      .clearValue('@searchInputBox')
      .setValue('@searchInputBox', searchTopic)
      .setValue('@searchInputBox', this.api.Keys.ENTER);
  },
  /**
   * This method clicks on the "View Orders" button
   */
  clickViewOrders() {
    return this
      .waitForElementVisible('@viewOrdersBtn')
      .assert.visible('@viewOrdersBtn')
      .click('@viewOrdersBtn');
  },
  /**
   * This method validates that the "Search Results" list is displayed
   */
  validateSearchResultList() {
    return this
      .waitForElementVisible('@searchResultsList')
      .assert.visible('@searchResultsList', 'Search results displayed');
  },
  /**
   * This method selects the first item in the "Search Result" list
   */
  selectSearchResultItem() {
    return this
      .waitForElementVisible('@searchResultItem')
      .click('@searchResultItem');
  },
  /**
   * This method validates that the selected topic's form is displayed
   */
  validateTopicPageForm() {
    return this
      .waitForElementVisible('@topicForm')
      .assert.visible('@topicForm', 'Delivery Topic Form is displayed');
  },
  /**
   * This method clicks on the "Yes" button in the Topic Form
   */
  clickYes() {
    return this
      .waitForElementVisible('@topicFormYesBtn')
      .click('@topicFormYesBtn');
  },
  /**
   * This method clicks on the "No" button in the Topic Form
   */
  clickNo() {
    return this
      .waitForElementVisible('@topicFormNoBtn')
      .click('@topicFormNoBtn');
  },
  /**
   * This method validates that the "Great. Glad we could help." text is displayed
   */
  validateGladWeCouldHelpText() {
    return this
      .waitForElementVisible('@gladWeCouldHelpText')
      .assert.containsText('@gladWeCouldHelpText', 'Great. Glad we could help.');
  },
  /**
   * This method validates that the Contact Form is displayed
   */
  validateContactForm() {
    return this
      .waitForElementVisible('@contactForm')
      .assert.visible('@contactForm', 'Contact form is displayed');
  },
};

const xSelector = selector => ({
  selector,
  locateStrategy: 'xpath',
});
module.exports = {
  commands: [help],
  url() {
    return this.api.launchUrl;
  },
  elements: {
    helpHeaderSection: xSelector('(//h1[contains(text(),"When will I get my order")])[1]'),
    helpHeaderSectionText: xSelector('(//h1[contains(text(),"When will I get my order")])[1]'),
    faqBanner: '.search-container',
    faqBannerTitle: '.search-container h1',
    faqTopicList: '#topics',
    deliveryTopic: '#topics [id="0"]',
    deliveryTopicItem: '#topics [id="0"] [data-id="00"]',
    yesBtn: '[id="0"] [data-id="00"] #yes',
    noBtn: '[id="0"] [data-id="00"] #no',
    faqForm: '[id="0"] [data-id="00"] .sub-top-content',
    searchInputBox: '#search-lookup-field',
    viewOrdersBtn: '.white-button',
    searchResultsList: '#filter-records',
    searchResultItem: '#filter-records a:first-child',
    topicForm: '.topic-block .topic-item:first-of-type',
    topicFormYesBtn: '.topic-item:first-of-type .active #yes',
    topicFormNoBtn: '.topic-item:first-of-type .active #no',
    gladWeCouldHelpText: '.topic-item:first-of-type .active .thankyou p',
    contactForm: 'form#help-form',
  },
};
