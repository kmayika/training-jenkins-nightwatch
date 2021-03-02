/* eslint-disable func-names */
exports.command = function () {
  const mobiproductDisplayPage = this.page.mobi_productDisplayPage();
  mobiproductDisplayPage.isElementExists('xpath', mobiproductDisplayPage.elements.selectAnOptionBtn.selector);
  if (process.env.ELEMENT_VISIBLE == true) {
    this
      .perform(() => {
        //   .isVisible({ using: 'css selector', selector: 'button[class*="variants-cta"]', suppressNotFoundErrors: true }, (res) => {
        //     if (res.value == true && res.value !== []) {
        mobiproductDisplayPage
          .clickSelectAnOption()
          . clickVariantDropdownMenuListOption();
        // }
        //   });
      });
  }
  return this;
};
