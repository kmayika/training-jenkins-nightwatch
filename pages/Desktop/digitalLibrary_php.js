const digitalLibrary = {
  /**
   * This method validates that the Digital Library is rendered
   */
  validateDigitalLibraryPage() {
    return this
      .waitForElementVisible('@digitalLibraryContent', 10000, (res) => {
        if (res.value) {
          this
            .removePopUp()
            .assert.containsText('@digitalLibraryTitle', 'Digital Library');
        } else {
          this
            .assert.ok(false, '[FAIL] - Something went wrong when validating Digital Library page')
        }
      }, '[STEP] - Digital Library page should be displayed');
  },
  /**
   * This method clicks on the "Download" icon
   */
  clickDownloadIcon() {
    return this
      .waitForElementVisible('@downloadIcon')
      .assert.visible('@downloadIcon')
      .click('@downloadIcon');
  },
  /**
   * This method validates that the "Download your eBook" modal is rendered
   */
  validateDownloadYourEbookModal() {
    return this
      .waitForElementVisible('@downloadYourEbookModal')
      .assert.visible('@downloadYourEbookModal', 'Download your eBook Modal Displayed')
      .waitForElementVisible('@downloadYourEbookModalTitle')
      .assert.containsText('@downloadYourEbookModalTitle', 'Download your eBook');
  },
  /**
   * This method clicks on the "X" sign on the modal
   */
  clickCloseModal() {
    return this
      .waitForElementVisible('@closeBtn')
      .assert.visible('@closeBtn')
      .click('@closeBtn');
  },
};

module.exports = {
  commands: [digitalLibrary],
  url() {
    return this.api.launchUrl;
  },
  elements: {
    digitalLibraryContent: '[class*="content"]',
    digitalLibraryTitle: '[class*="content"] h1',
    downloadIcon: '.icon-download',
    downloadYourEbookModal: '[id^="download"]',
    downloadYourEbookModalTitle: '[id^="download"] h4',
    closeBtn: 'a[title="Close"]',
  },

};
