module.exports = {
    "This is a nightwatch test": (client) => {
        client
          .url(`http://www.${process.env.ENVIRONMENT_URL || 'takealot.com'}`)
          .waitForElementVisible('body', 1000, (res) => {
          })
          .assert.visible('body', `hub host : ${process.env.HUB_HOST}`)
          .pause(2000);
    }
};
