// noinspection JSUnusedGlobalSymbols
const listings = {
  validateProductListingPage() {
    return this
      .waitForElementVisible('@productListing')
      .assert.urlContains('all?', '[STEP] -  Product Listing Page should be displayed');
  },
  validateProductResult(prodNumber, product) {
    return this
      .assert.containsText(`@product${prodNumber}`, product);
  },
  validatePLPLoaded() {
    this
      .waitForElementVisible('@productCard', 10000)
      .assert.visible('@productCard', '[STEP] -  Product Card should be displayed')
      .api.elements('@productCard', (res) => {
        if (res.value.length > 3) {
          this
            .waitForElementVisible('@searchItems', () => {}, '[STEP] -  Number of items should be displayed');
          // .assert.urlContains('all?', '[STEP] -  Product Listing Page should be displayed');
        } else {
          console.log('Product Listings Page not displayed');
        }
      });
    return this;
  },
  clickValidProduct() {
    return this
      .assert.visible('@productListingImg', 'Product Image is displayed')
      .click('@productListingImg');
  },
  clickPageNext() {
    return this
      .assert.visible('@paginationNext')
      .click('@paginationNext');
  },
  clickPagePrev() {
    return this
      .assert.visible('@paginationPrev')
      .click('@paginationPrev');
  },
  checkPageNumber(number) {
    return this
      .assert.visible('@paginationCurrent')
      .assert.containsText('@paginationCurrent', number);
  },
  filterByDepartment() {
    this
      // .assert.visible('@DepartmentFacet')
      .getText('@DepartmentFacet', (title) => {
        console.log(title.value);
        this
          .click('@DepartmentFacet')
          .assert.visible('@filterText')
          .assert.containsText('@filterText', title.value)
          .assert.visible('@removeFilter')
          .click('@removeFilter');
      });
    return this;
  },
  filterBy(selector) {
    this
      .getText(selector, (title) => {
        this
          .click(selector)
          .assert.visible('@filterText')
          .assert.containsText('@filterText', title.value)
          .assert.visible('@removeFilter')
          .click('@removeFilter');
      });
    return this;
  },
  errorMessageValidation(text) {
    this
      .assert.visible('@productListError')
      .assert.containsText('@productListError', text);
  },
  /**
   * This method clicks on a Pre-Order product in the Product Listing Page
   */
  clickPreOrderProduct() {
    return this
      .waitForElementVisible('@preOrderItem', 10000, () => {}, '[STEP] -  Pre-order product should be displayed')
      .click('@preOrderItem');
  },
  /**
   * This method clicks on a Blu-ray product in the Product Listing Page
   */
  clickBluRayProduct() {
    return this
      .waitForElementVisible('@bluRayItem', 10000, () => {}, '[STEP] -  Blu-ray product should be displayed')
      .click('@bluRayItem');
  },
  /**
   * This method clicks on a product that is sold by a seller
   */
  clickSellerProduct() {
    return this
      .waitForElementVisible('@soldByItem')
      .click('@soldByItem');
  },
  /**
   * This method validates that the Seller page is displayed
   */
  validateSellerPage() {
    return this
      .assert.urlContains('/seller/', '[STEP] -  Seller page should be displayed');
  },
  /**
   * This method clicks on the "More Colours" button in product
   */
  clickMoreColours() {
    return this
      .waitForElementVisible('@colourVariantProduct', () => {}, '[STEP] -  More Colours should be displayed')
      .click('@colourVariantProduct');
  },
  /**
   * This method clicks on a product with a slashed price in the product listing page
   */
  clickSlashedPriceProduct() {
    return this
      .waitForElementVisible('@slashedPriceProduct')
      .click('@slashedPriceProduct');
  },
  /**
   * This method clicks on an unboxed deal product in the product listing page
   */
  clickUnboxedDealProduct() {
    return this
      .waitForElementVisible('@unboxedDealProduct')
      .click('@unboxedDealProduct');
  },
  /**
   * This method clicks on the "Fulfilled by Takealot" link
   */
  clickFulfilledByTakealot() {
    return this
      .waitForElementVisible('@fulfilledByTakealotLinkTxt', () => {}, '[STEP] -  "Fulfilled by Takealot" link is displayed')
      .click('@fulfilledByTakealotLinkTxt');
  },
  /**
   * This method validates that the "Fulfilled by Takealot" modal is displayed
   */
  validateFulfilledByTakealotModal() {
    return this
      .waitForElementVisible('@fulfilledByTakealotModal', () => {}, '[STEP] -  "Fulfilled by Takealot" modal should be displayed')
      .assert.containsText('@fulfilledByTakealotModal', 'Product sold by trusted Seller');
  },
  /**
   * This method clicks on the "new (2 offers)" link in the plp item.
   */
  clickOtherOffersProduct() {
    return this
      .waitForElementVisible('@moreBuyingChoices')
      .click('@moreBuyingChoices');
  },
};

