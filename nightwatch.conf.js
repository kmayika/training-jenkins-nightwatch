module.exports = {
    "src_folders" : ["tests"],
    "test_workers": false,
    "selenium": {
      "cli_args": {
        "webdriver.chrome.driver" : require('chromedriver').path,
        "webdriver.gecko.driver" : "node_modules/.bin/geckodriver",
        "webdriver.edge.driver" : "node_modules/.bin/edgedriver.cmd"
    },
    "log_path": "",
    "port": 4460,
    server_path: './node_modules/selenium-server-standalone-jar/jar/selenium-server-standalone-3.141.59.jar',
    "start_process": true
  },

    "test_settings" : {
      "chrome" : {
        "launch_url" : "http://localhost",
        "selenium_port"  : 4460,
        "selenium_host"  : "localhost",
        "silent": true,
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
                  "--remote-debugging-port=9222"
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
