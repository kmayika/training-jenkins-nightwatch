/* eslint-disable func-names */

/**
   * This method ensures that the new search listings is used
   * @param {string} message The expected toast message
   */
exports.command = function () {
  this
    .setCookie({ name: 'react_search', value: 'True' })
    .refresh()
    .refresh();
  return this;
};
