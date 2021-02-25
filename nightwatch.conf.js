module.exports = {
    'src_folders': ['tests'],
    selenium: {
        check_process_delay: 5000,
        start_process: false,
        host: 'localhost',
        port: 4444,
        default_path_prefix: "/wd/hub"
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
                'goog:chromeOptions': {
                    w3c: false,
                    args: ['--headless', '--no-sandbox']
                }
            }
        }
    }
};
