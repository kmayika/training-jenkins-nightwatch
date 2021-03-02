/* eslint-disable no-undef */
/* eslint-disable func-names */
/* eslint-disable max-len */
// noinspection JSUnusedGlobalSymbols
const homepage = {
  enterPassword(password) {
    return this
      .assert.visible('@password')
      .setValue('@password', password);
  },
  clickLogin() {
    return this
      .assert.visible('@loginBut')
      .click('@loginBut');
  },
  validateMessageBarTxt(Msg) {
    return this
      .assert.visible('@messageBar')
      .assert.containsText('@messageBar', Msg);
  },
  isHeaderVisible() {
    return this
      .assert.visible('@header');
  },
  isPromotionalBannerVisible() {
    return this
      .assert.visible('@promotionBanner');
  },
  isMerchandiseVisible() {
    return this
      .assert.visible('@merchandisingContent');
  },
  isPrimaryNavVisible() {
    return this
      .assert.visible('@primaryNavMenu');
  },
  isFooterVisible() {
    return this
      .assert.visible('@footer');
  },
  navToPromotions() {
    this.api.elements('@promoNavMenu', (res) => {
      const optionsLength = Math.floor((Math.random(1, 3) * res.value.length) + 1);
      this.api.assert.visible(`.sub-cat-wrap.round_3.right .topnav:nth-child(${optionsLength})`);
      this.api.getAttribute(`.sub-cat-wrap.round_3.right .topnav:nth-child(${optionsLength}) a`, 'href', (redirect) => {
        this.api.click(`.sub-cat-wrap.round_3.right .topnav:nth-child(${optionsLength})`);
        this.api.url((url) => {
          this.api.assert.equal(redirect.value, url.value);
        });
      });
    });
  },
  navToOnTabDailyDeal() {
    return this
      .url(this.api.globals.data.url())
      .assert.visible('@onTabDailyDeals')
      .getAttribute('@onTabDailyDeals', 'href', (homePageURL) => {
        this.api.click('@onTabDailyDeals');
        this.api.url((url) => {
          this.api.assert.equal(homePageURL.value, url.value);
        });
      });
  },
  navToWheresMyOrder() {
    return this
      .url(this.api.globals.data.url())
      .assert.visible('@wheresMyOrder')
      .click('@wheresMyOrder');
  },
  /**
   * This method clicks on the green "Daily Deals" button in Primary Nav Menu
   */
  clickDailyDealsBtnInDropdown() {
    return this
      .assert.visible('@dailyDealsBtnInDropdown')
      .click('@dailyDealsBtnInDropdown');
  },
  clickDailyDealsBtnInNavBar() {
    return this
      .assert.visible('@dailyDealsBtnInNavBar')
      .click('@dailyDealsBtnInNavBar');
  },
  clickDailyDealsBtnInFooter() {
    return this
      .assert.visible('@dailyDealsBtnInFooter')
      .click('@dailyDealsBtnInFooter');
  },
  /**
   * This method validates that the Home page is rendered
   */
  validateHomePage() {
    this
      .waitForElementVisible('@homePageHeader', 10000, () => {}, '[STEP] -  Home page should be rendered')
      .assert.visible('@homePageHeader')
      .removePopUp();
    return this;
  },
  /**
   * This method clicks on the first product in the home page
   */
  clickFirstItem() {
    return this
      .waitForElementVisible('@firstItemInList')
      .assert.visible('@firstItemInList')
      .click('@firstItemInList');
  },
  /**
   * This method clicks on the first item in the Promo Tab
   */
  clickPromoTabItem() {
    return this
      .waitForElementVisible('@promoTabItem')
      .click('@promoTabItem');
  },
  /**
   * This method clicks on the "View More" button
   */
  clickViewMore() {
    this
      .waitForElementVisible('@viewMoreBtn', 10000, (res) => {
        if (res.value) {
          this
            .api.execute((selector) => {
              document.evaluate(selector, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click();
            }, ['(//a[contains(@class,"product-strip-view-more-button") and contains(@href,"all?")])[1]']);
        } else {
          this
            .assert.ok(false, '[FAIL] - Something went wrong when clicking on the "View More" button');
        }
      }, '[STEP] - "View More" button should be displayed and clicked');
    return this;
  },
  /**
   * This method clicks on the "Where's my order?" link
   */
  clickWhereIsMyOrder() {
    return this
      .waitForElementVisible('@whereIsMyOrderLink')
      .click('@whereIsMyOrderLink');
  },
  /**
   * This method validates that the "Newsletter Subscription" pop up is rendered.
   */
  validateNewsletterSubscriptionPopUp() {
    this
      .api.execute('scrollTo(0,5000)', () => {
        this
          .waitForElementVisible('@newsletterPopUp')
          .assert.visible('@newsletterPopUp', 'Newsletter Pop Up displayed')
          .waitForElementVisible('@newsletterPopUpTitle')
          .assert.containsText('@newsletterPopUpTitle', 'Sign up to our newsletters');
      });
    return this;
  },
  /**
   * This method enters the user's first name in the "Newsletter Subscription" pop up.
   * @param {string} firstname The user's first name
   */
  enterFirstName(firstname) {
    return this
      .waitForElementVisible('@newsletterPopUpFirstNameInputBox')
      .clearValue('@newsletterPopUpFirstNameInputBox')
      .setValue('@newsletterPopUpFirstNameInputBox', firstname);
  },
  /**
   * This method enters the user's last name in the "Newsletter Subscription" pop up.
   * @param {string} lastname The user's last name
   */
  enterLastName(lastname) {
    return this
      .waitForElementVisible('@newsletterPopUpLastNameInputBox')
      .clearValue('@newsletterPopUpLastNameInputBox')
      .setValue('@newsletterPopUpLastNameInputBox', lastname);
  },
  /**
   * This method enters the user's email address in the "Newsletter Subscription" pop up.
   * @param {string} email The user's email address
   */
  enterEmail(email) {
    return this
      .waitForElementVisible('@newsletterPopUpEmailInputBox')
      .clearValue('@newsletterPopUpEmailInputBox')
      .setValue('@newsletterPopUpEmailInputBox', email);
  },
  /**
   * This method clicks on the "Subscribe" button in the "Newsletter Subscription" pop up.
   */
  clickSubscribe() {
    return this
      .waitForElementVisible('@newsletterPopUpSubscribeBtn')
      .click('@newsletterPopUpSubscribeBtn');
  },
  /**
   * This method clicks the "X" (close) button in the "Newsletter Subscription" pop up.
   */
  clickCloseNewsletterPopUp() {
    this
      .api.execute('scrollTo(0,1000000)');
    this
      .isVisible({ selector: '@newsletterPopUpCloseBtn', suppressNotFoundErrors: true, timeout: 10000 }, (res) => {
        if (res.value === true) {
          this
            .click('@newsletterPopUpCloseBtn');
        } else {
          this
            .assert.ok(true, '[INFO] - The Newsletter Popup was not displayed');
        }
      });
    return this;
  },
  /**
   * This method validates that the “Thank You, You have successfully subscribed to the Newsletter.” is displayed
   */
  validateSuccessfullySubscribedToNewsletter() {
    return this
      .waitForElementVisible('@successBanner')
      .assert.containsText('@successBanner', 'Your newsletter preferences have been updated.');
  },
  /**
   * This method validates that the "our email address must be in the format of name@domain.com" error is displayed
   */
  validateEmailFormatError() {
    return this
      .waitForElementVisible('@emailFormatError')
      .assert.containsText('@emailFormatError', 'Your email address must be in the format of name@domain.com');
  },
  /**
   * This method validates that the "Newsletter Subscription" pop up is closed.
   */
  validateNewsletterSubscriptionPopUpClosed() {
    return this
      .api.expect.element('@newsletterPopUp').to.not.be.present;
  },
  /**
   * This method clicks on the first department listed on the "Shop By Department" nav menu
   */
  clickShopByDepartment() {
    return this
      .waitForElementVisible('@departmentLink')
      .click('@departmentLink');
  },
  /**
   * This method clicks on the first department item in the Department flyout menu
   */
  clickDepartmentInFlyout() {
    return this
      .waitForElementVisible('@selectedDepartmentFlyoutList')
      .click('@selectedDepartmentFlyoutList');
  },
  /**
   * This method clicks on a Product with a review in the home page
   */
  clickProductWithReview() {
    this
      .waitForElementVisible('@productWithRating', 10000, (res) => {
        if (res.value) {
          this
            .api.execute((selector) => {
            // eslint-disable-next-line no-unused-expressions
            // eslint-disable-next-line no-undef
              document.evaluate(selector, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click();
            }, ['((//div[contains(@class,"rating-module_rating")])[1]//ancestor::div[contains(@class,"swiper-slide")]//a)[1]']);
        } else {
          this
            .assert.ok(false, '[FAIL] - Something went wrong when clicking on product with reviews');
        }
      }, '[STEP] - Product with review should be displayed and clicked');
    return this;
  },
  /**
   * This method clicks on a Variant Product in the home page
   */
  clickVariantProduct() {
    return this
      .waitForElementVisible('@variantProduct')
      .click('@variantProduct');
  },

};


const xSelector = function (selector) {
  return {
    selector,
    locateStrategy: 'xpath',
  };
};
module.exports = {
  commands: [homepage],
  url() {
    return this.api.launchUrl;
  },
  elements: {
    promotionBanner: '[class*="banner-swiper"] .banner-slide:nth-child(1)',
    merchandisingContent: '.homepage .product-list',
    primaryNavMenu: '.dropdown-menu.flyouts-menu',
    promoNavMenu: '.sub-cat-wrap.round_3.right .topnav',
    onTabDailyDeals: '.sub-cat-wrap.round_3.right .topnav:nth-child(6)',
    wheresMyOrder: '.sb .side-widget:nth-child(1) img',
    sideWidgetBanner: '.sb .side-widget:nth-child(2) img',
    loginPage: '#email',
    footer: '.footer .f-container',
    dailyDealsBtnInDropdown: '.dropdown-toggle ul ~ div a',
    dailyDealsBtnInNavBar: '.swiper-slide a[href$="/deals"]',
    dailyDealsBtnInFooter: '.footer-container a[href$="/deals"]',
    homePageHeader: '.header-main-strip',
    messageBar: '#message-bar',
    firstItemInList: '[class*="products-strip-module"]:first-child .swiper-slide:first-child',
    promoTabItem: '[class^="header"] .swiper-slide:first-of-type a',
    viewMoreBtn: xSelector('(//a[contains(@class,"product-strip-view-more-button") and contains(@href,"all?")])[1]'),
    whereIsMyOrderLink: 'a[href$="/orders"]',
    newsletterPopUp: '[class^="Toastify__toast Toastify__toast"]',
    newsletterPopUpTitle: '[class^="Toastify__toast Toastify__toast"] h3 strong',
    newsletterPopUpFirstNameInputBox: '#newsletterForm_first_name',
    newsletterPopUpLastNameInputBox: '#newsletterForm_last_name',
    newsletterPopUpEmailInputBox: '#newsletterForm_email',
    newsletterPopUpSubscribeBtn: '[class*="newsletter-form-module_submit-button"]',
    newsletterPopUpCloseBtn: '[class*="newsletter-module_close-button"]',
    successBanner: '[class^="Toastify__toast Toastify__toast"]',
    emailFormatError: '.newsletterForm_email .error',
    departmentLink: xSelector('//span[contains(text(),"Baby")]'),
    selectedDepartmentFlyoutList: 'ul[class^="department-flyout-module_content"] li:first-of-type',
    productWithRating: xSelector('(//div[contains(@class,"rating-module_rating")])[1]//ancestor::div[contains(@class,"swiper-slide")]'),
    variantProduct: xSelector('(//span[contains(text(),"More Colours")])[1]//ancestor::div[contains(@class,"swiper-slide")]'),

  },
};
