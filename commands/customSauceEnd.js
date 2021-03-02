const SauceLabs = require('saucelabs').default;

// NOTE: need to use a plain function instead of an arrow function to get
// access to the correct `this` object.
exports.command = function customSauceEnd(callback) {
  const self = this;
  const testOptions = self.options;
  const scBrowsers = ['internet explorer', 'safari', 'chrome', 'firefox', 'microsoftedge'];
  let passed;

  // eslint-disable-next-line prefer-destructuring
  const browserName = testOptions.desiredCapabilities.browserName;

  if (scBrowsers.indexOf(browserName.toLowerCase()) === -1) {
    console.log('🥫  Skip saucelabs job update (not IE/safari).');
    self.end(callback);
    return;
  }

  const saucelabs = new SauceLabs({
    user: testOptions.username,
    key: testOptions.access_key,
    region: 'eu-central-1',
  });

  const sessionid = self.capabilities['webdriver.remote.sessionid'];
  if (typeof sessionid !== 'string') {
    // This might happen if you have your own IE/safari set up.
    console.log('🥫  Skip saucelabs job update (undefined session id).');
    self.end(callback);
    return;
  }
  const jobName = self.currentTest.name;
  if (jobName !== '') {
    passed = (self.currentTest.results.testcases[jobName].failed === 0);
  } else {
    passed = false;
  }

  console.log(`🥫  SauceOnDemandSessionID=${sessionid} job-name=${jobName}`);

  saucelabs.updateJob(testOptions.username, sessionid, {
    passed,
    name: jobName,
  }).then(() => {
    console.log('🥫  Sent saucelabs job update.');
    self.end(callback);
  }).catch((e) => {
    console.error(e);
  });
};
