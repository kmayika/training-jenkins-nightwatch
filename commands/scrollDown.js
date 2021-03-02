/* eslint-disable func-names */

exports.command = function (scrollAmount = 1000) {
  this
    .pause(2000)
    .perform(() => {
      this
        .execute('return document.readyState;', (res) => {
          console.log(`Page Load Status: ${res.value}`);
          if (res.value === 'complete') {
            this
              .execute(`scrollTo(0, ${scrollAmount})`, () => {
                console.log('scrolled down');
              });
          } else {
            this
              .execute(`scrollTo(0, ${scrollAmount})`, () => {
                console.log('scrolled down');
              });
          }
        });
      return this;
    });
};