const xSelector = selector => ({
  selector,
  locateStrategy: 'xpath',
});

module.exports = {
  commands: [listings],
  url() {
    return this.api.launchUrl;
  },
  elements: {
    productListError: '.product-listings > p',
    productListing: '.product-list .result-item',
    addToCart: xSelector('(//input[contains(@value,"Add to cart")])[1]'),
    addToWishlist: xSelector('(//input[contains(@value,"Add to wish list")])[1]'),
    productListingImg: xSelector('(//input[contains(@value,"Add to cart")])[1]//ancestor::li//img'),
    DepartmentFacet: '.side-widget:nth-of-type(2) li:first-of-type a',
    BrandFacet: '.side-widget:nth-of-type(5) li:first-of-type a',
    AvailabilityFacet: '.side-widget:nth-of-type(3) li:first-of-type a',
    PriceFacet: '.side-widget:nth-of-type(4) li:first-of-type a',
    RatingFacet: '.side-widget:nth-of-type(6) li:first-of-type a',
    filterText: '.side-widget li:nth-child(1) span span span:nth-child(2)',
    removeFilter: '.side-widget li:nth-child(1) .close',
    relatedSearch: '.listing-filters:first-of-type .related-search-link:first-of-type',
    paginationNext: '.listing-filters:first-of-type [data-reactid*="page-next"]',
    paginationPrev: '.listing-filters:first-of-type [data-reactid*="page-prev"]',
    paginationCurrent: '.listing-filters:first-of-type .page-current',
    paginationFirst: '.listing-filters:first-of-type [data-reactid*="page-first"]',
    preOrderItem: xSelector('((//*[contains(text(),"Pre-order")])[1]//ancestor::div[contains(@class,"listing-card")])[1]'),
    bluRayItem: xSelector('(//a[contains(text(),"(Blu-ray)")])[1]'),
    soldByItem: xSelector('(//span[contains(text(),"Sold by")])[1]//parent::span//preceding-sibling::p//a'),
    colourVariantProduct: xSelector('(//span[@class ="morecolours-text"])[1]'),
    slashedPriceProduct: xSelector('(//div[contains(@class,"listing-card-module_list-price")]//span[contains(@class,"currency")])[1]'),
    unboxedDealProduct: xSelector('(//a[contains(text(),"unboxed")])[1]'),
    fulfilledByTakealotLinkTxt: xSelector('(//a[contains(text(),"Fulfilled by Takealot")])[1]'),
    fulfilledByTakealotModal: '[class*="fancybox-inner"] #fulfilled-by-takealot',
    moreBuyingChoices: xSelector('(//p[contains(text(),"More Buying Choices")])[1]//parent::div//a[text()="new"]'),
    searchItems: xSelector('(//span[contains(text(),"Items")])[1]'),
    productCard: 'li[class=result-item]',
  },
};
