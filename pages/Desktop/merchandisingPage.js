const merchandising = {
  // /**
  //    * This method validates that the Merchandising page is rendered
  //    */
  // validateMerchandisingPage() {
  //   return this
  //     .waitForElementVisible('@navigationBar')
  //     .assert.visible('@navigationBar', 'Navigation Bar is displayed')
  //     .waitForElementVisible('@promoSlideShow')
  //     .assert.visible('@promoSlideShow', 'Promo Banner displayed')
  //     .waitForElementVisible('@popularBrandsWidgets')
  //     .assert.visible('@popularBrandsWidgets', 'Popular Brands Widget displayed')
  //     .waitForElementVisible('@popularBrandsWidgetsTitle')
  //     .assert.containsText('@popularBrandsWidgetsTitle', 'Popular Brands');
  // },
  /**
   * This method validates that the "Merchandising" page is rendered
   */
  validateMerchandisingPage() {
    this
      .waitForElementVisible('@merchandisingPageTitle')
      .assert.visible('@merchandisingPageTitle', '[STEP] -  Merchandising Title should be displayed in page')
      .api.url((res) => {
        this
          .assert.urlContains(res.value, `Step: Url Should be ${res.value}`);
      });
    return this;
  },
  /**
   * This method clicks on the "View More" link
   */
  clickViewMore() {
    return this
      .waitForElementVisible('@viewMoreLink')
      .click('@viewMoreLink');
  },
  /**
   * This methid validates that the department "Product Listing" is displayed
   */
  validateProductList() {
    return this
      .waitForElementVisible('@productList')
      .assert.visible('@productList', 'Product Listings displayed')
      .waitForElementVisible('@productListItem')
      .assert.visible('@productListItem');
  },
  /**
   * This method clicks on the promo banner
   */
  clickPromoBanner() {
    this
      .waitForElementVisible('@promoBannerPagination', 10000, (res) => {
        if (res.value) {
          this
            .api.execute(() => {
            // eslint-disable-next-line no-undef
              document.evaluate('(//a[contains(@href,"all?")])[1]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click();
            });
        } else {
          this
            .click('@promoBanner');
        }
      });
    return this;
  },
  /**
   * This method clicks on the first item in the Popular Brands Banner
   */
  clickBrand() {
    this
      .api.execute((selector) => {
        // eslint-disable-next-line no-undef
        document.evaluate(selector, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click();
      }, ['(//div[contains(@class,"brand-logo-module")]//a)[1]']);
    return this;
    //   .waitForElementVisible('@popularBrandsWidgetItem')
    //   .click('@popularBrandsWidgetItem');
  },
  /**
   * This method validates that the Description is displayed at the bottom of the page
   */
  validatePageDescription() {
    return this
      .waitForElementVisible('@decsriptionModule')
      .assert.visible('@decsriptionModule', 'Descpription Displayed')
      .waitForElementVisible('@decsriptionModuleSubTitle')
      .assert.containsText('@decsriptionModuleSubTitle', 'Buy at Takealot.com');
  },
  /**
   * This method clicks on the first promo slide button
   */
  clickFirstPromoSlideSlideIcon() {
    return this
      .waitForElementVisible('@firstPromoSlide')
      .click('@firstPromoSlide');
  },
};

const xSelector = selector => ({
  selector,
  locateStrategy: 'xpath',
});

module.exports = {
  commands: [merchandising],
  elements: {
    navigationBar: '#react-navigation-bar',
    popularBrandsWidgets: '.brands-row',
    popularBrandsWidgetItem: '.brands-row ul:first-of-type li:nth-child(4)',
    popularBrandsWidgetsTitle: '.brands-row h2',
    viewMoreLink: xSelector('(//a[contains(text(),"View More")])[1]'),
    productList: '.product-list',
    productListItem: '.product-list li:first-of-type',
    promoSlideShow: '.panel:first-of-type .slot-container',
    decsriptionModule: 'div.seo-content',
    decsriptionModuleSubTitle: 'div.seo-content h2',
    merchandisingPageTitle: 'h1[class*="merch-title-module_title"]',
    firstPromoSlide: xSelector('(//label[text()=0])[1]'),
    promoBannerPagination: xSelector('(//a[contains(@href,"all?")])[1]'),
    promoBanner: xSelector('(//div[@class="adunitContainer"])[1]'),
  },
};
