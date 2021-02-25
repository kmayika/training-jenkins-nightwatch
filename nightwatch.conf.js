module.exports = {
    'src_folders': ['tests'],
    selenium: {
        start_process: true,
        host: 'localhost',
        port: 4445,
        server_path: './node_modules/selenium-server-standalone-jar/jar/selenium-server-standalone-3.141.59.jar',
        cli_args: {
          'webdriver.chrome.driver': './node_modules/chromedriver/lib/chromedriver/chromedriver',
        },
      },

    'test_settings': {
        'default': {
            'screenshots': {
                'enabled': true,
                'on_failure': true,
                'on_error': true,
                'path': 'tests_output/screenshots'
            },
            'desiredCapabilities': {
                'browserName': 'chrome',
                'chromeOptions': {
                    'args': ['--headless']
                }
            }
        }
    }
};
