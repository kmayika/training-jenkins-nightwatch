const googleTagAssistant = {
  /**
   * This method previews the latest container
   */
  previewGoogleTagManagerContainer(url) {
    this
      .waitForElementVisible('@tagAssistantLogo', 10000, (res) => {
        if (res.value) {
          this
            // .assert.visible('@tagAssistantLogo')
            // .clickDebugNewDomainLink()
            .validateTagAssistantDialog()
            .enterUrl(`${url}`)
            .pause(2000)
            .clickStart()
            .pause(10000);
        } else {
          this
            .assert.ok(false, '[FAIL] - Something went wrong when Validating Google Assistant. ****ERROR: Could not start test in GTM Container. did you set the TAG_ASSISTANT_LINK ? ****');
        }
      }, '[PRE-REQUESITE STEP] - Google Tag Container Is Previewed in Domain');
    return this;
  },
  /**
   * This method clicks on the "Click Here to start debugging a new domain" link
   */
  clickDebugNewDomainLink() {
    return this
      .waitForElementVisible('@debugDomainLink', 10000, (res) => {
        if (res.value) {
          this
            .click('@debugDomainLink');
        } else {
          this
            .assert.ok(false, '[FAIL] - Something went wrong when clicking the new domain debug link');
        }
      }, '[STEP] - New Domain Debug link should be displayed and clicked');
  },
  /**
   * This method validates that the Tag Assistant Dialog Box is open
   */
  validateTagAssistantDialog() {
    return this
      .waitForElementVisible('@StartTagAssistantDialogBox', (res) => {
        if (res.value) {
          this
            .assert.visible('@StartTagAssistantDialogBox');
        } else {
          this
            .assert.ok(false, '[FAIL] -  Something went wrong when Validating Tag Assistant Modal');
        }
      }, '[STEP] - Tag Assistant Modal Should be displayed');
  },
  /**
   * This method enters the Domain on the Tag Assistant Dialog
   * @param {string} url
   */
  enterUrl(url) {
    return this
      .waitForElementVisible('@urlInputBox')
      .clearValue('@urlInputBox')
      .setValue('@urlInputBox', url);
  },
  /**
   * This method clicks on the "Start" button
   */
  clickStart() {
    return this
      .waitForElementVisible('@startBtn', 10000, (res) => {
        if (res.value) {
          this
            .click('@startBtn');
        } else {
          this
            .assert.ok(false, '[FAIL] - Something went wrong when clicking start button');
        }
      }, '[STEP] - Start Button should be displayed and clicked');
  },
  /**
   * This method hides the debugger
   */
  clickHideDebugger() {
    this
      .api.execute(() => {
        // eslint-disable-next-line no-undef
        const shadow = document.querySelector('gtm-debug-badge');
        shadow.shadowRoot.querySelector('.badge').querySelector('.badge__top').querySelector('button.btn-hide').click();
      });
    return this;
  },
};

module.exports = {
  commands: [googleTagAssistant],
  elements: {
    tagAssistantLogo: '[class^="home-header__brand-name"]',
    debugDomainLink: '[class^="empty-domain-slat"]',
    StartTagAssistantDialogBox: '[class="ctui-dialog-header"]',
    urlInputBox: '#domain-start-url',
    startBtn: 'button[class^="btn btn--filled"]',
    debugger: 'gtm-debug-badge',
  },
};
