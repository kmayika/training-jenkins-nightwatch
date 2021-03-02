const aboutUs = {
  /**
     * This method validates that the "About" page is rendered.
     */
  validateAboutUsPage() {
    return this
      .waitForElementVisible('@pageContentTitle', 10000, (res) => {
        if (res.value) {
          this
            .removePopUp()
            .getText('@pageContentTitle', (text) => {
              console.log(`****Text in Page Title: ${text.value}****`);
              const actualPageTitle = text.value.replace(/[^a-zA-Z0-9]/g, '').trim().toLowerCase();
              const expectedPageTitle = 'getting to know us';
              this
                .assert.ok(actualPageTitle === expectedPageTitle.replace(/[^a-zA-Z0-9]/g, ''), `[INFO] - Expected Text: \"${expectedPageTitle}\" should match Actual Text: \"${actualPageTitle}\"`);
            });
        } else {
          this
            .assert.ok(false, '[FAIL] - Something went wrong when validating the about us page');
        }
      }, '[STEP] - About Us page should be displayed')
      .waitForElementVisible('@pageContent')
      .assert.visible('@pageContent', 'About Us page is displayed');
  },
  /**
   * This method clicks on the "Learn about our JOURNEY" button
   */
  clickLearnAboutOurJourney() {
    const browser = process.env.BROWSER;
    switch (browser.toLowerCase()) {
      case 'safari':
        this
          .api.execute((selector) => {
            // eslint-disable-next-line no-undef
            document.querySelector(selector).click();
          }, [this.elements.learnAboutOurJourneyBtn.selector]);
        break;

      default:
        this
          .waitForElementVisible('@learnAboutOurJourneyBtn')
          .click('@learnAboutOurJourneyBtn');
        break;
    }
    return this;
  },
  /**
   * This method validates that the "Our Journey" page is rendered
   */
  validateOurJourneyPage() {
    return this
      .waitForElementVisible('@pageContentTitle', 10000, (res) => {
        if (res.value) {
          this
            .removePopUp()
            .getText('@pageContentTitle', (text) => {
              console.log(`****Text in Page Title: ${text.value}****`);
              // add space before capital letter and trim off extra spaces
              const actualPageTitle = text.value.replace(/[^a-zA-Z0-9]/g, '').trim().toLowerCase();
              const ourJourneyPageTitle = 'more about our journey';
              this
                .assert.ok(actualPageTitle == ourJourneyPageTitle.replace(/[^a-zA-Z0-9]/g, ''), `[INFO] - Expected Text: \"${ourJourneyPageTitle}\" should match  Actual Text: \"${actualPageTitle}\"`);
            });
        } else {
          this
            .assert.ok(false, '[FAIL] - Something went wrong when validating the our journey page');
        }
      }, '[STEP] - "our journey" page should be displayed');
    // .waitForElementVisible('@pageContentTitle')
    // .assert.containsText('@pageContentTitle', 'MORE ABOUT\nOUR JOURNEY')
    // .waitForElementVisible('@pageContent')
    // .assert.visible('@pageContent', 'Our Journey page is displayed');
  },
  /**
   * This method clicks on the "and where we are heading..." link
   */
  clickAndWhereWeAreHEadingLink() {
    const browser = process.env.BROWSER;
    switch (browser.toLowerCase()) {
      case 'safari':
        this
          .api.execute((selector) => {
            // eslint-disable-next-line no-undef
            document.querySelector(selector).click();
          }, [this.elements.andWhereWeAreHeadingLink.selector]);
        break;

      default:
        this
          .waitForElementVisible('@andWhereWeAreHeadingLink')
          .click('@andWhereWeAreHeadingLink');
        break;
    }
    return this;
  },
  /**
   * This method clicks on the "a set of core values" link
   */
  clickASetOfCoreValuesLink() {
    const browser = process.env.BROWSER;
    switch (browser.toLowerCase()) {
      case 'safari':
        this
          .api.execute((selector) => {
            // eslint-disable-next-line no-undef
            document.querySelector(selector).click();
          }, [this.elements.aSetOfCoreValuesLink.selector]);
        break;

      default:
        this
          .waitForElementVisible('@aSetOfCoreValuesLink')
          .click('@aSetOfCoreValuesLink');
        break;
    }
    return this;
  },
  /**
   * This method validates that the "Our Values" page is rendered
   */
  validateOurValuesPage() {
    this
      .waitForElementVisible('@pageContentTitle', 10000, (res) => {
        if (res.value) {
          this
            .removePopUp()
            .getText('@pageContentTitle', (text) => {
              console.log(`****Text in Page Title: ${text.value}****`);
              // add space before capital letter and trim off extra spaces
              const actualPageTitle = text.value.replace(/[^a-zA-Z0-9]/g, '').trim().toLowerCase();
              const ourJourneyPageTitle = 'learn more about our values';
              this
                .assert.ok(actualPageTitle == ourJourneyPageTitle.replace(/[^a-zA-Z0-9]/g, ''), `[INFO] - Expected Text: \"${ourJourneyPageTitle}\" should match  Actual Text: \"${actualPageTitle}\"`);
            });
        } else {
          this
            .assert.ok(false, '[FAIL] - Something went wrong when validating the our values page');
        }
      }, '[STEP] - "our values" page should be displayed');
    return this;
  },
  /**
   * This method clicks on the "Take a peek at a day in the life of takealot.com…" link
   */
  clickTakeAPeekLink() {
    const browser = process.env.BROWSER;
    switch (browser.toLowerCase()) {
      case 'safari':
        this
          .api.execute((selector) => {
            // eslint-disable-next-line no-undef
            document.querySelector(selector).click();
          }, [this.elements.takeAPeekLink.selector]);
        break;

      default:
        this
          .waitForElementVisible('@takeAPeekLink')
          .click('@takeAPeekLink');
        break;
    }
    return this;
  },
  /**
   * This method validates that the "Our Environments" page is rendered
   */
  validateOurEnvironmentsPage() {
    this
      .waitForElementVisible('@pageContentTitle', 10000, (res) => {
        if (res.value) {
          this
            .removePopUp()
            .getText('@pageContentTitle', (text) => {
              console.log(`****Text in Page Title: ${text.value}****`);
              // add space before capital letter and trim off extra spaces
              const actualPageTitle = text.value.replace(/[^a-zA-Z0-9]/g, '').trim().toLowerCase();
              const expectedPageTitle = 'learn more about our environment';
              this
                .assert.ok(actualPageTitle == expectedPageTitle.replace(/[^a-zA-Z0-9]/g, ''), `[INFO] - Expected Text: \"${expectedPageTitle}\" should match  Actual Text: \"${actualPageTitle}\"`);
            });
        } else {
          this
            .assert.ok(false, '[FAIL] - Something went wrong when validating the our environment page');
        }
      }, '[STEP] - "our environment" page should be displayed');
    return this;
  },
  /**
   * This method clicks on the "latest happenings & developments" link
   */
  clickLatestHappeningsAndDevelopmentsLink() {
    const browser = process.env.BROWSER;
    switch (browser.toLowerCase()) {
      case 'safari':
        this
          .api.execute((selector) => {
            // eslint-disable-next-line no-undef
            document.querySelector(selector).click();
          }, [this.elements.latestHappeningsLink.selector]);
        break;

      default:
        this
          .waitForElementVisible('@latestHappeningsLink')
          .click('@latestHappeningsLink');
        break;
    }
    return this;
  },
  /**
   * This method validates that the "Company News" page is rendered
   */
  validateCompanyNewsPage() {
    this
      .waitForElementVisible('@pageContentTitle', 10000, (res) => {
        if (res.value) {
          this
            .removePopUp()
            .getText('@pageContentTitle', (text) => {
              console.log(`****Text in Page Title: ${text.value}****`);
              // add space before capital letter and trim off extra spaces
              const actualPageTitle = text.value.replace(/[^a-zA-Z0-9]/g, '').trim().toLowerCase();
              const expectedPageTitle = 'newsroom';
              this
                .assert.ok(actualPageTitle == expectedPageTitle.replace(/[^a-zA-Z0-9]/g, ''), `[INFO] - Expected Text: \"${expectedPageTitle}\" should match  Actual Text: \"${actualPageTitle}\"`);
            });
        } else {
          this
            .assert.ok(false, '[FAIL] - Something went wrong when validating the Company News page');
        }
      }, '[STEP] - "Company News" page should be displayed');
    return this;
  },
  /**
   * This method clicks on the "supporting Beautiful Gate South Africa…" link
   */
  clickSupportingBeautifulGateLink() {
    const browser = process.env.BROWSER;
    switch (browser.toLowerCase()) {
      case 'safari':
        this
          .api.execute((selector) => {
            // eslint-disable-next-line no-undef
            document.querySelector(selector).click();
          }, [this.elements.supportingBeautifulGateLink.selector]);
        break;

      default:
        this
          .waitForElementVisible('@supportingBeautifulGateLink')
          .click('@supportingBeautifulGateLink');
        break;
    }
    return this;
  },
  /**
   * This method validates that the "Our Charity" page is rendered
   */
  validateOurCharityPage() {
    this
      .waitForElementVisible('@pageContentTitle', 10000, (res) => {
        if (res.value) {
          this
            .removePopUp()
            .getText('@pageContentTitle', (text) => {
              console.log(`****Text in Page Title: ${text.value}****`);
              // add space before capital letter and trim off extra spaces
              const actualPageTitle = text.value.replace(/[^a-zA-Z0-9]/g, '').trim().toLowerCase();
              const expectedPageTitle = 'learn more about our charity';
              this
                .assert.ok(actualPageTitle == expectedPageTitle.replace(/[^a-zA-Z0-9]/g, ''), `[INFO] - Expected Text: \"${expectedPageTitle}\" should match  Actual Text: \"${actualPageTitle}\"`);
            });
        } else {
          this
            .assert.ok(false, '[FAIL] - Something went wrong when validating the Our Charity page');
        }
      }, '[STEP] - "Our Charity" page should be displayed');
    return this;
  },

};

module.exports = {
  commands: [aboutUs],
  url() {
    return this.api.launchUrl;
  },
  elements: {
    pageContentTitle: 'h2.strap-header',
    pageContent: '.storycontent',
    learnAboutOurJourneyBtn: '.strap-link[href$="/our-journey/"]',
    andWhereWeAreHeadingLink: '.storycontent a[href$="/our-journey/"]',
    aSetOfCoreValuesLink: '.storycontent a[href$="/our-values/"]',
    takeAPeekLink: '.storycontent a[href$="/our-environment/"]',
    latestHappeningsLink: '.storycontent a[href$="/company-news/"]',
    supportingBeautifulGateLink: '.storycontent a[href$="/our-charity/"]',
  },
};
