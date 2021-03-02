/* eslint-disable no-undef */
/* eslint-disable eqeqeq */
/* eslint-disable no-loop-func */
/* eslint-disable no-plusplus */
/* eslint-disable no-empty */
const orderTracking = {
  /**
     * This method validates that the Orders Tracking page is rendered.
     */
  validateOrderTrackingPage() {
    return this
      .isVisible({ selector: '@firstItemInOrderEntry', suppressNotFoundErrors: true, timeout: 10000 }, (res) => {
        if (res.value == true) {
          this
            .assert.urlContains('/account/orders');
        } else {
          this
            .assert.ok(false, '[FAIL] - Something went wrong when validating Order Tracking Page');
        }
      });
  },
  /**
   * This method filters orders placed in certain period
   */
  selectOrdersPlacedInPeriod_2016() {
    return this
      .waitForElementVisible('@ordersPlacedInFilter2016')
      .assert.visible('@ordersPlacedInFilter2016')
      .click('@ordersPlacedInFilter2016');
  },
  /**
   * This method filters orders placed in certain period
   */
  selectOrdersPlacedInPeriod_last_3_months() {
    return this
      .waitForElementVisible('@ordersPlacedInFilterLastThreeMonths')
      .assert.visible('@ordersPlacedInFilterLastThreeMonths')
      .click('@ordersPlacedInFilterLastThreeMonths');
  },
  /**
   * This method validates that the "You have not placed any orders..." text is rendered.
   */
  validateYouHaveNotPlacedAnyOrders() {
    return this
      .waitForElementVisible('@youHaveNotPlacedAnyOrdersWarningTxt')
      .assert.containsText('@youHaveNotPlacedAnyOrdersWarningTxt', 'You have not placed any orders');
  },
  /**
   * This method selects the last page number in the pagination wrapper
   */
  selectLastPageInPagination() {
    this
      .api.execute('scrollTo(0,3000)', () => {
        this
          .waitForElementVisible('@lastPaginationNumberInDisplay')
          .assert.visible('@lastPaginationNumberInDisplay')
          .click('@lastPaginationNumberInDisplay');
      });
    return this;
  },
  /**
   * This method clicks the "Next" button
   */
  clickNext() {
    return this
      .waitForElementVisible('@nextBtn')
      .assert.visible('@nextBtn')
      .click('@nextBtn');
  },
  /**
   * This method clicks the "Previous" button
   */
  clickPrevious() {
    this
      .api.execute('scrollTo(0,3000)', () => {
        this
          .waitForElementVisible('@previousBtn')
          .assert.visible('@previousBtn')
          .click('@previousBtn');
      });
    return this;
  },
  /**
   * This method navigates to previous browser page
   */
  navigatePreviousBrowserPage() {
    this
      .api.back();
    return this;
  },
  /**
   * This method navigates to next browser page
   */
  navigateNextBrowserPage() {
    this
      .api.forward();
    return this;
  },
  /**
   * This method validates that the user was able to navigate to another page
   */
  validateNavigation() {
    return this
      .waitForElementVisible('@previousBtn')
      .assert.visible('@previousBtn')
      .assert.not.attributeEquals('@previousBtn', 'disabled', '');
  },
  /**
   * This method clicks on the first item in order entry
   */
  clickFirstOrderEntryItem() {
    return this
      .waitForElementVisible('@firstItemInOrderEntry', 10000, (res) => {
        if (res.value == true) {
          if (res.status !== undefined) {
            this
              .click('@firstItemInOrderEntry');
          } else {
            this
              .api.execute((selector) => {
                document.querySelector(selector).click();
              }, [this.elements.firstItemInOrderEntry.selector]);
          }
        } else {
          this
            .assert.ok(false, '[FAIL] - Something went wrong when clicking first order in Order Tracking page');
        }
      }, '[STEP] - Order should be displayed and clicked');
  },
  /**
   * This method validates that the Order Detail page is rendered
   */
  validateOrderDetailsSection() {
    return this
      .waitForElementVisible('@orderDetailsTxt', () => {}, 'Order Details Page Title is displayed')
      .assert.containsText('@orderDetailsTxt', 'Order Detail')
      .waitForElementVisible('@orderSummarySection', () => {}, 'Order Summary section is displayed')
      .assert.visible('@orderSummarySection', ' ')
      .waitForElementVisible('@orderPdpItemImage', () => {}, 'Order Item image is displayed')
      .assert.visible('@orderPdpItemImage', ' ');
  },
  /**
   * This method validates that the Order is in "Awaiting Payment" status in the Order Details page
   */
  validateOrderAwaitingPayment() {
    return this
      .assert.visible('@awaitingPaymentStatus', '"Awaiting Payment" Status Displayed in order');
  },
  /**
   * This method clicks on an item that is in  "Awaiting Payment" status
   */
  clickAwaitingPaymentItem() {
    return this
      .waitForElementVisible('@awaitingPaymentItem')
      .assert.visible('@awaitingPaymentItem')
      .click('@awaitingPaymentItem');
  },
  /**
   * This method clicks on the Item image in the Order Details page
   */
  clickOnItemImage() {
    return this
      .waitForElementVisible('@orderPdpItemImage')
      .assert.visible('@orderPdpItemImage')
      .click('@orderPdpItemImage');
  },
  /**
   * This method clicks on the "Pay Now" button
   */
  clickPayNow() {
    return this
      .waitForElementVisible('@payNowBtn')
      .assert.visible('@payNowBtn')
      .click('@payNowBtn');
  },
  /**
   * This method clicks on the "Track" button
   */
  clickTrack() {
    return this
      .waitForElementVisible('@trackBtn')
      .assert.visible('@trackBtn')
      .click('@trackBtn');
  },
  /**
   * This method validates that the Order details Tracking Page is rendered
   */
  validateTrackingPage() {
    return this
      .waitForElementVisible('@trackingPageTitle')
      .assert.containsText('@trackingPageTitle', 'Tracking')
      .waitForElementVisible('@trackingPageSection')
      .assert.visible('@trackingPageSection', 'User is on the tracking page');
  },
  /**
   * This method clicks on the Image thumbnail on the Tracking page
   */
  clickItemOnTrackingPage() {
    return this
      .waitForElementVisible('@trackingPagePdpItem')
      .assert.visible('@trackingPagePdpItem')
      .click('@trackingPagePdpItem');
  },
  /**
   * This method clicks on "Cancel" in the order details page
   */
  clickCancel() {
    this
      .api.elements('@cancelBtn', (res) => {
        if (res.value.length > 0) {
          this
            .waitForElementVisible('@cancelBtn', 3000, (result) => {
              if (result.value == true) {
                if (result.status !== undefined) {
                  this
                    .click('@cancelBtn');
                } else {
                  this
                    .api.execute((selector) => {
                      document.querySelector(selector).click();
                    }, [this.elements.cancelBtn.selector]);
                }
              } else {
                this
                  .assert.ok(false, '[FAIL] - Something went wrong when clicking cancel in Order Details page');
              }
            }, '[STEP] -  Cancel button should be found in the order details page');
        } else {
          this
            .assert.visible('@orderSummarySection', '[STEP] -  Order Has been cancelled');
        }
        return this;
      });
    return this;
  },
  /**
   * This method validates that the order has been cancelled succesfully
   */
  validateSuccessfullyCancelledOrder() {
    this
      .api.elements('@successBanner', (res) => {
        if (res.value.length > 0) {
          this
            .waitForElementVisible('@successBanner', 5000, () => {}, '[STEP] -  Success Banner should be displayed')
            .assert.containsText('@successBanner', 'Your order has been cancelled');
        } else {
          this
            .assert.visible('@orderSummarySection', '[STEP] -  Order Has been cancelled');
        }
        return this;
      });
    return this;
  },
};

