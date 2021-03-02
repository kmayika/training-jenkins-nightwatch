const productReviews = {
  /**
   * This method validates that the "My Product Reviews" page is rendered.
   */
  validateProductReviewsPage() {
    return this
      .waitForElementVisible('@productRatingsTitle')
      .assert.containsText('@productRatingsTitle', 'Product Ratings')
      .waitForElementVisible('@productRatingsTable')
      .assert.visible('@productRatingsTable', 'Product Ratings table displayed');
  },
  /**
   * This method clicks on the "Title" in the Product Ratings table
   */
  clickProductTitle() {
    return this
      .waitForElementVisible('@productTitle')
      .click('@productTitle');
  },
  /**
   * This method clicks on the "Personal Details" link in "My Account" sidebar
   */
  clickPersonalDetails() {
    return this
      .waitForElementVisible('@personalDetailsMyAccountLink')
      .click('@personalDetailsMyAccountLink');
  },

};

const xSelector = selector => ({
  selector,
  locateStrategy: 'xpath',
});

module.exports = {
  commands: [productReviews],
  url() {
    return this.api.launchUrl;
  },
  elements: {
    productRatingsTitle: '.content h1',
    productRatingsTable: '.content table',
    productTitle: xSelector('(//td//a[contains(@href, "PLID")])[1]'),
    personalDetailsMyAccountLink: 'dl.cat-nav-side dd:nth-of-type(8)',
  },
};
