const header = {
  /**
   * This method clicks on the "Logout" link in the header
   */
  clickLogout() {
    return this
      .waitForElementVisible('@logoutLink')
      .click('@logoutLink');
  },
  /**
   * This method clicks on the Takealot Logo
   */
  clickTakealotLogo() {
    return this
      .waitForElementVisible('@takealotLogo', () => {}, 'Takealot Logo found')
      .click('@takealotLogo');
  },
};

module.exports = {
  commands: [header],
  url() {
    return this.api.launchUrl;
  },
  elements: {
    logoutLink: 'a[href*="/account/logout"]',
    takealotLogo: '[class="takeAlot-logo"]',
  },
};
