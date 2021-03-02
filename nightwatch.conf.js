const seleniumServer = require('selenium-server');
const chromedriver = require('chromedriver');
const geckodriver = require('geckodriver');


const url = process.env.URL.toLowerCase();
console.log(url);
module.exports = {
    src_folders: ["tests"],
    page_objects_path: [
      'pages/Desktop',
    ],
    custom_commands_path: [
      './commands',
      './commands/Mobi',
      './commands/Desktop',
      './commands/Critical',
      './commands/helpers',
    ],
    output_folder: './report',
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
      launch_url: `http://www.${url}`,
      globals: {
        username: process.env.NW_USERNAME,
        password: process.env.NW_PASSWORD
      },
      "selenium_port"  : 4444,
      "selenium_host"  : process.env.SELENIUM_HOST || '127.0.0.1',
      "silent": true,
      screenshots: {
        enabled: true,
        on_failure: true,
        on_error: true,
        path: './tests_output/screenshots',
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
            "window-size=1280,800"
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
        "acceptSslCerts": true,
        "javascriptEnabled": true,
        firefoxOptions:{
            w3c: false,
            "args": [
              "--disable-gpu",
              "--headless",
              "--remote-debugging-port=9222",
              "--no-sandbox"
            ]
        }, 
        acceptInsecureCerts: true,
      },
      selenium: {
        cli_args: {
          'webdriver.gecko.driver': geckodriver.path
        }
      }
    }
  }
};
