module.exports = {
    "This is a nightwatch test": (client) => {
        client
          .url('http://www.takealot.com')
          .waitForElementVisible('body', 1000)
          .assert.visible('body', '[YES]')
          .pause(10000);
    }
};
