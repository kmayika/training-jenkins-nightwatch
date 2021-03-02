/* eslint-disable prefer-destructuring */

const { USERS } = require('../../constants');

function setTestContext(client) {
  const tags = client.options.tag_filter;
  let username;
  let password;
  const browser = client.options.desiredCapabilities.browserName.toLowerCase().replace(/ /g, '');
  const userList = process.env.URL.toLowerCase().includes('takealot') ? USERS[browser].production : USERS[browser].staging;
  // eslint-disable-next-line no-nested-ternary
  const platform = tags.toLowerCase().includes('mobi') ? 'mobi' : tags.toLowerCase().includes('desktop') ? 'desktop' : 'not specified';
  const randomSelect = Math.floor((Math.random() * userList.length));
  // check if jenkins browser build param is "all" or if running tests in parallel locally
  if (process.env.BROWSER.toLowerCase().includes('all') || client.options.parallel_mode === true) {
    if (!tags.toLowerCase().includes('critical')) {
      username = process.env.NW_USERNAME;
      password = process.env.NW_PASSWORD;
    } else {
      username = userList[randomSelect].username;
      password = userList[randomSelect].password;
    }
  } else {
    username = process.env.NW_USERNAME;
    password = process.env.NW_PASSWORD;
  }
  process.env.BROWSER = browser;
  process.env.TAGS = tags;
  // set global variables already in use
  // process.env.FINAL_BROWSER = browser;
  return {
    username,
    password,
    platform,
    tag: tags,
    browser,
  };
}

module.exports = {
  setTestContext,
};
