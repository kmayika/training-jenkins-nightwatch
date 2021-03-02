const newsletter = {
  /**
     * This method validates that the "Newsletter Subscription" page is rendered.
     */
  validateNewsletterPage() {
    return this
      .waitForElementPresent('@newsletterModule')
      .assert.visible('@newsletterModule', 'Newsletter page Displayed')
      .waitForElementPresent('@newsletterModuleTitle')
      .assert.containsText('@newsletterModuleTitle', 'Newsletter Subscriptions');
  },
  /**
     * This method validates that the "My Account" side bar is rendered
     */
  validateMyAccountSideMenu() {
    return this
      .waitForElementPresent('@myAccountSideBar')
      .assert.visible('@myAccountSideBar', 'My Account Sidebar is Displayed')
      .waitForElementPresent('@myAccountSideBarTitle')
      .assert.containsText('@myAccountSideBarTitle', 'My Account');
  },
  /**
   * This method selects a department on the department checkbox.
   */
  selectDepartment() {
    return this
      .waitForElementPresent('@departmentLastCheckbox')
      .assert.visible('@departmentLastCheckbox')
      .click('@departmentLastCheckbox');
  },
  /**
   * This method clicks on the "Save Preference" button
   */
  clickSavePreferences() {
    return this
      .waitForElementPresent('@savePreferencesBtn')
      .assert.visible('@savePreferencesBtn')
      .click('@savePreferencesBtn');
  },
  /**
   * This method validates that the Newsletter preferences have been updated successfully
   */
  validateNewsletterPreferencesSuccessfullyUpdated() {
    return this
      .waitForElementPresent('@successBanner')
      .assert.containsText('@successBanner', 'Your newsletter preferences have been updated.');
  },

};


module.exports = {
  commands: [newsletter],
  url() {
    return this.api.launchUrl;
  },
  elements: {
    newsletterModule: '[class^="account-newsletter"]',
    newsletterModuleTitle: '[class^="account-newsletter"] h1',
    myAccountSideBar: '[class^="profile-navigation-container account-module_navigation"]',
    myAccountSideBarTitle: '[class^="profile-navigation-container account-module_navigation"] > div h1',
    departmentLastCheckbox: 'form > div.grid-x > div:last-child label',
    savePreferencesBtn: '[class^="account-newsletter"] button[class^="button "]',
    successBanner: '[class*="toast-content-module_message"]',
  },
};
