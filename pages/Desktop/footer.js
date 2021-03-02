const footer = {
  /**
     * This method clicks on the "About Us" link
     */
  clickAboutUs() {
    this
      .api.execute('scrollTo(0,1000000)');
    const browser = process.env.BROWSER;
    switch (browser.toLowerCase()) {
      case 'safari':
        this
          .api.execute(() => {
            // eslint-disable-next-line no-undef
            document.querySelector('[class*="responsive-footer-module"] li a[href$="/about"]').click();
          });
        break;

      default:
        this
          .waitForElementVisible('@aboutUsFooterLink')
          .click('@aboutUsFooterLink');
        break;
    }
    return this;
  },

};

module.exports = {
  commands: [footer],
  url() {
    return this.api.launchUrl;
  },
  elements: {
    aboutUsFooterLink: '[class*="responsive-footer-module"] li a[href$="/about"]',

  },
};
