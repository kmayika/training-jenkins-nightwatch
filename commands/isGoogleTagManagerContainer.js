/* eslint-disable eqeqeq */
/* eslint-disable func-names */

const platform = require('../commands/getTestPlatform');

exports.command = function (url, done) {
  const googleTagManager = this.page.googleTagManager();
  platform.getPlatform();
  if (process.env.GTM_CONTAINER && process.env.GTM_CONTAINER == 'yes' && process.env.TAG_ASSISTANT_LINK !== '') {
    try {
      this
        .url(process.env.TAG_ASSISTANT_LINK);
      googleTagManager
        .previewGoogleTagManagerContainer(url);
      this
        .windowHandles((res) => {
          const handle = res.value[1];
          this
            .switchWindow(handle);
          if (!process.env.PLTFRM.toLowerCase().includes('mobi')) {
            this
              .maximizeWindow();
            googleTagManager
              .clickHideDebugger();
          } else {
            this
              .resizeWindow(500, 900, done);
            googleTagManager
              .clickHideDebugger();
          }
        });
    } catch (error) {
      console.log('****ERROR: Could not start test in GTM Container. did you set the TAG_ASSISTANT_LINK ? ****');
    }
  } else {
    this
      .url(`${url}`);
    if (!process.env.PLTFRM.toLowerCase().includes('mobi')) {
      this
        .maximizeWindow();
    } else {
      this
        .resizeWindow(500, 900, done);
    }
  }

  return this;
};
