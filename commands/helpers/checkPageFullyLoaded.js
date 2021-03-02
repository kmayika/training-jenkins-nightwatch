/* eslint-disable func-names */
const checkPageFullyLoaded = function () {
  this
    .execute('return document.readyState;', (res) => {
      if (res.value === 'complete') {
        return true;
      }
      return false;
    });
};

exports.command = checkPageFullyLoaded;