const xSelector = selector => ({
  selector,
  locateStrategy: 'xpath',
});


module.exports = {
  commands: [orderTracking],
  url() {
    return this.api.launchUrl;
  },
  elements: {
    ordersPageContainer: 'div #orders-container',
    ordersPageTitle: xSelector('(//h1[text()="Orders"])[1]'),
    ordersPlacedInFilterLastThreeMonths: '#order-tracking_filter-dropdown option:first-child',
    ordersPlacedInFilter2016: '#order-tracking_filter-dropdown option[value="5y"]',
    youHaveNotPlacedAnyOrdersWarningTxt: xSelector('(//p[contains(text(), "You have not placed any orders")])[1]'),
    lastPaginationNumberInDisplay: '[role="navigation"] li:last-child',
    nextBtn: '[class^="pagination-wrapper"] div:last-child button',
    previousBtn: '[class^="pagination-wrapper"] div:first-child button',
    firstItemInOrderEntry: '#wrapper [class$="order-entry"]:first-child img',
    orderDetailsTxt: '[class^="order-detail"] h1',
    orderSummarySection: '[class*="order-summary"]',
    orderPdpItemImage: 'a.product-thumb img[src*="takealot.com"]',
    orderItemStatustTitle: 'h3[class^="consignment-card-module_title"]',
    awaitingPaymentItem: '[class*="order-entry"]:nth-child(1) h3[class^="consignment-card-module_title"]',
    payNowBtn: '[class*="order-summary"] a',
    trackBtn: '[class="button btn-track"]',
    trackingPageTitle: '.tracking-header h1',
    trackingPageSection: '[class="tracking"]',
    trackingPagePdpItem: '.swiper-slide a img[src*="takealot.com"]',
    cancelBtn: 'button.cancel',
    successBanner: '[class*="toast-content-module_toast-content"]',
    awaitingPaymentStatus: '[class*="detail-module_order-status"] div:last-child',
  },

};
