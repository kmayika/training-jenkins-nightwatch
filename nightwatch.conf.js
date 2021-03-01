const seleniumServer = require('selenium-server');
const chromedriver = require('chromedriver');
const geckodriver = require('geckodriver');
console.log(process.env.HUB_HOST);
module.exports = {
    "src_folders" : ["tests"],
    "test_workers": false,
    "selenium": {
    //   "cli_args": {
    //     "webdriver.chrome.driver" : "node_modules/.bin/chromedriver",
    //     "webdriver.gecko.driver" : "node_modules/.bin/geckodriver",
    //     "webdriver.edge.driver" : "node_modules/.bin/edgedriver"
    // },
    "log_path": "",
    "port": 4444,
    server_path: seleniumServer.path,
    "start_process": false
  },

    "test_settings" : {
      "default" : {
        "launch_url" : "http://localhost",
        "selenium_port"  : 4444,
        "selenium_host"  : process.env.SELENIUM_HOST || '127.0.0.1',
        "silent": true,
        "screenshots" : {
          "enabled" : false,
          "path" : "screenshots/Chrome/"
        },
        "desiredCapabilities": {
          "browserName": "chrome",         
        }
      },

      "chrome" : {
        "desiredCapabilities": {
          "browserName": "chrome",
          "goog:chromeOptions":{
            w3c: false,
            "args": [
              "disable-web-security",
              "ignore-certificate-errors",
              "--test-type",
              "--disable-gpu",
              "--headless",
              "--remote-debugging-port=9222",
              "--no-sandbox",
            ]
          } 
        },
        selenium: {
          cli_args: {
            'webdriver.chrome.driver': chromedriver.path
          }
        }
      },

      "firefox" : {
        "desiredCapabilities": {
          "browserName": "firefox",
          "firefoxOptions":{
            w3c: true,
            "args": [
              "disable-web-security",
              "ignore-certificate-errors",
              "--test-type",
              "--disable-gpu",
              "--headless",
              "--remote-debugging-port=9222",
              "--no-sandbox",
            ]
          } 
        },
        selenium: {
          cli_args: {
            'webdriver.gecko.driver': geckodriver.path
          }
        }
      }
    }
  };
