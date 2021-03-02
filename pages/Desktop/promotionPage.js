const promotion = {
  /**
   * This method validates that the "Promotion" page is rendered
   */
  validatePromotionPage() {
    return this
      .assert.urlContains('promotion', '[STEP] -  User should be on the promotions page');
  },
};

module.exports = {
  commands: [promotion],
  elements: {
    promotionTab: '.panel:first-of-type .slot-container',
  },
};
