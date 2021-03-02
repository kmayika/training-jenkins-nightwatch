/* eslint-disable func-names */
exports.command = function (using = 'css selector', selector) {
  console.log(selector, using);
  switch (using) {
    case 'xpath':
      this
        .perform(() => {
          this
            .useXpath()
            .isVisible({ selector, suppressNotFoundErrors: true }, (res) => {
              if (res.value == true && res.value !== []) {
                process.env.ELEMENT_VISIBLE = true;
                return this;
              }
              process.env.ELEMENT_VISIBLE = false;
              return this;
            });
        });

      break;

    default:
      this
        .perform(() => {
          this
            .useCss()
            .isVisible({ selector, suppressNotFoundErrors: true }, (res) => {
              console.log(res);
              if (res.value == true && res.value !== []) {
                console.log(res);
                process.env.ELEMENT_VISIBLE = true;
                return this;
              }
              process.env.ELEMENT_VISIBLE = false;
              return this;
            });
        });
      break;
  }
};
