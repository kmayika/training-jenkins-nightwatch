const dashboard = {
  /**
       * This method validates that the Account Dashboard is rendered correctly.
      */
  validateAccountDashboardPage() {
    return this
      .pause(1000)
      .waitForElementVisible('@accountSection', 10000, () => {}, '[STEP] -  User should be in Dashboard')
      .assert.visible('@accountSection', 'User is on dashboard page');
  },
  // #region Orders
  /**
     * This method clicks on the "Orders" link
     */
  clickOrders() {
    return this
      .waitForElementVisible('@ordersLink', 10000, () => {}, '[STEP] -  Orders link should be found in dashboard')
      .click('@ordersLink');
  },
  /**
     * This method clicks on the "Invoices" link
     */
  clickInvoices() {
    return this
      .waitForElementVisible('@invoicesLink')
      .click('@invoicesLink');
  },
  /**
     * This method clicks on the "Exchange & Returns" link
     */
  clickExchangeAndReturns() {
    return this
      .waitForElementVisible('@exchangeAndReturnsLink')
      .click('@exchangeAndReturnsLink');
  },
  /**
     * This method clicks on the "My Product Reviews" link
     */
  clickMyProductReviews() {
    return this
      .waitForElementVisible('@myProductReviewsLink')
      .click('@myProductReviewsLink');
  },
  // #endregion
  // #region Payments & Credits
  /**
   * This method clicks on the "My Credits" link
   */
  clickMyCredits() {
    return this
      .waitForElementVisible('@myCreditsLink')
      .click('@myCreditsLink');
  },
  /**
   * This method clicks on the "Apply a Gift Voucher Code" link
   */
  clickApplyGiftVoucherCode() {
    return this
      .waitForElementVisible('@applyVoucherCodeLink')
      .click('@applyVoucherCodeLink');
  },
  // #endregion
  // #region Digital Library
  /**
   * This method clicks on the "eBook Digital Library" link
   */
  clickEBookDigitalLibrary() {
    return this
      .waitForElementVisible('@eBookDigitalLibraryLink')
      .click('@eBookDigitalLibraryLink');
  },
  /**
   * This method clicks on the "eBook Support" link
   */
  clickEBookSupport() {
    return this
      .waitForElementVisible('@eBookSupport')
      .click('@eBookSupport');
  },
  // #endregion
  // #region Customer Information
  /**
   * This method clicks on the "Personal Details" link
   */
  clickPersonalDetails() {
    return this
      .waitForElementVisible('@personalDetailsLink', 10000, () => {}, '[STEP] -  Personal Details link should be found in account dashboard')
      .click('@personalDetailsLink');
  },
  /**
   * This method clicks on the "Address Book" link
   */
  clickAddressBook() {
    return this
      .waitForElementVisible('@addressBookLink')
      .click('@addressBookLink');
  },
  /**
   * This method clicks on the "Newsletter Subscriptions" link
   */
  clickNewsletterSubscriptions() {
    return this
      .waitForElementVisible('@newsLetterSubscriptionsLink')
      .click('@newsLetterSubscriptionsLink');
  },

  // #endregion
  // #region Wish List
  /**
   * This method clicks on the "My Wish List" link
   */
  clickMyWishList() {
    return this
      .waitForElementVisible('@myWishListLink')
      .click('@myWishListLink');
  },
  /**
   * This method clicks on the "Create a New Wish List" link
   */
  clickCreateNewWishList() {
    return this
      .waitForElementVisible('@createNewWishListLink')
      .click('@createNewWishListLink');
  },
  // #endregion

};

module.exports = {
  commands: [dashboard],
  url() {
    return this.api.launchUrl;
  },
  elements: {
    accountSection: 'section[class*="account"]',
    ordersLink: 'a[href$="/orders"]',
    invoicesLink: 'section a[href$="/invoices"]',
    exchangeAndReturnsLink: 'section a[href$="/exchanges-returns"]',
    myProductReviewsLink: 'section a[href$="/ratings"]',
    myCreditsLink: 'section a[href$="/credits"]',
    applyVoucherCodeLink: 'section a[href$="/voucher"]',
    eBookDigitalLibraryLink: 'section a[href$="/digital-library"]',
    eBookSupport: 'section a[href$="/help"]',
    personalDetailsLink: 'a[href$="/personal-details"]',
    addressBookLink: 'section a[href$="/address-book"]',
    newsLetterSubscriptionsLink: 'section a[href$="/newsletters"]',
    myWishListLink: 'section li:first-child a[href*="/wishlist"]',
    createNewWishListLink: 'section li:last-child a[href*="/wishlist"]',

  },

};
