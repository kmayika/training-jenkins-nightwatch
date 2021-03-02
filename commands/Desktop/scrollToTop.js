/* eslint-disable func-names */
exports.command = function () {
  this
    .execute('scrollTo(0,-4000)', () => { console.log('Scrolled Up'); });
  return this;
};
