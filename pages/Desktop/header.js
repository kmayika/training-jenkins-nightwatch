/* eslint-disable no-undef */
/* eslint-disable eqeqeq */
// noinspection JSUnusedGlobalSymbols
const header = {
  clickLogin() {
    return this
      .waitForElementVisible('@loginBtn', 10000, (res) => {
        if (res.value === true) {
          this
            .click('@loginBtn', (result) => {
              if (result.status === undefined) {
                this
                  .api.execute((selector) => {
                    // eslint-disable-next-line no-undef
                    document.querySelector(selector).click();
                  }, [this.elements.loginBtn.selector]);
                // this
                //   .assert.ok(false, '[FAIL] - Something went wrong when clicking login in header');
              }
            });
        } else {
          this
            .assert.ok(false, '[FAIL] - Something went wrong when clicking login in header');
        }
      }, '[STEP] - Login link should be displayed and clicked');
  },
  clickCart() {
    return this
      .assert.visible('@cartBtn', 'Cart Icon found in header')
      .click('@cartBtn');
  },
  validateItemInCart(value) {
    this
      .waitForElementVisible('@cartBtn', 10000, () => {}, '[STEP] -  Item should be added to cart')
      .pause(2000)
      .getText('@cartBtn', (res) => {
        console.log(`Items in Cart ${res.value}`);
        console.log(`Expected Items ${value}`);
        const amount = res.value;
        this
          .assert.ok(amount >= value, '[STEP] -  Product should be added to cart. Cart should increment');
      });
    return this;
  },
  clickLogout() {
    this
      .waitForElementVisible('@myAccount', 10000, () => {
        this
          .api.elements('@logoutBtn', (res) => {
            if (res.value.length > 0) {
              console.log('User is Logged In');
              this
                .waitForElementVisible('@logoutBtn', 10000, () => {}, '[STEP] -  User should be logged out')
                .click('@logoutBtn');
            } else {
              this.assert.ok(true, 'User is not logged in');
            }
          });
      });
    return this;
  },
  validateHeader() {
    return this
      .assert.visible('@header');
  },
  selectSwiperItem(child) {
    return this
      .assert.visible(`@swiperItem:nth-child(${child})`)
      .click(`@swiperItem:nth-child(${child})`);
  },
  searchForItem(term, search) {
    this
      .assert.visible('@searchField')
      .setValue('@searchField', term)
      .assert.visible('@searchButton');
    if (search) {
      this.click('@searchButton');
    } else {
      this.pause(500);
    }
    return this;
  },
  searchSuggestionDepartment(index) {
    return this
      .assert.visible(`@searchAutoSuggestDepartment:nth-child(${index})`)
      .pause(500)
      .click(`@searchAutoSuggestDepartment:nth-child(${index})`);
  },
  selectFromDepartmentDropdown(index) {
    this
      .assert.visible('@searchDepartments')
      .click('@searchDepartments')
      .assert.visible('@searchDepartmentDrop')
      .click(`@searchDepartmentDrop:nth-child(${index})`);
    return this;
  },
  /**
   * This method clicks on the "My Account" dropdown
   */
  clickMyAccount() {
    return this
      .waitForElementVisible('@myAccount', 10000, () => {}, 'My Account link is found in the header')
      .click('@myAccount');
  },
  /**
   * This method clicks on the wishlist icon
   */
  clickWishlistIcon() {
    return this
      .waitForElementVisible('@wishListBtn')
      .assert.visible('@wishListBtn')
      .click('@wishListBtn');
  },
  /**
   * This method validates that the Wishlist counter Increments when an item/ list
   */
  validateWishlistCounterIconIncrement() {
    return this
      .waitForElementVisible('@wishlistCounter')
      .assert.visible('@wishlistCounter')
      .getText('@wishlistCounter', (text) => {
        this
          .assert.ok(text.value > 0, 'Item added to wishlist');
      });
  },
  /**
   * This method clicks on the Takealot Logo
   */
  clickTakealotLogo() {
    return this
      .waitForElementVisible('@takealotLogo', 10000, (res) => {
        if (res.value == true) {
          if (res.status !== undefined) {
            this
              .click('@takealotLogo');
          } else {
            this
              .api.execute((selector) => {
                document.querySelector(selector).click();
              }, [this.elements.takealotLogo.selector]);
          }
        } else {
          this
            .assert.ok(false, '[FAIL] - Something went wrong when clicking Takealot Logo in Header');
        }
      }, '[STEP] - Takealot logo should be displayed and clicked');
  },
  /**
   * This method clicks on the Register button in the header
   */
  clickRegister() {
    return this
      .waitForElementVisible('@registerBtn')
      .assert.visible('@registerBtn')
      .click('@registerBtn');
  },
  /**
   * This method enters the search term in the search input box
   * @param {string} searchTerm The search term
   */
  enterSearchTerm(searchTerm) {
    return this
      .waitForElementVisible('@searchInputBox', 30000, () => {}, '[STEP] -  Search Input Box should be found in header')
      .assert.visible('@searchInputBox', `***********Search Term ${searchTerm}***********`)
      .clearValue('@searchInputBox')
      .setValue('@searchInputBox', searchTerm)
      .setValue('@searchInputBox', this.api.Keys.ENTER);
  },
  /**
   * This method clicks on the "Sell on Takelot" link
   */
  clickSellOnTakealot() {
    return this
      .waitForElementVisible('@sellOnTakealot')
      .assert.visible('@sellOnTakealot')
      .click('@sellOnTakealot');
  },
  /**
   * This method clicks on the "Help" link
   */
  clickHelp() {
    return this
      .waitForElementVisible('@helpLink')
      .assert.visible('@helpLink')
      .click('@helpLink');
  },
  /**
   * This method validates that there is no item on cart.
   * i.e. Cart Icon counter is at zero "0"
   */
  validateNoItemOnCart() {
    this
      .waitForElementVisible('@cartIcon', () => {}, 'Cart Icon is displayed')
      .assert.containsText('@cartIconCounter', '0', 'Cart Count is at 0');
  },
  /**
   * This method clicks on the "Orders" link in the header
   */
  clickOrders() {
    return this
      .waitForElementVisible('@ordersLink', 10000, (res) => {
        if (res.value == true) {
          if (res.status !== undefined) {
            this
              .click('@ordersLink');
          } else {
            this
              .api.execute((selector) => {
                document.evaluate(selector, document, null,
                  XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click();
              }, [this.elements.ordersLink.selector]);
          }
        } else {
          this
            .assert.ok(false, '[FAIL] - Something went wrong when clicking Orders link in Header');
        }
      }, '[STEP] - Orders link should be displayed and clicked');
  },
};

const xSelector = selector => ({
  selector,
  locateStrategy: 'xpath',
});
module.exports = {
  commands: [header],
  url() {
    return this.api.launchUrl;
  },
  elements: {
    loginBtn: 'a[href*="/account/login"]',
    registerBtn: '.top-nav li a[href*="/account/register"]',
    myAccount: 'button[class^="my-account-dropdown"]',
    wishListBtn: 'a[href$="/wishlist"].icon-link',
    cartBtn: '.mini-cart-button .badge-count',
    header: '.top-nav [alt="Takealot"]',
    logoutBtn: xSelector('(//button[contains(text(),"Logout")]|//a[contains(text(), "Logout")])[1]'),
    searchField: 'header .header-main-strip form .search-field',
    searchAutoSuggestDepartment: '.result-wrapper ul li[class*="department"]',
    searchDepartments: 'header .header-main-strip form .department-dropdown select',
    searchDepartmentDrop: '.department-dropdown select option',
    searchButton: 'header .header-main-strip form .search-icon',
    swiperItem: 'header .header-main-strip .swiper-wrapper .swiper-slide',
    wishlistCounter: 'button[class*="top-nav-module_wishlist"] li:last-child',
    takealotLogo: '[class^="compact-header"] .cell:first-child a[href^="http"]',
    searchInputBox: '[class^="search-field "]',
    sellOnTakealot: '[class^="top-nav-module_header-links"] a[href$="/sell"]',
    helpLink: '.top-nav li a[href$="/help"]',
    cartIcon: '.mini-cart-button',
    cartIconCounter: '.mini-cart-button .badge-count',
    ordersLink: xSelector('(//a[contains(text(),"Orders")])[1]'),
  },
};
