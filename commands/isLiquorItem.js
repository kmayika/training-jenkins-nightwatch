/* eslint-disable func-names */
const { AGE_VERIFICATION } = require('../constants');

const platform = require('../commands/getTestPlatform');

exports.command = function () {
  const cart = this.page.cart();
  // const mobiAgeVerification = this.page.mobi_checkoutAgeVerification();
  platform.getPlatform();

  this
    .perform(() => {
      this
        .isVisible({ selector: cart.elements.ageVerificationPanel.selector, suppressNotFoundErrors: true, timeout: 10000 }, (res) => {
          if (res.value == true) {
            if (!process.env.PLTFRM.toLowerCase().includes('mobi')) {
              cart
                .validateAgeVerificationPanel()
                .enterDayOfBirth(AGE_VERIFICATION.ADULT.dayOfBirth)
                .enterMonthOfBirth(AGE_VERIFICATION.ADULT.monthOfBirth)
                .enterYearOfBirth(AGE_VERIFICATION.ADULT.yearOfBirth)
                .clickVerify();
            } else {
              mobiAgeVerification
                .validateAgeVerificationPage()
                .enterDayOfBirth(AGE_VERIFICATION.ADULT.dayOfBirth)
                .pause(2000)
                .enterMonthOfBirth(AGE_VERIFICATION.ADULT.monthOfBirth)
                .pause(2000)
                .enterYearOfBirth(AGE_VERIFICATION.ADULT.yearOfBirth)
                .clickVerify();
            }
          }
        });
    });
  return this;
};
