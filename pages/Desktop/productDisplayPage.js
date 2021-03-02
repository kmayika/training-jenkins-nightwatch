/* eslint-disable no-undef */
/* eslint-disable max-len */
// noinspection JSUnusedGlobalSymbols
const PDP = {
  goToCheckout() {
    return this
      .waitForElementVisible('@checkoutNowBut')
      .click('@checkoutNowBut');
  },
  /**
   * This method validates that the Product Display Page is rendered
   */
  validatePdpPage() {
    this
      .waitForElementVisible('@pdpMainPanel', 10000) // wait for 10 secs just for this element @pdpItem to be displayed
      .assert.visible('@pdpMainPanel', '[STEP] -  Product should be displayed in Pdp page')
      .assert.urlContains('PLID', '[STEP] -  Product Display Page should be displayed');
    return this;
  },
  /**
   * This method validates that the buy box renders correctly
   */
  validateBuyBox() {
    return this
      .waitForElementVisible('@buyBox', 10000, () => {}, '[STEP] - Buy box should be displayed')
      .assert.visible('@buyBox');
  },
  /**
   * This method validates that the "Add To Cart" button is displayed
   */
  validateAddToCart() {
    return this
      .waitForElementVisible('@addToCartBtn', () => {}, '[STEP] -  "Add To Cart" button should be displayed')
      .assert.visible('@addToCartBtn');
  },
  /**
   * This method clicks on "Add to Cart" button on the buy box panel
   */
  clickAddToCart() {
    return this
      .waitForElementVisible('@addToCartBtn', 10000, (res) => {
        if (res.value === true) {
          if (res.status !== undefined) {
            this
              .click('@addToCartBtn');
          } else {
            this
              .api.execute((selector) => {
                document.querySelector(selector).click();
              }, [this.elements.addToCartBtn.selector]);
          }
        } else {
          this
            .assert.ok(false, '[FAIL] - Something went wrong when clicking "Add to Cart" button');
        }
      }, '[STEP] -  "Add To Cart" button should be displayed');
  },
  /**
   * This method validates that the "Go to Cart" button is rendered
   */
  validateGoToCart() {
    return this
      .assert.visible('@goToCartBtn', '[STEP] -  "Go To Cart" button should be displayed');
  },
  /**
   * This method clicks on the "Go to Cart" button on the buy box panel
   */
  clickGoToCart() {
    return this
      .isVisible({ selector: '@cartDrawer', suppressNotFoundErrors: true, timeout: 8000 }, (res) => {
        if (res.value === true) {
          if (res.status !== undefined) {
            this
              .pause(2000)
              .waitForElementVisible('@goToCartBtn', 5000, (result) => {
                if (result.value == true) {
                  this
                    .click('@cartDrawerGoToCartBtn');
                } else {
                  this
                    .assert.ok(false, '[FAIL] - Something went wrong when clicking "Go to Cart" button in Cart Drawer');
                }
              }, '[STEP] - Cart Drawer should be displayed and "Go to Cart" button clicked');
          } else {
            this
              .api.execute((selector) => {
                document.querySelector(selector).click();
              }, [this.elements.cartDrawerGoToCartBtn.selector]);
          }
        } else {
          this
            .waitForElementVisible('@goToCartBtn', 10000, (result) => {
              if (result.value === true) {
                if (result.status !== undefined) {
                  this
                    .click('@goToCartBtn');
                } else {
                  this
                    .api.execute((selector) => {
                      document.querySelector(selector).click();
                    }, [this.elements.goToCartBtn.selector]);
                }
              } else {
                this
                  .assert.ok(false, '[FAIL] - Something went wrong when clicking "Go to Cart" button');
              }
            }, '[STEP] -  "Go To Cart" button should be displayed and clicked');
        }
      });
  },
  /**
   * This method clicks on tha "Add to wishlist" button
   */
  clickAddToWishlist() {
    return this
      .waitForElementVisible('@addToWishlistBtn', () => {}, '[STEP] -  "Add to Wishlist" button should be found')
      .click('@addToWishlistBtn');
  },
  /**
   * This method clicks on the "Wish List" link in the "Add to List" dropdown
   */
  clickWishList() {
    return this
      .waitForElementVisible('@wishlistBuyBoxDrpDwn')
      .click('@wishlistBuyBoxDrpDwn');
  },
  /**
   * This method validates that the item is added to wishlist
   */
  validateItemAddedToWishlist() {
    return this
      .waitForElementVisible('@addToWishlistBtn', 10000, () => {}, '[STEP] -  "Add to Wishlist" button to transition to "Added to Wish List"')
      .assert.attributeContains('@addToWishlistBtn', 'class', 'active');
  },
  /**
   * This method validates that the item is added to wishlist
   */
  validateItemAddedToCart() {
    return this
      .waitForElementVisible('@addedToCart', () => {}, '[STEP] -  "Add to Cart" button to transition to "Added to Cart"')
      .assert.containsText('@addedToCart', 'Added to Cart');
  },
  /**
   * This method clicks on the "Review" tab
   */
  clickReviewsTab() {
    return this
      .waitForElementVisible('@reviewsTab')
      .click('@reviewsTab');
  },
  /**
   * This method clicks on the "Write a Review" button
   */
  clickWriteAReview() {
    return this
      .waitForElementVisible('@writeAReviewBtn', () => {}, '[STEP] -  "Write a Review" button should be displayed')
      .click('@writeAReviewBtn');
  },
  /**
   * This method validates that the "You've already submitted a review for this product." error is displayed
   */
  validateAlreadySubmittedReviewError() {
    return this
      .waitForElementPresent('@errorBanner', 10000)
      .assert.containsText('@errorBanner', 'You\'ve already submitted a review for this product.');
  },
  /**
   * This method enters the reviewers name
   * @param {string} reviewerName The name of the reviewer
   */
  enterReviewerName(reviewerName) {
    return this
      .waitForElementVisible('@reviewerNameBox')
      .clearValue('@reviewerNameBox')
      .setValue('@reviewerNameBox', reviewerName);
  },
  /**
   * This method enters the review message/comment
   * @param {string} reviewMessage The review message/comment
   */
  enterReviewMessage(reviewMessage) {
    return this
      .waitForElementVisible('@reviewMessageBox')
      .setValue('@reviewMessageBox', reviewMessage);
  },
  /**
   * This method clicks on the "Submit" button
   */
  clickSubmit() {
    return this
      .waitForElementVisible('@submitBtn')
      .click('@submitBtn');
  },
  /**
   * This method selects the start rating
   */
  selectStarRating() {
    return this
      .waitForElementVisible('@thirdRatingStars', 10000, () => {}, '[STEP] -  Rating stars should be found in PDP')
      .click('@thirdRatingStars');
  },
  /**
   * This method validates that the "You Might Also Like" widget is displayed
   */
  validateYouMightAlsoLikeWidget() {
    this.api
      .element('@youMightAlsoLikeWidget', (res) => {
        if (res.status > -1) {
          this
            .waitForElementVisible('@youMightAlsoLikeWidget')
            .assert.visible('@youMightAlsoLikeWidget', '[STEP] -  "You Might Also Like" Widget should be displayed');
        } else {
          console.log('"You might also like" widget not displayed');
        }
      });
    return this;
  },
  /**
   * This method clicks on the "Add to Cart" button on the "You Might Also Like" widget
   */
  clickYouMightAlsoLikeWidgetAddToCart() {
    this.api
      .element('@youMightAlsoLikeWidget', (res) => {
        if (res.status > -1) {
          this
            .waitForElementVisible('@youMightAlsoLikeWidgetAddToCartBtn')
            .click('@youMightAlsoLikeWidgetAddToCartBtn');
        } else {
          console.log('"You might also like" widget not displayed');
        }
      });
    return this;
  },
  /**
   * This method clicks on the "Add to Cart" button on the "You Might Also Like" widget
   */
  validateYouMightAlsoLikeWidgetItemAddedToCart() {
    this.api
      .element('@youMightAlsoLikeWidget', (res) => {
        if (res.status > -1) {
          this
            .waitForElementVisible('@addedToCartBtn', () => {}, '[STEP] -  Item should be added to cart')
            .assert.containsText('@addedToCartBtn', 'Added to Cart');
        } else {
          console.log('"You might also like" widget not displayed');
        }
      });
    return this;
  },
  /**
   * This method validates that the product has no reviews
   */
  validateProductHasNoReviews() {
    return this
      .waitForElementVisible('@beTheFirstToWriteAReviewText', () => {}, '[STEP] -  Product should not have any reviews')
      .assert.containsText('@beTheFirstToWriteAReviewText', 'Be the first to');
  },
  /**
   * This method validates that the product has reviews
   */
  validateProductHasReviews() {
    return this
      .waitForElementVisible('@numberOfReviewsLink', () => {}, '[STEP] -  Product should have reviews')
      .assert.containsText('@numberOfReviewsLink', 'Review');
  },
  /**
   * This method clicks on the "Close" button in the review tab widget
   */
  clickCancelReview() {
    return this
      .waitForElementVisible('@cancelBtn')
      .click('@cancelBtn');
  },
  /**
   * This method validates that the review has been submitted successfully
   */
  validateSuccessfullySubmittedReview() {
    return this
      .isVisible({ selector: '@errorBanner', suppressNotFoundErrors: true, timeout: 10000 }, (res) => {
        if (res.value == true) {
          this
            .assert.ok(true, '[INFO] - The product has already been reviewed');
        } else {
          this
            .waitForElementVisible('@reviewSuccessBanner')
            .assert.containsText('@reviewSuccessBanner', 'Thank you for your review.');
        }
      });
  },
  /**
   * This method validates that the "Review" tab is displayed.
   */
  validateReviewWidget() {
    return this
      .waitForElementVisible('@reviewWidget', () => {}, '[STEP] -  Review widget should be displayed')
      .assert.visible('@reviewWidget');
  },
  /**
   * This method clicks on the number of reviews link
   */
  clickNumberOfReviewsLink() {
    return this
      .waitForElementVisible('@numberOfReviewsLink')
      .click('@numberOfReviewsLink');
  },
  /**
   * This method validates that the eBook Banner is diplayed in the PDP
   */
  validateEBookBanner() {
    return this
      .waitForElementVisible('@yellowBanner', () => {}, '[STEP] -  eBook yellow banner should be displayed')
      .assert.containsText('@yellowBanner', 'This is an electronic book (eBook)');
  },
  /**
   * This method validates that the Pre-Order Banner is diplayed in the PDP
   */
  validatePreOrderBanner() {
    return this
      .waitForElementVisible('@yellowBanner', () => {}, '[STEP] -  Pre-Order yellow banner should be displayed')
      .assert.containsText('@yellowBanner', 'Order and complete your payment before');
  },
  /**
   * This method validates that the Blu-ray Banner is diplayed in the PDP
   */
  validateBluRayBanner() {
    return this
      .waitForElementVisible('@yellowBanner', () => {}, '[STEP] -  Blu-ray yellow banner should be displayed')
      .assert.containsText('@yellowBanner', 'This Blu-ray disc requires a suitable Blu-ray');
  },
  /**
   * This method validates that the product has a delivery surcharge
   * @param {*} surchargeAmount The surcharge amount i.e. 200
   */
  validateDeliverySurchargeProduct(surchargeAmount) {
    return this
      .waitForElementVisible('@deliverySurchargeTxt', () => {}, '[STEP] -  Product should have delivery surcharge message')
      .assert.containsText('@deliverySurchargeTxt', `+ R ${surchargeAmount} Delivery Surcharge`);
  },
  /**
   * This method clicks on the Delivery Surcharge Tooltip Icon
   */
  clickDeliverySurchargeTooltip() {
    return this
      .waitForElementVisible('@deliverySurchargeTooltipIcon')
      .click('@deliverySurchargeTooltipIcon');
  },
  /**
   * This method validates that the Delivery Surcharge Tooltip is displayed
   * @param {*} surchargeAmount The surcharge amount i.e. 200
   */
  validateDeliverySurchargeTooltip(surchargeAmount) {
    return this
      .waitForElementVisible('@deliverySurchargeTooltip', () => {}, '[STEP] -  Delivery Surcharge Tooltip should be displayed')
      .assert.containsText('@deliverySurchargeTooltip', `A R ${surchargeAmount} heavy/bulky delivery surcharge applies`);
  },
  /**
   * This method clicks on the "Share" button in the product display page
   */
  clickShare() {
    return this
      .waitForElementVisible('@shareBtn')
      .click('@shareBtn');
  },
  /**
   * This method validates that the "Share This Product" modal is displayed
   */
  validateShareThisProductModal() {
    return this
      .waitForElementVisible('@modalBody', () => {}, '[STEP] -  Share this product modal should be displayed')
      .assert.containsText('@modalBody', 'Share This Product');
  },
  /**
   * This method validates that the "Other Offers" module is displayed
   */
  validateOtherOffers() {
    return this
      .waitForElementVisible('@otherOffersTxt', () => {}, '[STEP] -  Other Offers module should be displayed')
      .assert.containsText('@otherOffersTxt', 'Other Offers');
  },
  /**
   * This method clicks on the plus/minus icon in the other offers module
   */
  clickOtherOffersPlusMinusIcon() {
    this
      .api.execute(() => {
        // eslint-disable-next-line no-undef
        const otherOffersCollapse = document.evaluate('(//div[contains(@class,"collapsible")])[1]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        const isOpen = otherOffersCollapse.classList.contains('is-open');
        if (isOpen) {
          return true;
        }
        return false;
      }, [], (res) => {
        if (!res.value) {
          this
            .waitForElementVisible('@plusMinusIcon', () => {}, '[STEP] -  Plus/Minus icon should be displayed')
            .click('@plusMinusIcon');
        } else {
          this
            .assert.ok(true, '[STEP] - Other Offers Box has already been collapsed. No need to click Plus Icon');
        }
      });
    return this;
  },
  /**
   * This method clicks on the "Other Offers" add to cart button
   */
  clickOtherOffersAddToCart() {
    return this
      .waitForElementVisible('@otherOffersAddToCartBtn')
      .click('@otherOffersAddToCartBtn');
  },
  /**
   * This method validates that the "Add to Cart" tick icon is displayed.
   */
  validateAddedToCartTick() {
    return this
      .waitForElementVisible('@tickIcon', () => {}, '[STEP] -  Added to Icon Tick should be displayed')
      .assert.visible('@tickIcon');
  },
  /**
   * This method clicks on the seller link
   */
  clickSellerLink() {
    return this
      .waitForElementVisible('@sellerLinkTxt')
      .click('@sellerLinkTxt');
  },
  /**
   * This method clicks on the Colour Variant in list box
   */
  clickColourVariantInList() {
    return this
      .waitForElementVisible('@colourVariantList')
      .click('@colourVariantList');
  },
  /**
   * This method clicks on the size variant list
   */
  clickSizeVariant() {
    return this
      .waitForElementVisible('@sizeVariantList', () => {}, '[STEP] -  Size Variant should be displayed')
      .click('@sizeVariantList');
  },
  /**
   * This method validates that the slashed price is displayed in the buy box
   */
  validateSlashedPriceInBuyBox() {
    return this
      .waitForElementVisible('@slashedPriceInBuyBox', () => {}, '[STEP] -  Slashed price should be displayed in buy box')
      .assert.visible('@slashedPriceInBuyBox');
  },
  /**
   * This method clicks on the List Price tooltip icon
   */
  clickListPriceTooltipIcon() {
    return this
      .waitForElementVisible('@listPriceTooltipIcon')
      .click('@listPriceTooltipIcon');
  },
  /**
   * This method validates that the list price modal is displayed in the product display page
   */
  validateListPriceModal() {
    return this
      .waitForElementVisible('@listPriceModal', () => {}, '[STEP] -  List price modal should be displayed')
      .assert.containsText('@listPriceModal', 'This is our List Price.');
  },
  /**
   * This method clicks on the "X" button in the list price modal
   */
  clickCloseListPriceModal() {
    return this
      .waitForElementVisible('@listPriceModalCloseBtn', () => {}, '[STEP] -  List Price should have a close button')
      .click('@listPriceModalCloseBtn');
  },
  /**
   * This method validates that the product is eligible for free delivery
   */
  validateProductEligibleForFreeDelivery() {
    return this
      .waitForElementVisible('@buyBoxFreeDeliveryTxt', () => {}, '[STEP] -  "Free Delivery" should be displayed in buybox')
      .assert.containsText('@buyBoxFreeDeliveryTxt', 'FREE DELIVERY');
  },
  /**
   * This method validates that the product is eligible for discovery miles payment
   */
  validateProductEligibleForDiscoveryMilesPayment() {
    return this
      .waitForElementVisible('@discoveryMilesPaymentTxt', () => {}, '[STEP] -  "Discovery Miles" payment method should be displayed in buybox')
      .assert.containsText('@discoveryMilesPaymentTxt', 'Discovery Miles');
  },
  /**
   * This method validates that the product is eligible for mobi-cred payment
   */
  validateProductEligibleForMobiCredPayment() {
    return this
      .waitForElementVisible('@mobiCredPaymentTxt', () => {}, '[STEP] -  "On Credit" payment method should be displayed in buybox')
      .assert.containsText('@mobiCredPaymentTxt', 'On Credit');
  },
  /**
   * This method clicks on the Mobi-Cred info icon in the buybox
   */
  clickMobiCredInfoIcon() {
    return this
      .waitForElementVisible('@mobiCredPaymentInfoIcon')
      .click('@mobiCredPaymentInfoIcon');
  },
  /**
   * This method validates that the mobi-cred modal is displayed in the product display page
   */
  validateMobiCredModal() {
    return this
      .waitForElementVisible('@mobiCredModal', () => {}, '[STEP] -  Mobi-Cred modal should be displayed')
      .assert.containsText('@mobiCredModal', 'Can I buy this on credit?');
  },
  /**
   * This method clicks on the "X" button in the mobi-cred modal
   */
  clickCloseMobiCredModal() {
    return this
      .waitForElementVisible('@mobiCredModalCloseBtn', () => {}, '[STEP] -  List Price should have a close button')
      .click('@mobiCredModalCloseBtn');
  },
  /**
   * This method clicks on the "Apply to Mobicred now" link
   */
  clickAppyToMobicredNow() {
    return this
      .waitForElementVisible('@mobiCredModalApplyToMobicredLink')
      .click('@mobiCredModalApplyToMobicredLink');
  },
  /**
   * This method validates that the mobicred page is displayed
   */
  validateMobicredPage() {
    this
      .api.acceptAlert(() => {
        this
          .assert.urlContains('mobicred');
      });
    return this;
  },
  /**
   * This method clicks on the "Pre-order" button in the buy box
   */
  clickPreOrder() {
    return this
      .waitForElementVisible('@preOrderBtn', () => {}, '[STEP] -  Pre-order button should be displayed')
      .click('@preOrderBtn');
  },
  /**
   * This method validates that the "Pre-order items must be purchased in separate orders.." warning banner is displayed
   */
  validatePreOrderWarningBanner() {
    return this
      .waitForElementVisible('@preOrderWarning', () => {}, '[STEP] -  Pre-Order warning banner should be displayed')
      .assert.containsText('@preOrderWarning', 'Pre-order items must be purchased in separate orders');
  },
  /**
   * This method clicks on the "What is this" link in the pdp
   */
  clickWhatIsThis() {
    return this
      .waitForElementVisible('@whatIsThis')
      .click('@whatIsThis');
  },
  /**
   * This method validates that the unboxed deal module is displayed in page
   */
  validateUnboxedDeal() {
    return this
      .waitForElementVisible('@unboxedDealModule', () => {}, '[STEP] -  Unboxed deal should be displayed in pdp')
      .assert.containsText('@unboxedDealModule', 'Returned & shop soiled products.');
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
};

const xSelector = selector => ({
  selector,
  locateStrategy: 'xpath',
});

module.exports = {
  commands: [PDP],
  url() {
    return this.api.launchUrl;
  },
  elements: {
    pdpMainPanel: '[class="pdp-main-panel"]',
    buyBox: '.cell div[class*="pdp-module_sidebar-buybox"]',
    productTitle: '.pdp .product-title h1',
    descriptionTab: '.pdp-tabs .grid-container div:nth-child(1) > a',
    productInfoTab: '.pdp-tabs .grid-container div:nth-child(2) > a',
    reviewsTab: '.pdp-tabs .grid-container div:nth-child(3) > a',
    newDealPrice: '.sf-buybox [class*="price"]:nth-child(1) > span',
    addToCartBtn: 'div[class^="buybox-actions"] .add-to-cart-button',
    addToWishlistBtn: '[class^="buybox"] button[class*="wishlist"]',
    addToWishlistBtnTick: '[class^="buybox"] button[class*="wishlist"] i',
    eBucksPriceText: '[class*=other-payment-methods] > div:first-child',
    goToCartBtn: '[class^="buybox"] button[class*="checkout"]',
    cartDrawer: '[class*="drawer-module_right"]',
    cartDrawerGoToCartBtn: '[class*="cart-draw"] button[class*="checkout"]',
    successBanner: '  [class*="Toastify__toast Toastify__toast--success"]',
    writeAReviewBtn: 'a[href*="reviews"][class*="button"]',
    submitBtn: 'button.submit-review',
    reviewerNameBox: '#Review_reviewName',
    reviewMessageBox: '#Review_reviewMessage',
    thirdRatingStars: '[class*="rating-select"] button:nth-child(3)',
    errorBanner: xSelector('(//div[contains(@class,"app-notification")]//div[contains(@class,"alert-banner-module_content")])[1]'),
    youMightAlsoLikeWidget: xSelector('(//h2[contains(text(),"You Might Also Like")])[1]'),
    youMightAlsoLikeWidgetAddToCartBtn: xSelector('(//div[contains(@class,"product-swiper")]//button[contains(@class,"add-to-cart")])[1]'),
    addedToCartBtn: xSelector('(//button[contains(.,"Added to Cart")])[1]'),
    beTheFirstToWriteAReviewText: xSelector('(//div[contains(text(),"Be the first to")])[1]'),
    cancelBtn: xSelector('(//button[contains(text(),"Cancel")])[1]'),
    reviewSuccessBanner: xSelector('(//div[contains(@class,"alert-banner")])[1]'),
    numberOfReviewsLink: xSelector('(//a[contains(.,"Review")])[1]'),
    reviewWidget: 'section[class^="reviews-list"]',
    yellowBanner: xSelector('(//div[contains(@class,"pdp-grid-container")]//div[contains(@class,"message")])[last()]'),
    deliverySurchargeTxt: xSelector('(//div[contains(text(),"Delivery Surcharge")])[1]'),
    deliverySurchargeTooltipIcon: xSelector('(//div[contains(text(),"Delivery Surcharge")])[1]//child::div[contains(@class,"tooltip-trigger")]'),
    deliverySurchargeTooltip: xSelector('(//div[contains(text(),"delivery surcharge")])[1]'),
    shareBtn: xSelector('(//span[contains(text(),"Share")])[1]'),
    modalBody: '[class*="modal-body"]',
    otherOffersTxt: xSelector('(//h3[text()="Other Offers"])[1]'),
    plusMinusIcon: xSelector('(//div[contains(@class,"plusminus")])[1]'),
    collapsibleOtherOffersTab: xSelector('(//div[contains(@class,"collapsible")])[1]'),
    otherOffersAddToCartBtn: xSelector('(//div[contains(@class,"sf-more-buying-choices")]//button[contains(@class,"add-to-cart")])[1]'),
    tickIcon: 'i[class="tick-icon"]',
    sellerLinkTxt: xSelector('(//div[contains(@class,"sf-more-buying-choices")]//div[contains(@class,"seller-information") and not(contains(.,"Takealot"))])[1]//a'),
    colourVariantList: xSelector('(//button[contains(@class,"variant-selector-module_button-selector")]//img)[last()]'),
    sizeVariantList: xSelector('(//button[contains(@class,"variant-selector-module_button-selector")])[last()]'),
    slashedPriceInBuyBox: xSelector('(//div[contains(@class,"buybox-module_list-price")])[last()]//descendant::span'),
    listPriceTooltipIcon: xSelector('(//div[contains(@class,"buybox-module_list-price")])[last()]//descendant::div[contains(@class,"list-price-tooltip")]'),
    listPriceModal: '[class*="modal-body"]',
    listPriceModalCloseBtn: '[class*="modal-module_close-button"]',
    buyBoxFreeDeliveryTxt: '[class*="buybox-module_free-delivery"]',
    discoveryMilesPaymentTxt: xSelector('(//div[contains(text(),"Discovery Miles")])[1]'),
    mobiCredPaymentTxt: xSelector('(//div[contains(text(),"On Credit")])[1]'),
    mobiCredPaymentInfoIcon: xSelector('(//div[contains(text(),"On Credit")])[1]//div[contains(@class,"info-icon")]'),
    mobiCredModal: '[class*="modal-body"]',
    mobiCredModalCloseBtn: '[class*="modal-module_close-button"]',
    mobiCredModalApplyToMobicredLink: '[class*="modal-body"] a',
    addedToWishlist: xSelector('(//button[contains(.,"Added to Wish List")])[1]'),
    addedToCart: xSelector('(//button[contains(.,"Added to Cart")])[1]'),
    preOrderBtn: xSelector('(//button[contains(.,"Pre-order")])[1]'),
    preOrderWarning: '[class*="Toastify__toast Toastify__toast--warning"]',
    unboxedDealModule: xSelector('(//ul[contains(@class,"unboxed-deals-content")])[1]'),
    whatIsThis: xSelector('(//div[text()="What is this?"])[1]'),
    wishlistBuyBoxDrpDwn: 'li[class*="add-to-list-manager-module"]',
    fulfilledByTakealotLinkTxt: xSelector('(//*[contains(text(),"Fulfilled by Takealot")])[1]'),
    fulfilledByTakealotModal: xSelector('(//div[contains(@class,"modal-body")])[1]'),

  },
  sections: {
    buybox: {
      selector: '.cell div[class*="pdp-module_sidebar-buybox"]',
      elements: {
        pillIndicator: '.sf-buybox .rounded-pill',
        sellingPrice: '.sf-buybox .currency',
        listPrice: '.sf-buybox div[class*="_list-price_"]',
        otherPayments: '.sf-buybox div[class*="_other-payment-methods_"]',
        heavySurcharge: '.sf-buybox div[class*="_price-subtitle_"]',
        surchargeModal: '.tooltip.top-end',
        surchargeInfoIcon: '.sf-buybox div[class*=tooltip-module_tooltip-trigger]',
        addToCartBut: '.buybox-actions .add-to-cart-button',
        addToWishlistBut: '.buybox-actions .wishlist-button',
        checkoutNowBut: '.buybox-actions .checkout-now',
        variantCtaBut: '.buybox-actions .variants-cta',
      },
      commands: [{
        addItemToCart() {
          return this
            .assert.visible('@addToCartBut')
            .click('@addToCartBut');
        },
        checkoutNow() {
          return this
            .assert.visible('@checkoutNowBut')
            .click('@checkoutNowBut');
        },
        hoverInfoIcon(element) {
          // const expectedText = 'A R 200 heavy/bulky';
          this
            .moveToElement(element, 1, 1)
            .pause(1500);
          // .assert.containsText('@surchargeModal', expectedText);
        },
      }],
    },
    saveWithBundleDeals: {
      selector: '.cell div[class*=bundle-deals-wrapper]',
      elements: {
        bundleDealsBut: '.cell .button.blue',
      },
    },
    mainPanel: {
      selector: '.grid-x .pdp-main-panel',
      elements: {
        gallery: '.pdp-main-panel .pdp-gallery',
        galleryNavigation: '.grid-x div[class*="pdp-gallery-module_navigation"]',
        badgeList: '.pdp-gallery .badge-list',
        title: '.product-title .grid-x h1',
        contentTitleList: '.product-title .grid-x .title-content-list',
        stars: '.rating-and-reviews.grid-x .rating',
        reviewsLink: '.rating-and-reviews a[href$="/reviews/1"]',
        writeAReviewLink: '.rating-and-reviews a[href$="/reviews/1/write"]',
        stockIndicator: '.pdp-main-panel .stock-availability-status',
        colourListboxSelector: '.variant-selector div[role="listbox"]',
        colourImageSelector: '.variant-selector .grid-x:nth-child(1) div[class*="variant-selector"]',
        sizeSelector: '.variant-selector .grid-x:nth-child(2) div[class*="variant-selector"]',
        bulletPointList: '.pdp-main-panel .grid-container .bullet-point-attributes-list',
        unboxedCoreLogo: '.unboxed-core-content img',
        unboxedCoreText: 'ul[class^="unboxed-deals-content-module_unboxed-list"]',
      },
      commands: [{
        variantSelectorPresent(selector) {
          return this
            .waitForElementVisible(selector);
        },
        selectVariant(selector) {
          switch (selector) {
            case '@colourImageSelector': {
              const imagePanel = '.cell div[class*="variant-selector-module_options_"] .tooltip-wrapper';
              this.api
                .elements('css selector', imagePanel, (colourImages) => {
                  const variant = Math.floor((Math.random() * colourImages.value.length) + 1);
                  const selectedOption = `.cell div[class*="variant-selector-module_options_"] .tooltip-wrapper:nth-child(${variant})`;
                  this
                    .click(selectedOption);
                  const imageTooltip = 'button[class*="_button-selector_"].active img';
                  this.getAttribute('css selector', imageTooltip, 'alt', (imageColour) => {
                    const listBoxText = 'span[class*="_selected-option_"] div[class*="image-box "] img';
                    this.assert.attributeEquals(listBoxText, 'alt', imageColour.value);
                  });
                });
              break;
            }
            case '@sizeSelector': {
              const sizePanel = '.variant-selector .grid-x:nth-child(2) div[class*="variant-selector"]';
              this.api
                .elements('css selector', sizePanel, (size) => {
                  console.log(size.value.length);
                  const variant = Math.floor((Math.random() * size.value.length) + 1);
                  const selectedOption = `.variant-selector .grid-x:nth-child(2) div[class*="variant-selector"] :nth-child(${variant})`;
                  this
                    .click(selectedOption);
                });
              break;
            }
            default: {
              const listboxOptions = '.select-list .select-list-item .image-box';
              this
                .click(selector)
                .waitForElementVisible(listboxOptions);
              this.api
                .elements('css selector', listboxOptions, (listItems) => {
                  const variant = Math.floor((Math.random() * listItems.value.length) + 1);
                  const selectedOption = `.select-list .select-list-item:nth-child(${variant})`;
                  this.api
                    .waitForElementVisible(selectedOption)
                    .pause(1500)
                    .click(selectedOption);
                });
              const listBoxText = 'span[class*="_selected-option_"] div[class*="image-box "] img';
              this.getAttribute('css selector', listBoxText, 'alt', (selectedText) => {
                const imageTooltip = 'button[class*="_button-selector_"].active img';
                this.assert.attributeEquals(imageTooltip, 'alt', selectedText.value);
              });
              break; }
          }
        },
      }],
    },
    youMightAlsoLike: {
      selector: '.product-swiper .swiper-wrapper',
      elements: {
        addToCartBut: '.swiper-slide-active .add-to-cart-button',
      },
    },
    otherOffers: {
      selector: '.grid-x .sf-more-buying-choices',
      elements: {
        addToCartBut: '.sf-more-buying-choices .add-to-cart-button',
      },
    },
    unboxedDeals: {
      selector: '.unboxed-deals .sf-accordion-item',
      elements: {
        title: 'div[class*="_unboxed-deal-wrapper_"] .medium-shrink img',
        whatIsThis: 'div[class*="unboxed-deals-module_tooltip-link"]',
        whatIsThisModal: '.cell .tooltip-wrapper .tooltip img',
        whatIsThisModalText: '[class^="tooltip"].top',
        headerPrice: 'div[class*="_unboxed-deal-wrapper_"] .cell .currency',
        bodyPrice: 'div[class^="unboxed-deals-list"] .buying-choice-list-item .currency',
        addToCartBut: 'div[class^="unboxed-deals-list"] .buying-choice-list-item .add-to-cart-button',
        addedToCartTick: 'div[class^="unboxed-deals-list"] .buying-choice-list-item .button .tick-icon',
        unboxedDealsLink: '.seller-information a[href$="11610"]',
        fullfilledByTakealotLink: '.cell .seller-information .modal-link',
        fullfilledByTakealotModal: '.modal .modal-body',
        breadcrumb: '.category.breadcrumb span[itemprop="name"]',
        sellerLogo: '.seller_logo img',
        closeModal: 'button[class*="_close-button_"]',
      },
      commands: [{
        hoverWhatIsThis(element) {
          const expectedText = 'Returned & shop soiled products.';
          this
            // .moveToElement(element, 1, 1)
            .assert.visible('[class^="tooltip"].top')
            .assert.containsText('[class^="tooltip"].top', expectedText)
            .moveToElement(element, 1, 1)
            .pause(1500);
          // .assert.containsText('@whatIsThisModalText', expectedText);
        },
      }],
    },
    productInformation: {
      selector: '.tab-nav .swiper-container-initialized',
      elements: {
        descriptionTab: '.tab-nav .swiper-wrapper .swiper-slide:nth-child(1)',
        productInfoTab: '.tab-nav .swiper-wrapper .swiper-slide:nth-child(2)',
        reviewsTab: '.tab-nav .swiper-wrapper .swiper-slide:nth-child(3)',
        bundleDealsTab: '.tab-nav .swiper-wrapper .swiper-slide:nth-child(4)',
      },
    },
  },
};
