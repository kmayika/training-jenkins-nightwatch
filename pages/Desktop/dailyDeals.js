
const skipTest = () => {
  const date = new Date();

  const hour = date.getHours() + date.getMinutes() / 60;
  return hour > 7 && hour < 22;
};

const dailyDeals = {
  /**
   * This method validates that the Daily Deals page is displayed
   */
  validateDailyDealsPage() {
    this
      .api.elements('@dealsNav', (res) => {
        if (res.value.length > 0) {
          if (skipTest()) {
            this
              .assert.visible('@dailyDealsHeader', '[STEP] -  User should be in the Daily Deals Page')
              .assert.visible('@dailyDealsFirstItem')
              .assert.visible('@dailyDealsLastItem');
          } else {
            this
              .assert.ok(true, 'Daily Deals not available after 10pm');
          }
        } else {
          this
            .assert.urlContains('promotion', 'Promotions page should be displayed');
        }
      });
    return this;
  },
  clickInfoIcon() {
    this
      .api.elements('@dealsNav', (res) => {
        if (res.value.length > 0) {
          if (skipTest()) {
            this
              .assert.visible('@dailyDealsInfoIcon')
              .click('@dailyDealsInfoIcon');
          } else {
            this
              .assert.ok(true, 'Daily Deals not available after 10pm');
          }
        } else {
          this
            .assert.ok(true, '[INFO] - Daily Deals not active');
        }
      });
    return this;
  },
  validateInfoIconModal() {
    this
      .api.elements('@dealsNav', (res) => {
        if (res.value.length > 0) {
          if (skipTest()) {
            this
              .assert.visible('@infoIconModal')
              .assert.containsText('@infoIconModal', 'List Price');
          } else {
            this
              .assert.ok(true, 'Daily Deals not available after 10pm');
          }
        } else {
          this
            .assert.ok(true, '[INFO] - Daily Deals not active');
        }
      });
    return this;
  },
  closeInfoIconModalWindow() {
    this
      .api.elements('@dealsNav', (res) => {
        if (res.value.length > 0) {
          if (skipTest()) {
            this
              .assert.visible('@infoIconModalCloseBtn')
              .click('@infoIconModalCloseBtn');
          } else {
            this
              .assert.ok(true, 'Daily Deals not available after 10pm');
          }
        } else {
          this
            .assert.ok(true, '[INFO] - Daily Deals not active');
        }
      });
    return this;
  },
  clickNext() {
    this
      .api.elements('@dealsNav', (res) => {
        if (res.value.length > 0) {
          if (skipTest()) {
            this
              .assert.visible('@paginationNextBtn')
              .click('@paginationNextBtn');
          } else {
            this
              .assert.ok(true, 'Daily Deals not available after 10pm');
          }
        } else {
          this
            .assert.ok(true, '[INFO] - Daily Deals not active');
        }
      });
    return this;
  },
  validateInNextPage() {
    this
      .api.elements('@dealsNav', (res) => {
        if (res.value.length > 0) {
          if (skipTest()) {
            this
              .assert.visible('@paginationFirstBtn');
          } else {
            this
              .assert.ok(true, 'Daily Deals not available after 10pm');
          }
        } else {
          this
            .assert.ok(true, '[INFO] - Daily Deals not active');
        }
      });
    return this;
  },
  clickAppOnlyDeals() {
    this
      .api.elements('@dealsNav', (res) => {
        if (res.value.length > 0) {
          if (skipTest()) {
            this
              .assert.visible('@appOnlyDealsBtn')
              .click('@appOnlyDealsBtn');
          } else {
            this
              .assert.ok(true, 'Daily Deals not available after 10pm');
          }
        } else {
          this
            .assert.ok(true, '[INFO] - Daily Deals not active');
        }
      });
    return this;
  },
  validateAppOnlyDealsPage() {
    this
      .api.elements('@dealsNav', (res) => {
        if (res.value.length > 0) {
          if (skipTest()) {
            this
              .assert.visible('@appOnlyDealsfirstItem');
          } else {
            this
              .assert.ok(true, 'Daily Deals not available after 10pm');
          }
        } else {
          this
            .assert.ok(true, '[INFO] - Daily Deals not active');
        }
      });
    return this;
  },

};

module.exports = {
  commands: [dailyDeals],
  url() {
    return this.api.launchUrl;
  },
  elements: {
    dailyDealsHeader: '.deals-header .header-inner',
    dailyDealsFirstItem: '.daily-deal-item:first-child',
    dailyDealsLastItem: '.daily-deal-item:last-child',
    dailyDealsInfoIcon: '.daily-deal-item:first-child .list-price-info-icon',
    infoIconModal: '.fancybox-outer h4',
    infoIconModalCloseBtn: '.fancybox-skin a[title="Close"]',
    paginationNextBtn: '.paginating:nth-child(2) a[rel="next"]',
    paginationFirstBtn: '.paginating:nth-child(2) a[rel="first"]',
    appOnlyDealsBtn: '.deals-nav-tabs a[href$="/app-only"]',
    appOnlyDealsfirstItem: '.daily-deal-item:first-child',
    dealsNav: '.deals-nav',
  },
};
