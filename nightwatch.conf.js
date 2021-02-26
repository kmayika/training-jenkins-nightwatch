module.exports = {
    "src_folders" : ["tests"],
    "test_workers": false,
    "selenium": {
      "cli_args": {
        "webdriver.chrome.driver" : "node_modules/.bin/chromedriver",
        "webdriver.gecko.driver" : "node_modules/.bin/geckodriver",
        "webdriver.edge.driver" : "node_modules/.bin/edgedriver"
    },
    "log_path": "",
    "port": 4444,
    server_path: './node_modules/selenium-server-standalone-jar/jar/selenium-server-standalone-3.141.59.jar',
    "start_process": true
  },

    "test_settings" : {
      "chrome" : {
        "launch_url" : "http://localhost",
        "selenium_port"  : 4444,
        "selenium_host"  : process.env.SELENIUM_HOST || 'localhost',
        "silent": false,
        "screenshots" : {
          "enabled" : false,
          "path" : "screenshots/Chrome/"
        },
        "desiredCapabilities": {
          "browserName": "chrome",
          "chromeOptions":{
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
        }
      },

      "edge" : {
        "desiredCapabilities": {
          "browserName": "MicrosoftEdge"
        }
      }
    }
  };
