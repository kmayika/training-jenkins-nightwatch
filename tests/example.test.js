module.exports = {
    "This is a nightwatch test": (client) => {
        client
          .url(`http://www.${process.env.ENVIRONMENT_URL}`)
          .waitForElementVisible('body', 1000)
          .assert.visible('body', `hub host : ${process.env.HUB_HOST}`)
          .pause(10000);
    }
};
