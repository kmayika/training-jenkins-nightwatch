/* eslint-disable no-use-before-define */
// noinspection JSUnusedGlobalSymbols
const accountDashboard = {
  clickOrders() {
    return this
      .assert.visible('@orders')
      .click('@orders');
  },
  clickInvoice() {
    return this
      .assert.visible('@invoices')
      .click('@invoices');
  },
  clickExchangeAndReturns() {
    return this
      .assert.visible('@exchangesReturns')
      .click('@exchangesReturns');
  },
  clickProductReview() {
    return this
      .assert.visible('@productReviews')
      .click('@productReviews');
  },
  clickMyCredit() {
    return this
      .assert.visible('@myCredit')
      .click('@myCredit');
  },
  clickGiftVoucher() {
    return this
      .assert.visible('@giftVoucher')
      .click('@giftVoucher');
  },
  clickEBookDigitalLibrary() {
    return this
      .assert.visible('@eBookDigitalLib')
      .click('@eBookDigitalLib');
  },
  clickEBookSupport() {
    return this
      .assert.visible('@eBookSupport')
      .click('@eBookSupport');
  },
  clickPersonalDetails() {
    return this
      .assert.visible('@personalDetails')
      .click('@personalDetails');
  },
  clickAddressBook() {
    return this
      .assert.visible('@addressBook')
      .click('@addressBook');
  },
  clickNewsLetter() {
    return this
      .assert.visible('@newsletterSub')
      .click('@newsletterSub');
  },
  clickWishList() {
    return this
      .assert.visible('@yourWishList')
      .click('@yourWishList');
  },
  clickCreateWishList() {
    return this
      .assert.visible('@createWishList')
      .click('@createWishList');
  },
  validateErrorMsg(text) {
    return this
      .assert.visible('@validationBanner')
      .containsText('@validationBanner', text);
  },
  clickMyAccount() {
    return this
      .assert.visible('@myAccountHomeHdr')
      .click('@myAccountHomeHdr');
  },
  validateBtnPresent() {
    return this
      .assert.visible('@redeemGiftVoucherBtn');
  },
};

module.exports = {
  commands: [accountDashboard],
  elements: {
    orders: '.align-self-stretch a[href$="/account/orders"]',
    invoices: '.align-self-stretch a[href$="/account/invoices"]',
    exchangesReturns: '.align-self-stretch a[href$="/account/exchanges-returns"]',
    productReviews: '.align-self-stretch a[href$="/account/ratings"]',

    //* *Payment & Credits
    myCredit: '.align-self-stretch a[href$="/account/credits"]',
    giftVoucher: '.align-self-stretch a[href$="/account/voucher"]',

    // Account Credits
    myAccountHomeHdr: '.my-account-dropdown',
    redeemGiftVoucherBtn: '.credit-voucher .button',
    redeemGiftVoucherNav: '.nav-item-li a[href="/account/voucher"]',
    giftVoucherCouponInput: '#voucher_voucherOrCoupon',
    applyGiftVoucher: '.voucher-button',
    validationBanner: '.app-notification .message',

    //* *Digital Library
    eBookDigitalLib: '.align-self-stretch a[href$="/account/digital-library"]',
    eBookSupport: '.align-self-stretch a[href$="/help"]',
    eBookDownloadBtn: '.icon-download',
    modalBtnFaq: '.modal-button',
    modalBtnDownload: '.icon-downloads',
    eBookModalClose: '.fancybox-close',

    //* *Customer Information
    personalDetails: '.align-self-stretch a[href$="/account/personal-details"]',
    addressBook: '.align-self-stretch a[href$="/account/address-book"]',
    newsletterSub: '.align-self-stretch a[href$="/account/newsletters"]',

    //* *Wish List
    yourWishList: '.align-self-stretch a[href$="/wishlist"]',
    createWishList: '.align-self-stretch a[href$="/wishlist/create"]',
  },
};
